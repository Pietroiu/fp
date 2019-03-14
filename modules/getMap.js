import {curry} from "./curry";

export let getMap = curry(function(f,a){
	return a.reduce(function(a,v){
		return {...a,[f(v)]:v};
	},{});
});