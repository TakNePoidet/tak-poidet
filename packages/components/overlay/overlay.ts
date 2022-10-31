import { PropType } from 'vue';
import { buildProps } from '@tak-poidet/utility';

export function useOverlayProps() {
	return buildProps({
		show: {
			type: Boolean as PropType<boolean>,
			required: true,
			default: true
		},
		to: {
			type: String as PropType<string>,
			default: undefined
		},
		zIndex: {
			type: Number as PropType<number>,
			default: 0
		},
		duration: {
			type: Number as PropType<number>,
			default: 400
		},
		easing: {
			type: String as PropType<string>,
			default: 'cubic-bezier(0.42, 0, 0.19, 1'
		},
		keyframes: {
			type: Object as PropType<PropertyIndexedKeyframes>,
			default() {
				return {
					opacity: [0, 1],
					backdropFilter: ['blur(0px)', 'blur(10px)'],
					webkitBackdropFilter: ['blur(0px)', 'blur(10px)']
				};
			}
		}
	});
}
