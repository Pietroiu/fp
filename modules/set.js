import {curry} from "./curry";

export let set = curry(function (p, o, v) {
	let r = p.split('.');
	let k = r[0];
	if (r.length === 1){
		return {...o,[k]:v};
	}else{
		let n = r.slice(1, r.length).join('.');
		return {...o,[k]:set(n,o[k],v)}
	}
});