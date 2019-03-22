import {curry} from "./curry";
import {isArray} from "./isArray";

export let set = curry(function (p, o, v) {
	let r = p.split('.');
	let k = r[0];
	let n = r.slice(1, r.length).join('.');
	let s = r.length === 1 ? v : set(n,o[k],v);
	let j = {...o,[k]:s};
	return isArray(o) ? Object.values(j) : j;
});