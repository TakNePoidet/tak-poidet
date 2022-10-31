<template>
	<label ref="root" :for="id" :class="classes">
		<span :class="ns.component('indicator')"></span>
		<span :class="ns.component('label')">
			<slot />
		</span>
		<input
			:id="id"
			v-model="model"
			:class="ns.component('control')"
			type="radio"
			:name="name"
			:value="value"
			:checked="model === value"
			:disabled="disabled"
		/>
	</label>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useMousePressed } from '@vueuse/core';
import { createNamespace } from '@tak-poidet/utility';
import { useClasses, useState } from '@tak-poidet/composables';
import { nameComponentInput, useRadioProps } from './radio';

const props = defineProps({
	...useRadioProps()
});

const [model, setModel] = useState<string>(props.modelValue);

const root = ref();
const { pressed } = useMousePressed({
	target: root
});

const isChecked = computed(() => model.value === props.value);

const ns = createNamespace(nameComponentInput);
const classes = useClasses(() => [
	ns.base(),
	ns.is('checked', isChecked.value),
	ns.is('active', pressed.value && !props.disabled),
	ns.is('disabled', props.disabled)
]);

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void;
}>();

watch(
	() => props.modelValue,
	(value) => {
		setModel(value);
	}
);
watch(model, (value) => emit('update:modelValue', value));
</script>

<style lang="scss">
@use '@tak-poidet/styles/util/reset/input';

:root {
	--tp--radio--padding: var(--spasing-md);
	--tp--radio--padding-right: var(--spasing-lg);
	--tp--radio--border-radius: var(--radius-md);
	--tp--radio--indicatior--size: 20px;
	--tp--radio--indicatior--background: var(--fill--blank);
	--tp--radio--indicatior--border: var(--border--base);
	--tp--radio--gap: 8px;
	--tp--radio--label--color: var(--text--primary);
	--tp--radio--label--font-size: var(--font-size-body);
	--tp--radio--label--line-height: var(--line-height-body);
	--tp--radio--label--font-weight: var(--font-weight-body--regular);
	--tp--radio--point--size: 14px;
	--tp--radio--point--color: var(--color-brand--base);
	--tp--radio--is-hover--background: var(--fill--lighter);
	--tp--radio--indicatior-background--focus: var(--fill--blank);
	--tp--radio--is-focus--point--color: var(--poidet-color-brand--600);
	--tp--radio--is-active--background: var(--fill--darker);
	--tp--radio--is-disabled--indicatior--background: var(--full--extra-light);
	--tp--radio--indicatior-border--disabled: var(--border--darker);
	--tp--radio--is-disabled--label--color: var(--text--disabled);
	--tp--radio--is-disabled--point--color: var(--text--disabled);
}

.tp-radio {
	$self: &;

	position: relative;
	display: grid;
	grid-template-columns: var(--tp--radio--indicatior--size) auto;
	gap: var(--tp--radio--gap);
	align-items: center;
	margin: 0 calc(var(--tp--radio--padding) * -1);
	padding: var(--tp--radio--padding);
	padding-right: var(--tp--radio--padding-right);
	background: var(--tp--radio--background);
	border-radius: var(--tp--radio--border-radius);
	transition: background-color 200ms ease-in-out;

	//border: 1px solid transparent;
	&__label {
		color: var(--tp--radio--label--color);
		font-weight: var(--tp--radio--label--font-weight);
		font-size: var(--tp--radio--label--font-size);
		line-height: var(--tp--radio--label--line-height);
	}

	&__control {
		@include input.reset;

		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		margin: 0;
		border-radius: var(--tp--radio--border-radius);
		cursor: pointer;
		transition: background-color 200ms ease-in-out;
		pointer-events: none;

		&:focus-visible {
			border: 1px solid var(--tp--radio--is-focus--border);
		}
	}

	&__indicator {
		position: relative;
		width: var(--tp--radio--indicatior--size);
		height: var(--tp--radio--indicatior--size);
		background-color: var(--tp--radio--indicatior--background);
		border: 1px solid var(--tp--radio--indicatior--border);
		border-radius: 50%;
		cursor: pointer;
		transition: background-color 200ms ease-in-out, border 200ms ease-in-out;
		aspect-ratio: 1/1;

		&::before {
			position: absolute;
			top: 50%;
			left: 50%;
			display: block;
			width: var(--tp--radio--point--size);
			height: var(--tp--radio--point--size);
			background-color: var(--tp--radio--point--color);
			border-radius: 100%;
			transform: translate(-50%, -50%) scale(0);
			transition: transform 200ms ease-in-out, background-color 200ms ease-in-out;
			content: '';
			aspect-ratio: 1/1;
		}
	}

	&#{$self}--is-checked {
		#{$self}__indicator {
			border-color: var(--tp--radio--point--color);

			&::before {
				transform: translate(-50%, -50%) scale(1);
			}
		}
	}

	&:not(#{$self}--is-disabled) {
		@media (hover: hover) {
			cursor: pointer;

			&:hover {
				background-color: var(--tp--radio--is-hover--background);
			}
		}

		&#{$self}--is-active {
			background-color: var(--tp--radio--is-active--background);
		}
	}

	&#{$self}--is-disabled {
		cursor: not-allowed;
		#{$self}__label {
			color: var(--tp--radio--is-disabled--label--color);
		}

		#{$self}__indicator {
			background-color: var(--tp--radio--is-disabled--indicatior--background);
			border-color: var(--tp--radio--indicatior-border--disabled);

			&::before {
				background-color: var(--tp--radio--is-disabled--point--color);
			}
		}
	}
}
</style>
-
