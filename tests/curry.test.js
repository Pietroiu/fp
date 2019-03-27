import {curry} from './../modules/curry';

test("Should accept one parameter at a time",()=>{
	let add = function(a,b){return a+b;};
	expect(curry(add)(1)(2)).toBe(3);
});