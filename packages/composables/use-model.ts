import { getCurrentInstance, ref, UnwrapRef, watch } from 'vue';

export function useModel<T>(autoUpdate = true) {
	const vm = getCurrentInstance();
	const modelValue = ref<T>(vm?.props.modelValue as T);

	watch(
		() => vm?.props.modelValue,
		(value) => {
			modelValue.value = value as unknown as UnwrapRef<T>;
		}
	);

	function updateModel() {
		vm?.emit('update:modelValue', modelValue.value);
	}

	watch(modelValue, () => {
		if (autoUpdate) {
			updateModel();
		}
	});
	return [modelValue, updateModel] as const;
}
