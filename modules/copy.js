import {isArray} from './isArray';
import {isObject} from "./isObject";

export let copy = function(o){
	if (isObject(o)) return Object.keys(o).reduce((acc,k)=>({...acc,[k]:copy(o[k])}),{});
	if (isArray(o)) return o.map((v)=>copy(v));
	return o;
};