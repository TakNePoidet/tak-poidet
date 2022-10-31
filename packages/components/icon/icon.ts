import type { PropType, Component } from 'vue';
import { buildProps } from '@tak-poidet/utility';
import { Checked } from '@tak-poidet/icons-vue';

type Icon = typeof Checked;

export function useIconProps() {
	return buildProps({
		strokeWidth: {
			type: Number as PropType<number>,
			default: 1.5
		},
		icon: {
			type: Object as PropType<Icon>,
			required: true
		}
	});
}
