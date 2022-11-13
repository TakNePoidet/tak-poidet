import { Prop } from '@vue/runtime-core';

export function buildProp<T>(prop: Prop<T>): Prop<T> {
	return prop;
}
