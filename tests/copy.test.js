import {copy} from "../modules/copy";

test("dummy",()=> {
	let a = {a:{b:1},c:2,d:[3,4,5]};
	expect(copy(a)).toEqual(a);
});