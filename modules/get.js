import {curry} from "./curry";

export let get = curry(function(p,o){
	return (p||'').split('.').reduce((a,v)=>(a ? a[v] : undefined),o);
});