import {curry} from './curry';

export let find = curry(function (fn, a) {
	return a.find(fn);
});