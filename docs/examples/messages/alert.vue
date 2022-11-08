<template>
	<tp-button @click="alert">Alert</tp-button>
	<tp-container-messages />
</template>

<script setup lang="ts">
import { TpButton } from 'tak-poidet';
import { Message, TpContainerMessages } from '@tak-poidet/messages';

async function alert() {
	await Message.Alert({
		title: 'Установить приложение на рабочий стол?',
		text: 'Установка на рабочий стол позволяет быстро запускать приложение'
	});
}
</script>
