<template>
	<component :is="props.component" v-bind="params" ref="message" />
</template>

<script setup lang="ts">
import { defineProps, onMounted, PropType, ref } from 'vue';
import type { Component } from 'vue';
import { MessageDurationAnimate } from '../message';
import { ExposeMessage } from '../../types';
import { useMessageRefs } from './refs';

const props = defineProps({
	id: {
		type: String as PropType<string>,
		required: true
	},
	component: {
		type: Object as PropType<Component>,
		required: true
	},
	params: {
		type: Object as PropType<Component>,
		required: true
	},
	returnValue: {
		type: Function as PropType<any>,
		required: true
	}
});

const message = ref<ExposeMessage<any>>();

const { messageRefs } = useMessageRefs();

onMounted(async () => {
	if (message.value) {
		const result = await message.value.show();

		props.returnValue(result);

		setTimeout(() => {
			delete messageRefs[props.id as string];
		}, MessageDurationAnimate);
	}
});
</script>


