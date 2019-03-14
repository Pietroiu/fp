import {curry} from './curry';

export let filter = curry(function (fn, a) {
	let res = [];
	if (!a) return [];
	for (let i = 0; i < a.length; i++) {
		if (a[i] && fn(a[i])) {
			res = [...res, a[i]];
		}
	}
	return res;
});