<template>
	<details ref="details" :class="classes" :open="isOpen">
		<summary ref="refSummary" :class="ns.component('title')" @click.prevent.stop="onClick">
			<span>
				{{ title }}
			</span>
			<angle-bottom :class="ns.component('angle')" />
		</summary>
		<div ref="refContent" :class="ns.component('content')">
			<slot />
		</div>
	</details>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { createNamespace } from '@tak-poidet/utility';
import { AngleBottom } from '@tak-poidet/icons-vue';
import { useClasses, useState } from '@tak-poidet/composables';
import { useDetailsProps } from './config';

const props = defineProps({
	...useDetailsProps()
});

const ns = createNamespace('details');
const classes = useClasses(() => [ns.base(), ns.is('open', props.open)]);
const details = ref<HTMLDetailsElement | null>(null);
const refSummary = ref<HTMLElement | null>(null);
const refContent = ref<HTMLElement | null>(null);
const [isOpen, setIsOpen] = useState<boolean>(props.open);
const isClosing = ref(false);
const isExpanding = ref(false);

const animation = ref<null | Animation>();

function opened() {
	if (details.value === null || refSummary.value === null) {
		return;
	}
	details.value.style.height = `${details.value.offsetHeight}px`;
	setIsOpen(true);
	requestAnimationFrame(() => expand());
}

function shrink() {
	isClosing.value = true;
	if (details.value === null || refSummary.value === null) {
		return;
	}
	const startHeight = `${details.value.offsetHeight}px`;
	const endHeight = `${refSummary.value.offsetHeight}px`;

	if (typeof animation.value !== 'undefined') {
		animation.value?.cancel();
	}
	animation.value = details.value.animate(
		{
			height: [startHeight, endHeight]
		},
		{
			duration: 400,
			easing: 'ease-in-out'
		}
	);
	animation.value.onfinish = () => {
		onAnimationFinish(false);
	};
	animation.value.oncancel = () => {
		isClosing.value = false;
	};
}

function expand() {
	isExpanding.value = true;
	if (details.value === null || refSummary.value === null || refContent.value === null) {
		return;
	}
	const startHeight = `${details.value.offsetHeight}px`;
	const endHeight = `${refSummary.value.offsetHeight + refContent.value.offsetHeight}px`;

	if (typeof animation.value !== 'undefined') {
		animation.value?.cancel();
	}
	animation.value = details.value?.animate(
		{
			height: [startHeight, endHeight]
		},
		{
			duration: 400,
			easing: 'ease-in-out'
		}
	);
	animation.value.onfinish = () => {
		onAnimationFinish(true);
	};
	animation.value.oncancel = () => {
		isClosing.value = false;
	};
}

function onAnimationFinish(open: boolean) {
	setIsOpen(open);
	isExpanding.value = false;
	isClosing.value = false;
	if (details.value) {
		details.value.style.height = '';
		details.value.style.overflow = 'revert';
	}
}

function onClick() {
	if (details.value !== null) {
		details.value.style.overflow = 'hidden';
		if (isClosing.value || !details.value.open) {
			opened();
		} else if (isExpanding.value || details.value.open) {
			shrink();
		}
	}
}
</script>

<style lang="scss">
@use '@tak-poidet/styles/typographic';

details summary::-webkit-details-marker {
	display: none;
}

:root {
	--tp--details--background: var(--fill--blank);
	--tp--details--radius: var(--radius-md);
	--tp--details--padding-y: calc(var(--spasing-md) - 1px);
	--tp--details--padding-x: calc(var(--spasing-lg) - 1px);
	--tp--details--font--title: var(--typographic--body--bold);
	--tp--details--font--text: var(--typographic--body--regular);
	--tp--details--angle--color: var(--text--regular);
	--tp--details--border--color: var(--border--base);
	--tp--details--border--focus--color: var(--color-brand--base);
	--tp--details--color: var(--text--primary);
}

.tp-details {
	$self: &;

	margin: 0 calc(((var(--tp--details--padding-x)) + 1px) * -1);
	background-color: var(--tp--details--background);
	border: 1px solid transparent;
	border-radius: var(--tp--details--radius);
	transition: border 200ms ease-in-out;

	> summary {
		margin: 0;
		padding: 0;
		list-style: none;
		appearance: none;
	}

	& &__title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--tp--details--padding-y) var(--tp--details--padding-x);
		color: var(--tp--details--color);
		border-radius: var(--tp--details--radius);
		transition: box-shadow 200ms ease-in-out;

		@include typographic.body-bold;

		&:focus-visible {
			outline: 0;
			box-shadow: 0 0 0 1px var(--tp--details--border--focus--color) inset;
		}
	}

	&__content {
		padding: var(--tp--details--padding-y) var(--tp--details--padding-x);
		padding-top: 0;
		color: var(--tp--details--color);

		@include typographic.body-regular;
	}

	&__angle {
		width: 20px;
		height: 20px;
		color: var(--tp--details--angle--color);
		transition: transform 200ms ease-in-out;
	}

	@media (hover: hover) {
		&__title {
			cursor: pointer;
		}

		&:hover {
			border-color: var(--tp--details--border--color);
		}
	}

	&[open] {
		#{$self}__title {
			#{$self}__angle {
				transform: rotate(180deg);
			}
		}
	}
}
</style>
