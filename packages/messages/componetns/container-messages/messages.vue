<template>
	<teleport to="body">
		<item v-for="message in messages" :key="message.id" v-bind="message" />
	</teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useMessageRefs } from './refs';
import Item from './item.vue';

const { messageRefs } = useMessageRefs();

const messages = computed(() => Object.entries(messageRefs).map(([id, data]) => ({ id, ...data })));
</script>
