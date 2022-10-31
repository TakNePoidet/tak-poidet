import { PropType } from '@vue/runtime-core';
import { buildProps } from '@tak-poidet/utility';

export const enum TpButtonType {
	Secondary = 'secondary',
	Primary = 'primary',
	Info = 'info',
	Warning = 'warning',
	Success = 'success',
	Danger = 'danger'
}

export function useButtonProps() {
	return buildProps({
		type: {
			type: String as PropType<TpButtonType>,
			required: false,
			default() {
				return 'secondary';
			}
		},
		round: {
			type: Boolean as PropType<boolean>,
			required: false,
			default: false
		},
		text: {
			type: Boolean as PropType<boolean>,
			required: false,
			default: false
		},
		link: {
			type: Boolean as PropType<boolean>,
			required: false,
			default: false
		},
		outline: {
			type: Boolean as PropType<boolean>,
			required: false,
			default: false
		},
		circle: {
			type: Boolean as PropType<boolean>,
			required: false,
			default: false
		},
		disabled: {
			type: Boolean as PropType<boolean>,
			required: false,
			default: false
		},
		block: {
			type: Boolean as PropType<boolean>,
			required: false,
			default: false
		}
	} as const);
}

// export function useButtonProps() {
//     return buildProps({
//         type: {
//             type: String as PropType<'default' | 'primary' | 'success' | 'danger'>,
//             required: false,
//             default() {
//                 return 1
//             },
//         },
//         round: {
//             type: Boolean as PropType<boolean>,
//             required: false,
//             default: false
//         },
//         text: {
//             type: Boolean as PropType<boolean>,
//             required: false,
//             default: false
//         },
//         outline: {
//             type: Boolean as PropType<boolean>,
//             required: false,
//             default: false
//         },
//         circle: {
//             type: Boolean as PropType<boolean>,
//             required: false,
//             default: false
//         },
//         disabled: {
//             type: Boolean as PropType<boolean>,
//             required: false,
//             default: false
//         }
//     } as const)
// }
