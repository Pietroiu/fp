import {curry} from "./curry";

export let swap = curry(function(i,j,a) {
	let x = a.slice(0,i);
	let y = a.slice(i+1,j);
	let z = a.slice(j+1,a.length);
	return [...x,a[j],...y,a[i],...z];
});