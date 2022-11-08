<template>
	<!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
	<label :for="id" :class="classes">
		<span v-if="label" :class="ns.component('label')">{{ label }}</span>
		<slot :class="ns.component('control')" />
	</label>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { nsField, useFieldProps } from './field';

defineProps({
	...useFieldProps()
});

const classes = computed(() => []);

const ns = nsField;
</script>

<style lang="scss">
:root {
	--tp--field--background-color: var(--fill--blank);
	--tp--field--border-color: var(--border--base);
	--tp--field--border-radius: var(--radius-sm);
	--tp--field--padding-x: calc(var(--spasing-md) - 1px);
	--tp--field--padding-y: calc(var(--spasing-sm) - 1px);
	--tp--field--padding: var(--tp--field--padding-y) var(--tp--field--padding-x);
	--tp-field--label--font-weight: var(--font-weight-body--small);
	--tp-field--label--font-size: var(--font-size-body--small);
	--tp-field--label--line-height: var(--line-height-body--small);
	--tp-field--label--color: var(--text--regular);
	--tp-field--control--font-family: var(--font-family-body);
	--tp-field--control--font-weight: var(--font-weight-body--regular);
	--tp-field--control--font-size: var(--font-size-body);
	--tp-field--control--line-height: var(--line-height-body);
	--tp-field--control--color: var(--text--primary);
	--tp-field--control--placeholder--color: var(--text--placeholder);
	--tp--field--is-focus--border-color: var(--color-brand--light-1);
	--tp--field--is-focus--label--color: var(--color-brand--base);
	--tp--field--hover--border-color: var(--border--dark);
	--tp--field--is-disabled--background-color: var(--fill--lighter);
	--tp--field--is-disabled--color: var(--text--disabled);
}

.tp-field {
	$self: &;

	display: grid;
	padding: var(--tp--field--padding-y) var(--tp--field--padding-x);
	background-color: var(--tp--field--background-color);
	border: 1px solid var(--tp--field--border-color);
	border-radius: var(--tp--field--border-radius);
	transition: background-color 200ms ease-in-out, border 200ms ease-in-out;

	&__label {
		color: var(--tp-field--label--color);
		font-weight: var(--tp-field--label--font-weight);
		font-size: var(--tp-field--label--font-size);
		line-height: var(--tp-field--label--line-height);
		transition: color 200ms ease-in-out;
	}

	@media (hover: hover) {
		&:hover {
			border-color: var(--tp--field--hover--border-color);
		}
	}

	&#{$self}--is-focus {
		border-color: var(--tp--field--is-focus--border-color);

		#{$self}__label {
			color: var(--tp--field--is-focus--label--color);
		}
	}

	&#{$self}--is-disabled {
		background-color: var(--tp--field--is-disabled--background-color);
		border-color: var(--tp--field--is-disabled--background-color);
		cursor: not-allowed;

		> * {
			pointer-events: none;
		}

		#{$self}__label {
			color: var(--tp--field--is-disabled--color);
		}
	}
}
</style>
