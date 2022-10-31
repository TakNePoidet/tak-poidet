import { computed } from 'vue';
import { PREFIX } from '@tak-poidet/constants';

export function useClasses(cb: () => string[]) {
	return computed(() => [PREFIX].concat(cb()));
}
