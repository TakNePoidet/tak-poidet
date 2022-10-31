import { PropType } from 'vue';
import { buildProps, omit, TpButtonType as TpMessageConfirmType } from 'tak-poidet';
import { useMessageProps } from '../message';

export { TpButtonType as TpMessageConfirmType } from 'tak-poidet';

export function useMessageConfirmProps() {
	return buildProps({
		...omit(useMessageProps(), ['modelValue']),
		type: {
			type: String as PropType<TpMessageConfirmType>,
			required: false,
			default: TpMessageConfirmType.Secondary
		},
		successText: {
			type: String as PropType<string>,
			required: false,
			default: 'Закрыть'
		},
		cancelText: {
			type: String as PropType<string>,
			required: false,
			default: 'Отмена'
		}
	});
}
