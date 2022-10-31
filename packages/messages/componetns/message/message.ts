import { InjectionKey, PropType, ref, Ref } from 'vue';
import { buildProps, useState } from 'tak-poidet';
import { MessagePromiseResolve, MessageResponse, MessageType } from '../../types';

export function useMessageProps() {
	return buildProps({
		modelValue: {
			type: Boolean as PropType<boolean>,
			required: true
		},
		title: {
			type: String as PropType<string | undefined>,
			required: false,
			default: undefined
		},
		text: {
			type: String as PropType<string>,
			required: true
		}
	});
}

export const MessageDurationAnimate = 400;

export const MessageKey = <
	InjectionKey<{
		isShow: Ref<boolean>;
		setIsShow(value: boolean): void;
	}>
>Symbol('message-key');

export function useMessage<T extends MessageType>(type: T) {
	let resolve: MessagePromiseResolve<T>;
	const [isShow, setIsShow] = useState(false);
	const result = ref<Awaited<MessageResponse[T]>>();

	function show() {
		setIsShow(true);
		return new Promise<Awaited<MessageResponse[T]>>((r) => {
			resolve = r;
		});
	}

	function hide() {
		setIsShow(false);
	}

	return {
		isShow,
		setIsShow,
		show,
		hide,

		resolve() {
			// @ts-ignore
			resolve(result.value);
		},
		result
	};
}
