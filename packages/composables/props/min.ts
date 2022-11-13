import { getCurrentInstance, PropType, ref } from 'vue';
import { buildProp } from '@tak-poidet/utility';
import { useProp } from '../use-prop';
const name = 'min' as const;
export function useDefinePropsMin(defaultValue: number = -Number.MAX_SAFE_INTEGER, required = false) {
	return {
		[name]: buildProp({
			type: Number as PropType<number>,
			required,
			default: defaultValue
		})
	};
}

export function usePropsMin() {
	return useProp<number>(name);
}
