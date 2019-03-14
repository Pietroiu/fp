import {curry} from "./curry";

export let split = curry(function(s,v) {
	return v.split(s);
});