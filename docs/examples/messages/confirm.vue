<template>
	<tp-button type="success" @click="confirm">Confirm</tp-button>
</template>

<script setup lang="ts">
import { TpButton } from 'tak-poidet';
import { Message, TpMessageConfirmType } from '@tak-poidet/messages';

async function confirm() {
	await Message.Confirm({
		title: 'Установить приложение на рабочий стол?',
		text: 'Установка на рабочий стол позволяет быстро запускать приложение',
		successText: 'Установить',
		type: TpMessageConfirmType.Primary
	});
}
</script>


