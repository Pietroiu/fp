import {curry} from "./curry";

export let push = curry(function(a, v) {
	return a.concat([v]);
});