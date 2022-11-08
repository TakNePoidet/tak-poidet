import { InjectionKey, Ref } from 'vue';

export interface Panel {
	title: Ref<string>;
	id: number;
}

export type TabsInjectionKey = InjectionKey<{
	register(panel: Panel): void;
	unregister(id: string): void;
}>;
