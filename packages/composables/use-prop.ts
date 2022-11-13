import { getCurrentInstance, ref, watch } from 'vue';
import { EmptyObject } from '@tak-poidet/utility';
import { useState } from './useState';

export function useProp<T>(name: string) {
	const vm = getCurrentInstance();
	const props = vm?.props as EmptyObject;

	const [valueProp, setValueProp] = useState<T>(props[name]);

	watch(
		() => props[name],
		(value) => {
			setValueProp(value);
		}
	);
	return valueProp;
}
