import { getCurrentInstance, PropType, ref } from 'vue';
import { buildProp } from '@tak-poidet/utility';
import { useProp } from '../use-prop';

const name = 'max' as const;

export function useDefinePropsMax(defaultValue: number = Number.MAX_SAFE_INTEGER, required = false) {
	return {
		[name]: buildProp({
			type: Number as PropType<number>,
			required,
			default: defaultValue
		})
	};
}

export function usePropsMax() {
	return useProp<number>(name);
}
