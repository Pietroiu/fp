export let memoize = function (fn) {
	let cache = {};
	return (...args) => {
		let stringifiedArgs = JSON.stringify(args);
		let result = cache[stringifiedArgs] = cache[stringifiedArgs] || fn(...args);
		return result;
	};
};