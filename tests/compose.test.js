import {compose} from './../modules/compose';

test("Should return 6",()=>{
	let addThree = function(a){return a+3;};
	let addTwo   = function(a){return a+2;};
	let addFive  = compose(addThree,addTwo);
	expect(addFive(1)).toBe(6);
});