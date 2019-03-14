import {curry} from './../modules/curry';

test("compose example",()=>{
	let add = function(a,b){return a+b;};
	expect(curry(add)(1)(2)).toBe(3);
});