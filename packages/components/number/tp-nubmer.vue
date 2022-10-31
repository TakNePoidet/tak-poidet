<template>
	<tp-field :id="id" :label="label" :class="classes">
		<div :class="ns.component('wrapper')">
			<input
				:id="id"
				ref="input"
				:value="current"
				type="number"
				:name="name"
				:min="min"
				:max="max"
				:step="step"
				:class="ns.component('control')"
				:disabled="disabled"
				@input="onInput"
				@focus="onFocus"
				@blur="onBlur"
			/>
		</div>
		<div :class="ns.component('counter')">
			<button
				:disabled="current >= max"
				tabindex="-1"
				@focus="onFocus"
				@blur="onBlur"
				@mousedown="press('plus')"
				@click="onChange('plus')"
			>
				<angle-top />
			</button>
			<button
				:disabled="current <= min"
				tabindex="-1"
				@focus="onFocus"
				@blur="onBlur"
				@mousedown="press('minus')"
				@click="onChange('minus')"
			>
				<angle-bottom />
			</button>
		</div>
	</tp-field>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue';
import { clamp, createNamespace } from '@tak-poidet/utility';
import { AngleTop, AngleBottom } from '@tak-poidet/icons-vue';
import { useRef, useClasses, useFocused, useState, useFocus } from '@tak-poidet/composables';
import { nsField, TpField } from '../field';
import { nameComponentNumber, useNumberProps } from './number';

const { focused, onFocus, onBlur } = useFocused();
const input = useRef<HTMLInputElement>();
const props = defineProps({
	...useNumberProps()
});
const emit = defineEmits<{
	(e: 'update:modelValue', value: number): void;
}>();

const ns = createNamespace(nameComponentNumber);
const { focus } = useFocus(input);
const classes = useClasses(() => [
	nsField.base(),

	nsField.modifier(nameComponentNumber),
	nsField.is('focus', focused.value),
	nsField.is('disabled', props.disabled),
	ns.base()
]);

function format(value: number): number {
	return clamp(props.min, value, props.max);
}

const isEqual = (value1?: number, value2?: number) => String(value1) === String(value2);
const getInitialValue = () => {
	const defaultValue = props.modelValue ?? 0;
	const value = format(defaultValue);

	if (!isEqual(value, props.modelValue)) {
		emit('update:modelValue', Number(value) ?? 0);
	}
	return value;
};
const [current, setCurrent] = useState(getInitialValue());

function setValue(value: number) {
	setCurrent(value);
}

function onInput(event: InputEvent) {
	const input = event.target as HTMLInputElement;
	const value = Number(input.value);

	if (isEqual(value, format(value))) {
		setValue(value);
	}
}

function onChange(actionType: 'plus' | 'minus'): void {
	focus();
	const diff = actionType === 'minus' ? -props.step : +props.step;
	const value = format(current.value + diff);

	setValue(value);
}

// eslint-disable-next-line no-undef
const interval = ref<NodeJS.Timeout | null>(null);
// eslint-disable-next-line no-undef
const pressStartTimer = ref<NodeJS.Timeout | null>(null);

function press(type: 'plus' | 'minus') {
	pressStartTimer.value = setTimeout(() => {
		interval.value = setInterval(() => {
			onChange(type);
		}, 140);
		window.addEventListener(
			'mouseup',
			() => {
				if (interval.value) {
					clearInterval(interval.value);
				}
			},
			{ once: true }
		);
	}, 1000);

	window.addEventListener(
		'mouseup',
		() => {
			if (pressStartTimer.value) {
				clearTimeout(pressStartTimer.value);
			}
		},
		{ once: true }
	);
}

watch(
	() => props.modelValue,
	(value) => {
		setCurrent(value);
	}
);
watch(current, (value) => {
	nextTick().then(() => {
		emit('update:modelValue', value);
	});
});
onBeforeUnmount(() => {
	if (interval.value) {
		clearInterval(interval.value);
	}
	if (pressStartTimer.value) {
		clearTimeout(pressStartTimer.value);
	}
});
</script>

<style lang="scss">
@use '@tak-poidet/styles/util/reset';

:root {
	--tp--number--counter--width: 30px;
	--tp--number--counter--color: var(--text--secondary);
	--tp--number--counter--radius: var(--radius-xs);
	--tp--number--counter--gap: var(--spasing-xs);
	--tp--number--counter--icon--size: 20px;
	--tp--number--counter--is-hover--color: var(--color-brand--base);
	--tp--number--counter--is-active--background: var(--color-brand--extra-light);
	--tp--number--disabled--counter--opacity: var(--opacity-md);
}

$self: '.tp-number';

.tp-number {
	position: relative;
	padding-right: calc((var(--tp--field--padding-y) - 1px) + var(--spasing-sm) + var(--tp--number--counter--width));
	cursor: text;

	&__wrapper {
		position: relative;
	}

	&__control {
		@include reset.input;

		display: block;
		width: 100%;
		color: var(--tp-field--controll--color);
		font-weight: var(--tp-field--controll--font-weight);
		font-size: var(--tp-field--controll--font-size);
		line-height: var(--tp-controll--label--line-height);
		transition: color 200ms ease-in-out;

		&::placeholder {
			color: var(--tp-field--controll--placeholder--color);
		}
	}

	&__counter {
		position: absolute;
		top: var(--tp--field--padding-y);
		right: var(--tp--field--padding-y);
		bottom: var(--tp--field--padding-y);
		display: inline-flex;
		flex-direction: column;
		gap: var(--tp--number--counter--gap);

		> button {
			display: flex;
			flex: 1;
			align-items: center;
			justify-content: center;
			width: var(--tp--number--counter--width);
			color: var(--tp--number--counter--color);
			transition: background-color 200ms ease-in-out, color 200ms ease-in-out;

			@include reset.button;

			svg {
				width: var(--tp--number--counter--icon--size);
				height: var(--tp--number--counter--icon--size);
			}

			&:first-child {
				border-radius: var(--tp--number--counter--radius) var(--tp--number--counter--radius) 0 0;
			}

			&:last-child {
				border-radius: 0 0 var(--tp--number--counter--radius) var(--tp--number--counter--radius);
			}

			@media (hover: hover) {
				cursor: pointer;

				&:hover:not(&:disabled) {
					color: var(--tp--number--counter--is-hover--color);
				}
			}

			&:active:not(&:disabled) {
				background-color: var(--tp--number--counter--is-active--background);
			}

			&:disabled {
				cursor: not-allowed;
				opacity: var(--tp--number--disabled--counter--opacity);
			}
		}
	}

	&#{$self}--is-disabled {
		#{$self}__counter {
			opacity: var(--tp--number--disabled--counter--opacity);
		}
	}
}

.tp-field--number.tp-field--is-disabled {
	#{$self}__control {
		color: var(--tp--field--is-disabled--color);
	}
}
</style>
