import { PropType } from 'vue';
import { buildProps, generateId } from '@tak-poidet/utility';

export const nameComponentCheckbox = 'checkbox';
export function useCheckboxProps() {
	return buildProps({
		id: {
			type: String as PropType<string>,
			required: false,
			default(this: void) {
				return generateId(nameComponentCheckbox);
			}
		},
		name: {
			type: String as PropType<string>,
			required: true
		},
		modelValue: {
			type: Boolean as PropType<boolean>,
			required: true,
			default: false
		},
		disabled: {
			type: Boolean as PropType<boolean>,
			required: false,
			default: false
		}
	});
}
