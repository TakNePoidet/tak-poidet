<template>
	<dialog ref="dialog" :class="classes" @cancel.stop.prevent="cancel" @close.stop.prevent="close">
		<div :class="ns.component('wrapper')">
			<tp-overlay
				:show="show"
				:duration="durationOverlay"
				:easing="easingOverlay"
				:keyframes="keyframesOverlay"
				@hide="isOpen = false"
				@click="cancel"
			/>
			<transition @enter="enter" @leave="leave">
				<div v-show="show">
					<slot />
				</div>
			</transition>
		</div>
	</dialog>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { createNamespace } from '@tak-poidet/utility';
import { useClasses } from '@tak-poidet/composables';
import { TpOverlay } from '../overlay';
import { useModelRootProps } from './modal-root';

const emit = defineEmits<{
	(e: 'update:modelValue', value: boolean): void;
	(e: 'leave'): void;
}>();
const props = defineProps({
	...useModelRootProps()
});

const dialog = ref<HTMLDialogElement>();
const show = ref(props.modelValue);
const isOpen = computed({
	get() {
		return props.modelValue;
	},
	set(value) {
		if (value) {
			dialog.value?.showModal();
		} else {
			dialog.value?.close();
			emit('update:modelValue', false);
		}
	}
});

const ns = createNamespace('modal-root');
const classes = useClasses(() => [ns.base()]);

function open() {
	isOpen.value = true;
	show.value = true;
}

function cancel() {
	if (props.esc) {
		close();
	}
}

function close() {
	show.value = false;
}

function animate(el: HTMLElement, done: () => void, direction: PlaybackDirection = 'normal') {
	if (props.duration && props.duration > 0) {
		const animation = el.animate(props.keyframes, {
			duration: props.duration,
			easing: props.easing,
			direction
		});

		animation.onfinish = () => {
			done();
		};
	} else {
		done();
	}
}

function enter(el: HTMLElement, done: () => void) {
	animate(el, done);
}

function leave(el: HTMLElement, done: () => void) {
	animate(
		el,
		() => {
			emit('leave');
			done();
		},
		'reverse'
	);
}

onMounted(() => {
	isOpen.value = props.modelValue;
});

watch(
	() => props.modelValue,
	(value) => {
		if (value) {
			open();
		} else {
			close();
		}
	}
);
</script>

<style lang="scss">
.tp-modal-root {
	top: 0;
	right: 0;
	left: 0;
	width: 100%;
	max-width: 100%;
	height: 100%;
	max-height: 100%;
	margin: 0;
	padding: 0;
	overflow: hidden;
	background: transparent;
	border: none;
	border: 0;
	contain: layout paint;

	&__wrapper {
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		overflow-x: hidden;
	}
}
</style>
