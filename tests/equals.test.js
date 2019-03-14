import {equals} from './../modules/equals';

test("deep object equality",()=>{
	let a = {a:{b:1},c:2,d:[3,4,5]};
	let b = {a:{b:1},c:2,d:[3,4,5]};
	expect(equals(a,b)).toBeTruthy();
});

test("number equality",()=>{
	expect(equals(1,1)).toBeTruthy();
});

test("number inequality",()=>{
	expect(equals(1,2)).toBeFalsy();
});

test("array equality",()=>{
	expect(equals([1,2,3],[1,2,3])).toBeTruthy();
});
