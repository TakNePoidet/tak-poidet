import { ComponentObjectPropsOptions } from 'vue';

export function buildProps<P extends ComponentObjectPropsOptions = ComponentObjectPropsOptions>(props: P): P {
	return props;
}
