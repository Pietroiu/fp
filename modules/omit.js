import {curry} from "./curry";

export let omit = curry(function(l,o){
	return Object.keys(o).reduce(function(acc,k){
		if (l.includes(k)) return acc;
		return {
			...acc,
			[k]:o[k]
		}
	},{});
});