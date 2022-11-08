<template>
	<tp-number
		:model-value="Random.int(Math.pow(10, 4), Math.pow(10, 10))"
		label="Стоимость шоколада"
		name="cost"
		:step="10000"
		:min="Math.pow(10, 4)"
		:max="Math.pow(10, 10)"
		:formatting="formatting"
	/>
</template>

<script setup lang="ts">
import { TpNumber, Random } from 'tak-poidet';

function formatting(number: number) {
	return new Intl.NumberFormat().format(number)
}
</script>
