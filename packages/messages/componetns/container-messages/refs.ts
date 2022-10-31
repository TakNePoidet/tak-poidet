import { Component, shallowReactive } from 'vue';
import { EmptyObject } from 'tak-poidet';

export interface MessagesRefItem {
	component: Component;
	params: EmptyObject;
	returnValue: (value: any | PromiseLike<any>) => void;
}

const messageRefs = shallowReactive<Record<string, MessagesRefItem>>({});

export function useMessageRefs() {
	return { messageRefs };
}
