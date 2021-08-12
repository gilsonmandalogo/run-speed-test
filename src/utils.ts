export function debounce<T extends (...args: any[]) => any>(func: T, timeout = 300){
	let timer: NodeJS.Timeout;
	return function (this: any, ...args: Parameters<T>) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timeout);
	};
}
