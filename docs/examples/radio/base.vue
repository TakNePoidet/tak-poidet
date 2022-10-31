<template>
	<div>
		<tp-radio
			v-for="item in items"
			:key="item.value"
			v-model="gender"
			:disabled="item.disabled"
			:value="item.value"
			name="gender"
		>
			{{ item.label }}
		</tp-radio>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { TpRadio } from 'tak-poidet';

const items = ref([
	{ value: 'men', label: 'Мужской', disabled: false },
	{ value: 'women', label: 'Женский', disabled: false },
	{ value: 'any', label: 'Другой', disabled: true }
]);
const gender = ref('any');
</script>
