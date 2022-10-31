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
	gap: 20px;
	background: var(--white);
	padding: 24px;
	border: 1px solid var(--tp-color-light-gray--200);
	border-radius: 12px;
	margin-left: -24px;
	margin-right: -24px;
	background: #ffffff;

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
