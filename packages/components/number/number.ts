import { PropType } from 'vue';
import { buildProps, generateId } from '@tak-poidet/utility';
import { useFieldProps } from '../field';
import {useDefinePropsMax, useDefinePropsMin, useDefinePropsStep} from "@tak-poidet/composables";

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
		...useDefinePropsMin(),
		...useDefinePropsStep(),
		...useDefinePropsMax(),
		modelValue: {
			type: Number as PropType<number>,
			required: false,
			default: undefined
		},
		disabled: {
			type: Boolean as PropType<boolean>,
			required: false,
			default: false
		},
		placeholder: {
			type: String as PropType<string>,
			required: false,
			default: null
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
