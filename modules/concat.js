import {curry} from "./curry";

export let concat = curry(function(a,v){
	return a.concat(v);
});