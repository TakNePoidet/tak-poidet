<template>
	<tp-slider :min="1" :max="12" :step="1" breakpoints :marks="marks" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { TpSlider } from 'tak-poidet';

const marks = reactive({
	1: 'Январь',
	4: 'Апрель',
	7: 'Июль',
	10: 'Октябрь',
	12: 'Декабрь'
});
</script>
