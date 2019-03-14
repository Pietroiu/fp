export let not = function (f) {
	return function () {
		return !f.apply(null, arguments);
	};
};