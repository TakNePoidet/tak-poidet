import { PropType } from 'vue';
import type IMask from 'imask';
import { Autocomplete, buildProps, generateId, omit } from '@tak-poidet/utility';
import { useFieldProps } from '../field';

const fieldProps = useFieldProps();

Object.assign(fieldProps.id, {
	required: false,
	default() {
		return generateId('input');
	}
});

export function useInputProps() {
	return buildProps({
		...fieldProps,
		name: {
			type: String as PropType<string>,
			required: true
		},
		type: {
			type: String as PropType<'text' | 'tel' | 'email'>,
			required: false,
			default: 'text'
		},
		modelValue: {
			type: String as PropType<string>,
			required: true,
			default: null
		},
		placeholder: {
			type: String as PropType<string>,
			required: false,
			default: null
		},
		autocomplete: {
			type: String as PropType<'on' | 'off' | Autocomplete>,
			required: false,
			default: 'off'
		},
		disabled: {
			type: Boolean as PropType<boolean>,
			required: false,
			default: false
		},
		mask: {
			type: Object as PropType<IMask.AnyMaskedOptions>,
			required: false,
			default: undefined
		}
	});
}
