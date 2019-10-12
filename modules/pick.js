import {curry} from "./curry";
import {set} from "./set";
import {get} from "./get";

export let pick = curry(function(p,o){
	return p.reduce(function(acc,s){
		return set(s,acc,get(s,o));
	},{});
});