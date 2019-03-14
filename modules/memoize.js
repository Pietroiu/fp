export let memoize = function (f) {
	let c = {};
	let s = Array.prototype.slice;
	return function () {
		let a = s.call(arguments);
		if (a in c) {
			return c[a];
		} else {
			return (c[a] = f.apply(this,a));
		}
	};
};