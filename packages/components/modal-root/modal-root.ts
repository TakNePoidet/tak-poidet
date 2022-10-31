import { PropType } from 'vue';
import { buildProps, omit } from '@tak-poidet/utility';
import { useOverlayProps } from '../overlay';

const overlayProps = useOverlayProps();

export function useModelRootProps() {
	return buildProps({
		modelValue: {
			type: Boolean as PropType<boolean>,
			required: true,
			default: false
		},
		esc: {
			type: Boolean as PropType<boolean>,
			required: false,
			default: true
		},
		duration: {
			type: Number as PropType<number>,
			default: 0
		},
		easing: {
			type: String as PropType<string>,
			default: 'cubic-bezier(0.42, 0, 0.19, 1'
		},
		keyframes: {
			type: Object as PropType<PropertyIndexedKeyframes>,
			default() {
				return {
					// opacity: [0, 1],
					// transform: ['scale(1.4)', 'scale(1.)']
				};
			}
		},
		durationOverlay: overlayProps.duration,
		easingOverlay: overlayProps.easing,
		keyframesOverlay: overlayProps.keyframes
	});
}
