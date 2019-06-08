import {curry} from './curry';

export let map = curry(function(f,a){
	return a.map(f);
});