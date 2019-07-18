import {curry} from "./curry";

export let flatten = curry(function(i,a){
	return a.flat(i);
});