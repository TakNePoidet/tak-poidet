<template>
	<tp-button type="primary" block @click="setIsShow(true)">Открыть</tp-button>
	<tp-overlay :show="isShow" :z-index="100" @click="setIsShow(false)" />
</template>

<script setup lang="ts">
import { TpButton, TpOverlay, useState } from 'tak-poidet';

const [isShow, setIsShow] = useState(false);
</script>


