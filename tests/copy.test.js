import {copy} from "../modules/copy";

test("Object equality should return true",()=> {
	let a = {a:{b:1},c:2,d:[3,4,5]};
	expect(copy(a)).toEqual(a);
});

test("Array equality should return true",()=> {
	let a = [1,{a:{b:1}},3,[1,2]];
	expect(copy(a)).toEqual(a);
});