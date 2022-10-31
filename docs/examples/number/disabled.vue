<template>
	<tp-number :disabled="true" :model-value="Random.int(1, 200)" label="Кол-во мест" name="count" />
</template>

<script setup lang="ts">
import { TpNumber, Random } from 'tak-poidet';
</script>
