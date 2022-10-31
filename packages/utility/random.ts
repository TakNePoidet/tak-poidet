export class Random {
	static int(min: number, max: number): number {
		const localMin = Math.ceil(min);
		const localMax = Math.floor(max);

		return Math.floor(Math.random() * (localMax - localMin + 1)) + localMin;
	}

	static array<T>(array: T[]) {
		return array[Random.int(0, array.length - 1)];
	}

	static shuffle<T extends any[]>(array: T): T {
		return array.sort(() => (Math.random() > 0.5 ? 1 : -1));
	}
}
