import { Ref } from 'vue';

export function useFocus($el: Ref<HTMLElement | null>) {
	function blur() {
		if ($el.value !== null) {
			$el.value.blur();
		}
	}
	function focus(options: Partial<FocusOptions> = {}) {
		if ($el.value !== null) {
			$el.value.focus({
				preventScroll: true,
				...options
			});
		}
	}
	return { focus, blur };
}
