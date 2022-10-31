import { useState } from './useState';

export function useFocused() {
	const [focused, setFocused] = useState(false);

	function onFocus() {
		setFocused(true);
	}

	function onBlur() {
		setFocused(false);
	}

	return { focused, onFocus, onBlur };
}
