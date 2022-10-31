<template>
	<label ref="root" :for="id" :class="classes">
		<span :class="ns.component('indicator')">
			<checked :stroke-width="3" />
		</span>
		<span :class="ns.component('label')">
			<slot />
		</span>
		<input
			:id="id"
			v-model="model"
			:class="ns.component('control')"
			type="checkbox"
			:name="name"
			:disabled="disabled"
		/>
	</label>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useMousePressed } from '@vueuse/core';
import { createNamespace } from '@tak-poidet/utility';
import { Checked } from '@tak-poidet/icons-vue';
import { useClasses, useState } from '@tak-poidet/composables';
import { nameComponentCheckbox, useCheckboxProps } from './checkbox';

const props = defineProps({
	...useCheckboxProps()
});

const [model, setModel] = useState<boolean>(props.modelValue);

const root = ref();
const { pressed } = useMousePressed({
	target: root
});

const isChecked = computed(() => model.value);

const ns = createNamespace(nameComponentCheckbox);
const classes = useClasses(() => [
	ns.base(),
	ns.is('active', pressed.value && !props.disabled),
	ns.is('checked', isChecked.value),
	ns.is('disabled', props.disabled)
]);

const emit = defineEmits<{
	(e: 'update:modelValue', value: boolean): void;
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
	--tp--checkbox--padding: var(--spasing-md);
	--tp--checkbox--padding-right: var(--spasing-lg);
	--tp--checkbox--border-radius: var(--radius-md);
	--tp--checkbox--indicatior--size: 20px;
	--tp--checkbox--indicatior--background: var(--fill--blank);
	--tp--checkbox--indicatior--border: var(--border--base);
	--tp--checkbox--indicatior--radius: var(--radius-xs);
	--tp--checkbox--gap: var(--spasing-sm);
	--tp--checkbox--label--color: var(--text--primary);
	--tp--checkbox--label--font-size: var(--font-size-body);
	--tp--checkbox--label--line-height: var(--line-height-body);
	--tp--checkbox--label--font-weight: var(--font-weight-body--regular);
	--tp--checkbox--chek--size: 16px;
	--tp--checkbox--chek--color: var(--color-brand--invert);
	--tp--checkbox--is-hover--background: var(--fill--lighter);
	--tp--checkbox--indicatior-background--focus: var(--fill--blank);
	--tp--checkbox--is-focus--border: var(--color-brand--base);
	--tp--checkbox--is-active--background: var(--fill--darker);
	--tp--checkbox--is-checked--indicator--boder: var(--color-brand--base);
	--tp--checkbox--is-checked--indicator--background: var(--color-brand--base);
	--tp--checkbox--is-disabled--indicatior--background: var(--full--extra-light);
	--tp--checkbox--indicatior-border--disabled: var(--full--extra-light);
	--tp--checkbox--is-disabled--label--color: var(--text--disabled);
	--tp--checkbox--is-disabled--chek--color: var(--text--disabled);
}

.tp-checkbox {
	$self: &;

	position: relative;
	display: grid;
	grid-template-columns: var(--tp--checkbox--indicatior--size) auto;
	gap: var(--tp--checkbox--gap);
	align-items: center;
	margin: 0 calc(var(--tp--checkbox--padding) * -1);
	padding: var(--tp--checkbox--padding);
	padding-right: var(--tp--checkbox--padding-right);
	background: var(--tp--checkbox--background);
	border-radius: var(--tp--checkbox--border-radius);
	transition: background-color 200ms ease-in-out;

	//border: 1px solid transparent;
	&__label {
		color: var(--tp--checkbox--label--color);
		font-weight: var(--tp--checkbox--label--font-weight);
		font-size: var(--tp--checkbox--label--font-size);
		line-height: var(--tp--checkbox--label--line-height);
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
		border-radius: var(--tp--checkbox--border-radius);
		cursor: pointer;
		transition: background-color 200ms ease-in-out;
		pointer-events: none;

		&:focus-visible {
			border: 1px solid var(--tp--checkbox--is-focus--border);
		}
	}

	&__indicator {
		position: relative;
		display: flex;
		align-content: center;
		justify-content: center;
		width: var(--tp--checkbox--indicatior--size);
		height: var(--tp--checkbox--indicatior--size);
		background-color: var(--tp--checkbox--indicatior--background);
		border: 1px solid var(--tp--checkbox--indicatior--border);
		border-radius: var(--tp--checkbox--indicatior--radius);
		cursor: pointer;
		transition: background-color 200ms ease-in-out, border 200ms ease-in-out;
		aspect-ratio: 1/1;

		svg {
			width: var(--tp--checkbox--chek--size);
			height: var(--tp--checkbox--chek--size);
			color: var(--tp--checkbox--chek--color);
			transform: scale(2);
			opacity: 0;
			transition: transform 200ms ease-in-out, opacity 200ms ease-in-out;
		}
	}

	&#{$self}--is-checked {
		#{$self}__indicator {
			background-color: var(--tp--checkbox--is-checked--indicator--background);
			border-color: var(--tp--checkbox--is-checked--indicator--boder);

			svg {
				transform: scale(1);
				opacity: 1;
			}
		}
	}

	&:not(#{$self}--is-disabled) {
		@media (hover: hover) {
			cursor: pointer;

			&:hover {
				background-color: var(--tp--checkbox--is-hover--background);
			}
		}

		&#{$self}--is-active {
			background-color: var(--tp--checkbox--is-active--background);
		}
	}

	&#{$self}--is-disabled {
		cursor: not-allowed;

		#{$self}__label {
			color: var(--tp--checkbox--is-disabled--label--color);
		}

		#{$self}__indicator {
			background-color: var(--tp--checkbox--is-disabled--indicatior--background);
			border-color: var(--tp--checkbox--indicatior-border--disabled);

			&::before {
				background-color: var(--tp--checkbox--is-disabled--point--color);
			}

			svg {
				color: var(--tp--checkbox--is-disabled--chek--color);
			}
		}
	}
}
</style>
-
