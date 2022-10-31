import { Component, ComponentObjectPropsOptions } from 'vue';
import { EmptyObject, generateId } from 'tak-poidet';
import { ExtractPropTypes } from '@vue/runtime-core';
import { MessageResponse, MessageType } from './types';
import {
	TpMessageAlert,
	TpMessageConfirm,
	useMessageAlertProps,
	useMessageConfirmProps,
	useMessageRefs
} from './componetns';

type RequiredField<T, K extends keyof T> = T & Required<Pick<T, K>>;
const components = {
	[MessageType.Alert]: TpMessageAlert,
	[MessageType.Confirm]: TpMessageConfirm
} as const;

type ExtractParams<T extends () => ComponentObjectPropsOptions, P = ExtractPropTypes<ReturnType<T>>> =
	// @ts-ignore
	RequiredField<Partial<P>, 'text'>;

export class Message {
	static Alert(params: ExtractParams<typeof useMessageAlertProps>) {
		return this.registerAsyncMessages(MessageType.Alert, params);
	}

	static Confirm(params: ExtractParams<typeof useMessageConfirmProps>) {
		return this.registerAsyncMessages(MessageType.Confirm, params);
	}

	static async registerAsyncMessages<T extends MessageType, V = Awaited<MessageResponse[T]>>(
		type: T,
		params: EmptyObject
	) {
		const { messageRefs } = useMessageRefs();

		return new Promise<V>((resolve, reject) => {
			const component: Component = components[type];
			const id = generateId(type);

			try {
				messageRefs[id] = {
					component,
					params,
					returnValue: resolve
				};
			} catch (e) {
				delete messageRefs[id];
				reject(e);
			}
		});
	}
}
