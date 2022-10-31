<template>
	<tp-message v-model="isShow" :title="title" :text="text" @leave="leave">
		<template #actions>
			<tp-button text type="secondary" @click="close">{{ cancelText }}</tp-button>
		</template>
	</tp-message>
</template>

<script setup lang="ts">
import { TpButton } from 'tak-poidet';
import { TpMessage, useMessage } from '../message';
import { ExposeMessage, MessageType } from '../../types';
import { useMessageAlertProps } from './alert';

defineProps({
	...useMessageAlertProps()
});

const { isShow, show, hide, result, resolve } = useMessage(MessageType.Alert);

function close() {
	result.value = undefined;
	hide();
}

function leave() {
	resolve();
}

defineExpose<ExposeMessage<MessageType.Alert>>({
	show,
	hide
});
</script>


