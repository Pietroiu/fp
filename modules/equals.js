import {isPrimitive} from "./isPrimitive";

export let equals = function(a,b){
	if (isPrimitive(a) && isPrimitive(b)){
		return a === b;
	}else{
		return JSON.stringify(a) === JSON.stringify(b);
	}
};