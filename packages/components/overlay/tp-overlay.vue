<template>
	<transition
		@before-appear="beforeAppear"
		@appear="appear"
		@after-appear="afterAppear"
		@appear-cancelled="appearCancelled"
		@before-enter="beforeEnter"
		@enter="enter"
		@after-enter="afterEnter"
		@enter-cancelled="enterCancelled"
		@before-leave="beforeLeave"
		@leave="leave"
		@after-leave="afterLeave"
		@leave-cancelled="leaveCancelled"
	>
		<div v-if="show" ref="el" :class="[ns.base()]" :style="{ zIndex }" />
	</transition>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { createNamespace } from '@tak-poidet/utility';
import { useBodyScrollLock } from '@tak-poidet/composables';
import { useOverlayProps } from './overlay';

const ns = createNamespace('overlay');

const el = ref<HTMLElement>();
const props = defineProps({ ...useOverlayProps() });
const { lock, active } = useBodyScrollLock();

const emit = defineEmits<{
	(e: 'before-appear', value: HTMLElement): void;
	(e: 'appear', value: HTMLElement): void;
	(e: 'after-appear', value: HTMLElement): void;
	(e: 'appear-cancelled', value: HTMLElement): void;
	(e: 'before-enter', value: HTMLElement): void;
	(e: 'enter', value: HTMLElement): void;
	(e: 'after-enter', value: HTMLElement): void;
	(e: 'enter-cancelled', value: HTMLElement): void;
	(e: 'before-leave', value: HTMLElement): void;
	(e: 'leave', value: HTMLElement): void;
	(e: 'after-leave', value: HTMLElement): void;
	(e: 'leave-cancelled', value: HTMLElement): void;
	(e: 'hide', value: undefined): void;
}>();

function beforeAppear(el: HTMLElement) {
	lock();
	emit('before-appear', el);
}

function appear(el: HTMLElement, done: () => void) {
	const animation = el.animate(props.keyframes, {
		duration: props.duration,
		easing: props.easing,
		iterations: 1,
		fill: 'forwards'
	});

	animation.onfinish = () => {
		done();
	};
	emit('appear', el);
}

const zIndex = computed(() => props.zIndex);

function afterAppear(el: HTMLElement) {
	emit('after-appear', el);
}

function appearCancelled(el: HTMLElement) {
	emit('appear-cancelled', el);
}

function beforeEnter(el: HTMLElement) {
	lock();
	emit('before-enter', el);
}

function enter(el: HTMLElement, done: () => void) {
	const animation = el.animate(props.keyframes, {
		duration: props.duration,
		easing: props.easing,
		iterations: 1,
		fill: 'forwards'
	});

	animation.onfinish = () => {
		done();
	};
	emit('enter', el);
}

function afterEnter(el: HTMLElement) {
	emit('after-enter', el);
}

function enterCancelled(el: HTMLElement) {
	emit('enter-cancelled', el);
}

function beforeLeave(el: HTMLElement) {
	emit('before-leave', el);
}

function leave(el: HTMLElement, done: () => void) {
	const animation = el.animate(props.keyframes, {
		duration: props.duration,
		easing: props.easing,
		direction: 'reverse'
	});

	animation.onfinish = () => {
		done();
	};
	emit('leave', el);
}

function afterLeave(el: HTMLElement) {
	active();
	emit('after-leave', el);
	emit('hide', undefined);
}

function leaveCancelled(el: HTMLElement) {
	emit('leave-cancelled', el);
}

onMounted(() => {
	if (props.show && el.value) {
		lock();
		el.value.animate(props.keyframes, {
			duration: 0,
			iterations: 1,
			fill: 'forwards'
		});
	}
});
</script>

<style lang="scss">
.tp-overlay {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgb(25 60 103 / 65%);
	cursor: unset;
}

html.overflow-hidden {
	height: 100vh;
	overflow: hidden;

	body {
		position: fixed;
		top: var(--overlay-scroll-position);
		right: 0;
		bottom: 0;
		left: 0;
		overflow: hidden;
	}
}
</style>
