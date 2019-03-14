import {reduce} from "./reduce";

export let compose = function() {
	let a = ([].slice.call(arguments)).reverse();
	return reduce(function(prev,next){
		return function(v){
			return next(prev(v));
		};
	}, function(v){return v;})(a);
}