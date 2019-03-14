import {curry} from "./curry";

export let get = curry(function(p,o){
	if (p){
		return p.split('.').reduce(function(a,v){
			return a ? a[v] : undefined;
		},o);
	}else{
		return o;
	}
});