import { PropType } from 'vue';
import { buildProps, omit } from 'tak-poidet';
import { useMessageProps } from '../message';

export function useMessageAlertProps() {
	return buildProps({
		...omit(useMessageProps(), ['modelValue']),
		cancelText: {
			type: String as PropType<string>,
			required: false,
			default: 'Закрыть'
		}
	});
}
