import {curry} from "./curry";

export let flatten = curry(function(a,i){
	return a.flat(i||1);
});