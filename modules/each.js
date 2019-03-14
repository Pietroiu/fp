import {curry} from './curry';

export let each = curry(function (f, o) {
	for (let k in o) {
		let j = f(o[k], k);
		if (j){
			return;
		}
	}
});