import { PropType } from 'vue';
import { buildProps } from '@tak-poidet/utility';

export function useDetailsProps() {
	return buildProps({
		title: {
			type: String as PropType<string>,
			required: true
		},
		open: {
			type: Boolean as PropType<boolean>,
			required: false,
			default: false
		}
	});
}
