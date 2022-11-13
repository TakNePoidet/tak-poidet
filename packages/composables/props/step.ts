import { getCurrentInstance, PropType, ref } from 'vue';
import { buildProp } from '@tak-poidet/utility';
import { useProp } from '../use-prop';

const name = 'step' as const;

export function useDefinePropsStep(defaultValue = 1) {
	return {
		[name]: buildProp({
			type: Number as PropType<number>,
			required: false,
			default: defaultValue
		})
	};
}

export function usePropsStep() {
	return useProp<number>(name);
}
