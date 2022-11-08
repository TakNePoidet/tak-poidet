<template>
	<div :class="ns.base()">
		<div>
			<button v-for="panel in panels">{{ panel.title }}</button>
		</div>
		<div>
			<slot />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { provide, ref } from 'vue';
import { createNamespace } from '@tak-poidet/utility';
import { Panel } from './types';
import { keyTabs, nameComponentTabs, useTabsProps } from './tabs';

defineProps({
	...useTabsProps()
});

const ns = createNamespace(nameComponentTabs);

const panels = ref<Panel[]>([]);

function register(panel: Panel) {
	panels.value.push(panel);
}

function unregister(id: string) {}

provide(keyTabs, {
	register,
	unregister
});
</script>

<style scoped></style>
