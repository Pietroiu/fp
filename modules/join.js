import {curry} from "./curry";

export let join = curry(function (s, a) {
	return a.join(s);
});