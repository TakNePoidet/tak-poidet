import { PropType } from 'vue';
import { buildProps, generateId } from '@tak-poidet/utility';

export const nameComponentInput = 'radio';
export function useRadioProps() {
	return buildProps({
		id: {
			type: String as PropType<string>,
			required: false,
			default(this: void) {
				return generateId(nameComponentInput);
			}
		},
		name: {
			type: String as PropType<string>,
			required: true
		},
		value: {
			type: String as PropType<string>,
			required: true,
			default: null
		},
		checked: {
			type: Boolean as PropType<boolean>,
			required: false,
			default: false
		},
		modelValue: {
			type: String as PropType<string>,
			required: true,
			default: null
		},
		disabled: {
			type: Boolean as PropType<boolean>,
			required: false,
			default: false
		}
	});
}
