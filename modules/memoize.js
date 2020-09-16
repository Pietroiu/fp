export let memoize = function (fn) {
	let cache = {};
	return (...args) => {
		let hash = JSON.stringify(args);
		let result = cache[hash] || fn(...args);
		return result;
	};
};
