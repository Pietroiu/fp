import {curry} from './curry';

export let find = curry(function (fn, a) {
	if (a) {
		for (let i = 0; i < a.length; i++) {
			if (fn(a[i])) return a[i];
		}
	} else {
		return;
	}
});