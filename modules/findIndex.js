import {curry} from "./curry";

export let findIndex = curry(function(f,a){
	return a.findIndex(f);
});