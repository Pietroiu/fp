import {assign} from './../modules/assign';

test("deep object assign",()=>{
	let a = {a:{b:1},c:2,d:[3,4,5]};
	let b = {a:{b:5},d:[3,2,2],f:7};
	let c = {a:{b:5},c:2,d:[3,2,2],f:7};
	expect(assign(a,b)).toEqual(c);
});

test("should return b",()=>{
	let a = [3,4,5];
	let b = [0,0];
	expect(assign(a,b)).toEqual(b);
});
