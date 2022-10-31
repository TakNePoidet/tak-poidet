<template>
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28">
		<path
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="m7 17.5 7-7 7 7"
		/>
	</svg>
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue';

export default defineComponent({
	name: 'AngleTop',
	props: {
		strokeWidth: {
			type: Number as PropType<number>,
			default: 1.5
		}
	}
});
</script>
