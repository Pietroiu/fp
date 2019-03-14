import {curry} from "./curry";

export let removeAtIndex = curry(function(a,i){
	return [...a.slice(0,i),...a.slice(i+1)];
});