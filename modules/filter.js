import {curry} from './curry';

export let filter = curry(function (fn, a) {
	return a.filter(fn);
});