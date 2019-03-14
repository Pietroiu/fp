import {curry} from "./curry";

export let slice = curry(function(s,e,a){
	return a.slice(s,e);
});