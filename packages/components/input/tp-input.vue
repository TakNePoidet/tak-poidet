<template>
	<tp-field :id="id" :disabled="disabled" :label="label" :class="classes">
		<input
			:id="id"
			ref="input"
			v-model="model"
			:name="name"
			:type="type"
			:class="ns.component('control')"
			:placeholder="placeholder"
			:aria-label="label"
			:autocomplete="autocomplete"
			:disabled="disabled"
			@focus="onFocus"
			@blur="onBlur"
		/>
	</tp-field>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, onBeforeUnmount, onMounted } from 'vue';
import IMask from 'imask';
import { createNamespace } from '@tak-poidet/utility';
import { useRef, useClasses, useFocused } from '@tak-poidet/composables';
import { nsField, TpField } from '../field';
import { useInputProps } from './input';

const { focused, onFocus, onBlur } = useFocused();
const input = useRef<HTMLInputElement>();

const props = defineProps({
	...useInputProps()
});

let mask: IMask.InputMask<any>;

const nameComponentInput = 'input';
const ns = createNamespace(nameComponentInput);
const model = ref<string>(props.modelValue);
const classes = useClasses(() => [
	nsField.base(),

	nsField.modifier(nameComponentInput),
	nsField.is('focus', focused.value),
	nsField.is('disabled', props.disabled),
	ns.base()
]);

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void;
}>();

watch(
	() => props.modelValue,
	(value) => {
		model.value = value;
	}
);

onMounted(() => {
	if (typeof window !== 'undefined' && input.value && props.mask) {
		mask = IMask(input.value, props.mask);
		mask.on('complete', () => {
			emit('update:modelValue', mask.value);
		});
	}
});

onBeforeUnmount(() => {
	if (mask) {
		mask.destroy();
	}
});
watch(model, () => {
	if (!mask) {
		emit('update:modelValue', model.value);
	}
});
</script>

<style lang="scss">
@use '@tak-poidet/styles/util/reset/input';

$self: '.tp-input';

.tp-input {
	cursor: text;

	#{$self}__control {
		@include input.reset;

		display: block;
		width: 100%;
		color: var(--tp-field--control--color);
		font-weight: var(--tp-field--control--font-weight);
		font-size: var(--tp-field--control--font-size);
		line-height: var(--tp-field--control--line-height);
		transition: color 200ms ease-in-out;
		font-family: var(--tp-field--control--font-family);

		&::placeholder {
			color: var(--tp-field--control--placeholder--color);
		}
	}
}

.tp-field--input.tp-field--is-disabled {
	#{$self}__control {
		color: var(--tp--field--is-disabled--color);
	}
}
</style>
