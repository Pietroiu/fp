import {curry} from "./curry";

export let includes = curry(function(v,a){
	return a.includes(v);
});