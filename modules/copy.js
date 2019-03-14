import {isArray} from './isArray';

export let copy = function(o){
	let r = isArray(o) ? [] : {};
	for (let k in o) {
		r[k]= o[k] instanceof Object ? copy(o[k]) : o[k];
	}
	return r;
};