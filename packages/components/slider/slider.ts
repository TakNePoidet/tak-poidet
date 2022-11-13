import {PropType} from 'vue';
import {buildProps} from '@tak-poidet/utility';
import {
	useDefinePropsDisabled,
	useDefinePropsMax,
	useDefinePropsMin,
	useDefinePropsStep
} from '@tak-poidet/composables';

export const nameComponentSlider = 'slider';

export function useSliderProps() {
	return buildProps({
		modelValue: {
			type: Number as PropType<number>,
			required: false,
			default: 0
		},
		breakpoints: {
			type: Boolean as PropType<boolean>,
			required: false,
			default: false
		},
		marks: {
			type: Object as PropType<Record<number, string>>,
			required: false,
			default() {
				return {};
			}
		},
		values: {
			type: Array as PropType<Array<number>>,
			default(this: void) {
				return [];
			}
		},
		min: {
			type: Number as PropType<number>,
			required: true,
			default: -Number.MAX_SAFE_INTEGER
		},
		max: {
			type: Number as PropType<number>,
			required: true,
			default: Number.MAX_SAFE_INTEGER
		},
		...useDefinePropsStep(),
		...useDefinePropsDisabled()
	});
}
