<template>
	<tp-number :model-value="Random.int(0, 9)" label="Любимая цифра" name="number" />
</template>

<script setup lang="ts">
import { TpNumber, Random } from 'tak-poidet';
</script>


