import { PropType } from 'vue';
import { buildProps, createNamespace, generateId } from '@tak-poidet/utility';

export const nsField = createNamespace('field');

export function useFieldProps() {
	return buildProps({
		label: {
			type: String as PropType<string>,
			default: null
		},
		id: {
			type: String as PropType<string>,
			required: true,
			default() {
				return generateId('field');
			}
		}
	});
}
