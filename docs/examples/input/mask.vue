<template>
	<tp-input
		v-model="contact"
		:mask="{
			mask: [
				{
					mask: '{8} (000) 00-00-000'
				},
				{
					mask: '+{7} (000) 00-00-000'
				},
				{
					mask: /^\S*@?\S*$/
				}
			]
		}"
		name="contact"
		type="text"
		placeholder="Ваш телефон или email"
		label="Как с вами связаться?"
		autocomplete="email"
	/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { TpInput } from 'tak-poidet';

const contact = ref('');
</script>
