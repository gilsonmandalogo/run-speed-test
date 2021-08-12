onmessage = async (e) => {
	const { code } = e.data;
	const startTime = performance.now();
	let result = '';

	try {
		// eslint-disable-next-line no-new-func
		const codeResult = Function(`"use strict";${code}`)();

		if (codeResult instanceof Promise) {
			result = await codeResult;
		} else {
			result = codeResult;
		}
	} catch (e) {
		result = e;
	}

	const endTime = performance.now();

	postMessage({ startTime, endTime, result });
}
