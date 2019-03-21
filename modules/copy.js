import {isArray} from './isArray';
import {isObject} from "./isObject";
import {isPrimitive} from "./isPrimitive";

export let copy = function(o){
	if (isPrimitive(o)) return o;
	if (isObject(o)) return Object.keys(o).reduce((acc,k)=>({...acc,[k]:copy(o[k])}),{});
	if (isArray(o)) return o.map((v)=>copy(v));
};