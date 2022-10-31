export enum MessageType {
	Alert = 'alert',
	Confirm = 'confirm'
}

export interface MessageResponse {
	[MessageType.Alert]: Promise<void>;
	[MessageType.Confirm]: Promise<boolean>;
}

export type MessagePromiseResolve<T extends MessageType, R = Awaited<MessageResponse[T]>> = (
	value: R | PromiseLike<R>
) => void;

export interface ExposeMessage<T extends MessageType> {
	show(): MessageResponse[T];

	hide(): void;
}
