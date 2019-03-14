import {curry} from "./curry";

export let reduce = curry(function (f, x, a) {
	return a.reduce(f, x);
});

