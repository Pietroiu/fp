import {equals} from './../modules/equals';

test("Object equality",()=>{
	let a = {a:{b:1},c:2,d:[3,4,5]};
	let b = {a:{b:1},c:2,d:[3,4,5]};
	expect(equals(a,b)).toBeTruthy();
});

test("Number equality",()=>{
	expect(equals(1,1)).toBeTruthy();
});

test("Number inequality",()=>{
	expect(equals(1,2)).toBeFalsy();
});

test("Array equality",()=>{
	expect(equals([1,2,3],[1,2,3])).toBeTruthy();
});
