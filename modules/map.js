import {isArray} from './isArray';
import {curry} from './curry';

export let map = curry(function(f,a){
	return isArray(a) ? a.map(f) : [];
});