import {curry} from "./curry";

export let group = curry(function(f, a){
	return Object.values(a.reduce(function(acc,v){
		return {...acc,[f(v)]:[...(acc[f(v)]||[]),v]};
	},{}));
});