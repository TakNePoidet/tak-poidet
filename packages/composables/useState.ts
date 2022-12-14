import { Ref, ref, UnwrapRef } from 'vue';

export function useState<T>(initValue: T): [Ref<UnwrapRef<T>>, (value: T) => void] {
	const state = ref<T>(initValue);

	function setValue(newValue: T) {
		state.value = newValue as UnwrapRef<typeof state>;
	}
	return [state, setValue];
}
