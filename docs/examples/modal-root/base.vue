<template>
	<tp-button type="success" outline round block @click="setIsShow(true)">Открыть</tp-button>
	<tp-modal-root v-model="isShow" :esc="false">
		<div :style="{ position: 'relative' }">
			<tp-button type="danger" @click="setIsShow(false)"> Закрыть</tp-button>
		</div>
	</tp-modal-root>
</template>

<script setup lang="ts">
import { TpButton, TpModalRoot, useState } from 'tak-poidet';

const [isShow, setIsShow] = useState(false);
</script>


