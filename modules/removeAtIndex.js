import {curry} from "./curry";

export let removeAtIndex = curry(function(i,a){
	return [...a.slice(0,i),...a.slice(i+1)];
});