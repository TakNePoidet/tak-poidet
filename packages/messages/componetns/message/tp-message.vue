<template>
	<tp-modal-root
		v-model="isShow"
		:esc="false"
		:duration="MessageDurationAnimate"
		:keyframes="{ opacity: [0, 1], transform: ['scale(1.4)', 'scale(1)'] }"
		@leave="leave"
	>
		<div :class="[ns.base()]">
			<div :class="[ns.component('content')]">
				<h3 v-if="title" :class="ns.component('title')">{{ title }}</h3>
				<p :class="[ns.component('text')]">{{ text }}</p>
			</div>
			<div :class="[ns.component('footer')]">
				<slot name="actions">
					<tp-button type="secondary" text>Закрыть</tp-button>
				</slot>
			</div>
		</div>
	</tp-modal-root>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import { createNamespace, TpModalRoot, TpButton, useModel } from 'tak-poidet';
import { MessageDurationAnimate, MessageKey, useMessageProps } from './message';

defineProps({ ...useMessageProps() });
const ns = createNamespace('message');
const [isShow] = useModel<boolean>();

const emit = defineEmits<{
	(e: 'update:modelValue', value: boolean): void;
	(e: 'leave'): void;
}>();

function leave() {
	emit('leave');
}

function setIsShow(value: boolean) {
	isShow.value = value;
}

provide(MessageKey, {
	isShow,
	setIsShow
});
</script>

<style lang="scss">
:root {
	--tp--message--padding: var(--spasing-lg);
	--tp--message--radius: var(--radius-md);
	--tp--message--background: var(--background--base);
	--tp--message--footer--gap: var(--spasing-sm);
	--tp--message--gap: var(--spasing-lg);
	--tp--message--content--gap: var(--spasing-sm);
	--tp--message--content-title--font-weight: var(--font-weight-title);
	--tp--message--content-title--font-size: var(--font-size-title);
	--tp--message--content-title--line-height: var(--line-height-title);
	--tp--message--content-title--color: var(--text--primary);
	--tp--message--content-text--font-weight: var(--font-weight-body--small);
	--tp--message--content-text--font-size: var(--font-size-body--small);
	--tp--message--content-text--line-height: var(--line-height-body--small);
	--tp--message--content-text--color: var(--text--regular);
}

.tp-message {
	position: relative;
	display: grid;
	gap: var(--tp--message--gap);
	width: 500px;
	padding: var(--tp--message--padding);
	background-color: var(--tp--message--background);
	border-radius: var(--tp--message--radius);

	&__title {
		color: var(--tp--message--content-title--color);
		font-weight: var(--tp--message--content-title--font-weight);
		font-size: var(--tp--message--content-title--font-size);
		line-height: var(--tp--message--content-title--line-height);
	}

	&__text {
		color: var(--tp--message--content-text--color);
		font-weight: var(--tp--message--content-text--font-weight);
		font-size: var(--tp--message--content-text--font-size);
		line-height: var(--tp--message--content-text--line-height);
	}

	&__content {
		display: grid;
		gap: var(--tp--message--content--gap);
	}

	&__footer {
		display: flex;
		gap: var(--tp--message--footer--gap);
		justify-content: flex-end;
	}
}
</style>
