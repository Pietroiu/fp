import {curry} from './curry';

export let sort = curry(function(f,a){
	return a.sort(function (x, y) {
		return f(x) > f(y) ? 1 : -1;
	});
});