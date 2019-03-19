import {curry} from './curry';
import {copy} from './copy';
import {isObject} from './isObject';

let bothObj = (a,b)=> isObject(a) && isObject(b);

export let assign = curry(function(t, s) {
	if (!bothObj(t,s)) return copy(s);
	return Object.keys(s).reduce(function(acc,k){
		return {...acc,[k]:assign(t[k],s[k])};
	},copy(t));
});