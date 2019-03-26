import {assign} from './../modules/assign';

test("Deep object assign",()=>{
	let a = {a:{b:1},c:2,d:[3,4,5]};
	let b = {a:{b:5},d:[3,2,2],f:7};
	let c = {a:{b:5},c:2,d:[3,2,2],f:7};
	expect(assign(a,b)).toEqual(c);
});
