import { ref } from 'vue';

export function useRef<T extends HTMLElement = HTMLElement>() {
	return ref<T | null>(null);
}
