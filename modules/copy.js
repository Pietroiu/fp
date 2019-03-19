import {isArray} from './isArray';
import {isObject} from "./isObject";
import {isPrimitive} from "./isPrimitive";

export let copy = function(o){
	if (isPrimitive(o)) return o;
	if (isObject(o)) return Object.keys(o).reduce(function(acc,k){
		return {...acc,[k]:copy(o[k])};
	},{});
	if (isArray(o)) return o.map(function(v){
		return copy(v);
	});
};