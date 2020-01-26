export async function asyncForEach(array, callback) {
	for (let index = 0; index < array.length; index++) {
		if (!await callback(array[index], index, array)) {
			break
		}
	}
}

export function getHandler() {
	return new Proxy( {}, {
		get() {
			return {}
		}
	});
}