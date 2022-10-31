import { EmptyObject } from './types';

export function pick<T extends EmptyObject, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
	return keys.reduce((result, key) => Object.assign(result, { [key]: obj[key] }), {} as Pick<T, K>);
}
