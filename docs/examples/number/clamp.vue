<template>
	<tp-number
		:model-value="Random.int(10, 1000)"
		label="Стоимость шоколада"
		name="cost"
		:step="10"
		:min="10"
		:max="1000"
	/>
</template>

<script setup lang="ts">
import { TpNumber, Random } from 'tak-poidet';
</script>
