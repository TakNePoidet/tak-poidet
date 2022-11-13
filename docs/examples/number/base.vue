<template>
	<tp-number  :model-value="state.number" label="Любимая цифра" name="number" placeholder="Введите число" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { TpNumber } from 'tak-poidet';

const state = reactive({
	number: undefined
});
</script>
