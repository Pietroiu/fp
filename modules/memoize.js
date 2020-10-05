export let memoize = function(fn) {
	let memo = {};
	let slice = Array.prototype.slice;
	return function() {
		let args = slice.call(arguments);
		if (args in memo)
			return memo[args];
		else
			return (memo[args] = fn.apply(this, args));

	}
}