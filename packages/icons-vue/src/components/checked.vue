<template>
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28">
		<path
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			:stroke-width="strokeWidth"
			d="m6 14.833 5.833 5.834L23.5 9"
		/>
	</svg>
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue';

export default defineComponent({
	name: 'Checked',
	props: {
		strokeWidth: {
			type: Number as PropType<number>,
			default: 1.5
		}
	}
});
</script>
