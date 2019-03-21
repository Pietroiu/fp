export let curry = function(f) {
	let a = f.length;
	return (function resolver() {
		let m = Array.prototype.slice.call(arguments);
		return function () {
			let l = [...m,...arguments];
			let n = l.length >= a ? f : resolver;
			return n.apply(null, l);
		};
	}());
}