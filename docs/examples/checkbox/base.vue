<template>
	<div>
		<tp-checkbox
			v-for="item in items"
			:key="item.key"
			v-model="state[item.key]"
			:disabled="item.disabled"
			:name="item.label"
		>
			{{ item.label }}
		</tp-checkbox>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { TpCheckbox } from 'tak-poidet';

const state = reactive({
	tableware: false,
	cash: true,
	secureTransmission: false
});
const items = ref([
	{ key: 'tableware', label: 'Необходимы столовые приборы', disabled: false },
	{ key: 'secureTransmission', label: 'Безопасная передача', disabled: false },
	{ key: 'cash', label: 'Оплата наличными', disabled: true }
]);
</script>
