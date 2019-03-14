import {curry} from "./curry";
import {getMap} from "./getMap";

export let uniq = curry(function(f,a){
	return Object.values(getMap(f,a));
});