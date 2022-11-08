<template>
	<div class="demo">
		<component :is="formatPathDemos[path]" />
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
	path: string;
	demos: object;
	source: string;
}>();
const formatPathDemos = computed(() => {
	const demos = {};

	Object.keys(props.demos).forEach((key) => {
		demos[key.replace('../examples/', '').replace('.vue', '')] = props.demos[key].default;
	});

	return demos;
});
const decoded = computed(() => {
	return decodeURIComponent(props.source);
});
</script>

<style lang="scss">
.demo {
	display: grid;
	gap: var(--spasing-lg);

	.example-line {
		display: flex;
		gap: 6px 12px;
		flex-wrap: wrap;
		&:empty {
			display: none;
		}
	}
}
</style>
