import { PropType } from 'vue';
import { buildProp } from '@tak-poidet/utility';
import { useProp } from '../use-prop';

const name = 'disabled' as const;

export function useDefinePropsDisabled(defaultValue = false) {
	return {
		[name]: buildProp({
			type: Boolean as PropType<boolean>,
			required: false,
			default: defaultValue
		})
	};
}

export function usePropsDisabled() {
	return useProp<boolean>(name);
}
