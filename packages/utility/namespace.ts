import { PREFIX } from '@tak-poidet/constants';

export function createNamespace(name: string) {
	function base() {
		return `${PREFIX}-${name}`;
	}

	function component(name: string) {
		return `${base()}__${name}`;
	}

	function modifier(name: string) {
		return `${base()}--${name}`;
	}

	function is(name: string, value: boolean) {
		if (value) {
			return `${base()}--is-${name}`;
		}
		return '';
	}

	return {
		base,
		component,
		modifier,
		is
	};
}
