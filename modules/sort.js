import {curry} from './curry';

export let sort = curry(function(f,a){
	return a.sort((x, y)=>(f(x) > f(y) ? 1 : -1));
});