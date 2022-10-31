<template>
	<component :is="icon"/>
</template>

<script setup lang="ts">
import {useIconProps} from './icon';

defineProps({...useIconProps()});
</script>


