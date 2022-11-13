<template>
	<div :class="classes">
		<div v-if="breakpoints && breakpoints.length > 0" :class="[ns.component('breakpoints')]">
			<span
				v-for="breakpoint in breakpoints"
				:style="{
					left: breakpoint + '%'
				}"
			/>
		</div>
		<div :class="[ns.component('truck')]">
			<input
				ref="$range"
				v-model.number="current"
				:class="[ns.component('control')]"
				type="range"
				:min="minInput"
				:max="maxInput"
				:step="step"
				:disabled="disabled"
				:aria-valuemin="minInput"
				:aria-valuemax="maxInput"
			/>
		</div>
		<div :class="[ns.component('marks')]">
			<button
				v-for="mark in marks"
				:key="mark.value"
				:style="{
					left: mark.position + '%'
				}"
				@click="() => (current = mark.value)"
			>
				{{ mark.title }}
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, defineProps, onMounted, onUpdated } from 'vue';
import { createNamespace } from '@tak-poidet/utility';
import {
	useClasses,
	useModel,
	usePropsDisabled,
	usePropsMax,
	usePropsMin,
	usePropsStep,
	useRef
} from '@tak-poidet/composables';
import { nameComponentSlider, useSliderProps } from './slider';

const props = defineProps({
	...useSliderProps()
});
const isValuesRange = computed(() => props.values && props.values.length > 0);

const min = usePropsMin();
const max = usePropsMax();
const step = usePropsStep();

const minInput = computed(() => {
	if (isValuesRange.value) {
		return props.values[0] ?? 0;
	}
	return min.value;
});
const maxInput = computed(() => {
	if (isValuesRange.value) {
		return props.values[props.values.length - 1] ?? 0;
	}
	return max.value;
});

const disabled = usePropsDisabled();

const [current] = useModel<number>();

const ns = createNamespace(nameComponentSlider);

const $range = useRef<HTMLInputElement>();

function calculateRangePercentage() {
	const target = $range.value as HTMLInputElement;
	const min = parseInt(target.min, 10);
	const max = parseInt(target.max, 10);
	const currentValue = parseInt(target.value, 10);
	const percent = ((currentValue - min) * 100) / (max - min);

	target.style.setProperty('--value', `${percent}%`);
}

onMounted(() => {
	calculateRangePercentage();
});
onUpdated(() => {
	calculateRangePercentage();
});

const breakpoints = computed(() => {
	if (props.breakpoints) {
		const items = [];

		for (let i = min.value; i <= max.value; i += step.value) {
			items.push(i);
		}
		return items.map((item, index, { length }) => (100 * index) / (length - 1)).slice(1, -1);
	}
	return [];
});

const marks = computed(() => {
	if (Object.values(props.marks).length < 1) {
		return [];
	}
	const items: number[] = [];

	return Object.entries(props.marks).map(([value, title]) => ({
		title,
		value,
		position: (100 * (parseFloat(value) - props.min)) / (props.max - props.min)
	}));
});
const classes = useClasses(() => [
	ns.base(),

	ns.is('marks', marks.value.length > 0),

	ns.is('disabled', disabled.value)
]);
</script>

<style lang="scss">
@use '@tak-poidet/styles/util/reset';

:root {
	--tp--slider--height: 7px;
	--tp--slider--background: var(--fill--light);
	--tp--slider--track--background: var(--color-brand--base);
	--tp--slider--track--height: 7px;
	--tp--slider--thumb--size: 21px;
	--tp--slider--thumb--background: var(--fill--blank);
	--tp--slider--thumb--border-color: var(--color-brand--base);
	--tp--slider--thumb--border-width: 3px;
	--tp--slider--radius: var(--radius-max);

	--tp--slider--breakpoint--size: var(--tp--slider--height);
	--tp--slider--breakpoint--background: var(--color-secondary--light-1);
	--tp--slider--breakpoint--radius: var(--radius-max);
	--tp--slider--mark--font-size: var(--font-size-body--extra-small);
	--tp--slider--mark--line-height: var(--line-height-body--extra-small);
	--tp--slider--mark--font-weight: var(--font-weight-body--extra-small);
	--tp--slider--mark--color: var(--text--regular);
}

.tp-slider {
	position: relative;
	$self: &;

	&__truck {
		background: var(--tp--slider--background);
		border-radius: var(--tp--slider--radius);
	}

	&__control {
		@include reset.input;
		position: relative;
		z-index: 1;
		width: 100%;
		height: var(--tp--slider--height);
		background: transparent;
		color: var(--tp--slider--track--background);
		border-radius: var(--tp--slider--radius);

		&::-webkit-slider-runnable-track {
			width: 100%;
			border-radius: var(--tp--slider--radius);
			height: var(--tp--slider--track--height);
			transition: background-color 200ms ease-in-out;
			background: linear-gradient(to right, currentColor var(--value, 20%), transparent var(--value, 20%));
			cursor: pointer;
		}

		&::-webkit-slider-thumb {
			display: block;
			appearance: none;
			background: var(--tp--slider--thumb--background);
			width: var(--tp--slider--thumb--size);
			height: var(--tp--slider--thumb--size);
			border: var(--tp--slider--thumb--border-width) solid currentColor;
			border-radius: var(--tp--slider--radius);
			z-index: 1;
			cursor: pointer;
			top: 50%;
			left: var(--value);
			position: absolute;
			transform: translate(-50%, -50%);
			transition: transform 200ms ease-in-out;
			@media (hover: hover) {
				&:hover {
					transform: translate(-50%, -50%) scale(1.3);
				}
			}
		}

		&:focus-visible {
			outline: none;
			box-shadow: 0 0 0 2px var(--fill--blank), 0 0 0 4px var(--color-brand--dark-1);
		}
	}

	&__marks {
		> button {
			@include reset.button;
			top: calc(var(--tp--slider--thumb--size) / 2 + var(--tp--slider--height));
			display: block;
			position: absolute;
			transform: translateX(-50%) rotate(0deg);
			font-size: var(--tp--slider--mark--font-size);
			line-height: var(--tp--slider--mark--line-height);
			font-weight: var(--tp--slider--mark--font-weight);
			color: var(--tp--slider--mark--color);
		}
	}

	&__breakpoints {
		pointer-events: none;

		> span {
			display: block;
			background: red;
			width: var(--tp--slider--breakpoint--size);
			height: var(--tp--slider--breakpoint--size);
			position: absolute;
			top: 0;
			left: 0;
			background: var(--tp--slider--breakpoint--background);
			border-radius: var(--tp--slider--breakpoint--radius);
		}
	}

	&#{$self}--is-marks {
		margin-bottom: calc(
			var(--tp--slider--thumb--size) / 2 + var(--tp--slider--height) + (var(--tp--slider--mark--font-size))
		);
	}
}
</style>
