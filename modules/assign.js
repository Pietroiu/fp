import {curry} from './curry';
import {copy} from './copy';
import {isObject} from './isObject';
import {isArray} from "./isArray";

export let assign = curry(function(t, s) {
	if (!isObject(t) || !isObject(s)) throw new TypeError("Arguments need to be Objects");
	return Object.keys(s).reduce(function(acc,k){
		return {...acc,[k]:(isObject(s[k]) ? assign(t[k],s[k]) : (isArray(s[k]) ? s[k].slice() : s[k]))};
	},copy(t));
});