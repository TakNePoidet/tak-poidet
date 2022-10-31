<template>
	<tp-input v-model="state.firstName" name="firstName" placeholder="Ваше имя" label="Имя" autocomplete="name" />
	<tp-input v-model="state.lastName" name="lastName" placeholder="Ваша фамилия" label="Фамилия" autocomplete="name" />
	<tp-input
		v-model="state.patronymic"
		disabled
		name="patronymic"
		placeholder="Ваше отчество"
		label="Отчество"
		autocomplete="name"
	/>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { TpInput } from 'tak-poidet';

const state = reactive({
	firstName: '',
	lastName: '',
	patronymic: ''
});
</script>
