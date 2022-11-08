import { InjectionKey, PropType, Ref } from 'vue';
import { buildProps } from '@tak-poidet/utility';
import { TabsInjectionKey } from './types';

export const nameComponentTabs = 'tabs';
export function useTabsProps() {
	return buildProps({
		// title: {
		// 	type: String as PropType<string>,
		// 	required: true
		// }
	});
}

export const keyTabs = <TabsInjectionKey>Symbol(nameComponentTabs);
