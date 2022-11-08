<template>
	<tp-message v-model="isShow" :title="title" :text="text" @leave="leave">
		<template #actions>
			<tp-button :type="type" @click="success">{{ successText }}</tp-button>
			<tp-button text type="secondary" @click="cancel">{{ cancelText }}</tp-button>
		</template>
	</tp-message>
</template>

<script setup lang="ts">
import { TpButton } from 'tak-poidet';
import { useMessage, TpMessage } from '../message';
import { ExposeMessage, MessageType } from '../../types';
import { useMessageConfirmProps } from './confirm';

defineProps({
	...useMessageConfirmProps()
});

const { isShow, resolve, show, hide, result } = useMessage(MessageType.Confirm);

function leave() {
	resolve();
}

function success() {
	result.value = true;
	hide();
}

function cancel() {
	result.value = false;
	hide();
}

defineExpose<ExposeMessage<MessageType.Confirm>>({
	show,
	hide
});
</script>
