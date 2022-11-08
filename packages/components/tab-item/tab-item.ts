import { PropType } from 'vue';
import { buildProps } from '@tak-poidet/utility';

export const nameComponentTabItem = 'tab-item';
export function useTabItemProps() {
	return buildProps({
		title: {
			type: String as PropType<string>,
			required: true
		}
	});
}

