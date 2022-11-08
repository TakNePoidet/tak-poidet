<template>
	<div :class="ns.base()">
		<slot />
	</div>
</template>

<script lang="ts" setup>
import {computed, getCurrentInstance, inject, onMounted} from 'vue';
import { createNamespace } from '@tak-poidet/utility';
import { keyTabs } from '../tabs';
import { nameComponentTabItem, useTabItemProps } from './tab-item';

const props = defineProps({
	...useTabItemProps()
});

const ns = createNamespace(nameComponentTabItem);

const root = inject(keyTabs);

if (!root) {
	throw new Error();
}
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const instance = getCurrentInstance()!;

onMounted(() => {
	root.register({
		title: computed(() => props.title),
		id: instance.uid
	});
});
</script>

<style scoped></style>
