import { PropType } from 'vue';
import { buildProps, generateId } from '@tak-poidet/utility';
import { useFieldProps } from '../field';

export const nameComponentNumber = 'number';
const fieldProps = useFieldProps();

Object.assign(fieldProps.id, {
	required: false,
	default() {
		return generateId(nameComponentNumber);
	}
});

export function useNumberProps() {
	return buildProps({
		...fieldProps,
		label: {
			type: String as PropType<string>,
			required: true
		},
		name: {
			type: String as PropType<string>,
			required: true
		},
		min: {
			type: Number as PropType<number>,
			required: false,
			default: -Number.MAX_SAFE_INTEGER
		},
		max: {
			type: Number as PropType<number>,
			required: false,
			default: Number.MAX_SAFE_INTEGER
		},
		step: {
			type: Number as PropType<number>,
			required: false,
			default: 1
		},
		modelValue: {
			type: Number as PropType<number>,
			required: true,
			default: 0
		},
		disabled: {
			type: Boolean as PropType<boolean>,
			required: false,
			default: false
		},
		formatting: {
			type: Function as PropType<(value: number) => string>,
			required: false,
			default(value: number) {
				return value.toString();
			}
		}
	});
}
