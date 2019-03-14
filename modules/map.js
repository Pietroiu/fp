import {isArray} from './isArray';

export let map = function(f,a){
	return isArray(a) ? a.map(f) : [];
};