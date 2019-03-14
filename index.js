import b from './build.json';

let libP 	= 'fp';
let getI 	= (k)=>import("./modules/"+k);
let mapI 	= (k)=>k.map(getI);
let acc 	= (a,m,i)=>({...a,[b[i]]:m[b[i]]});
let getL 	= (m)=>m.reduce(acc,{});
let getM 	= Promise.all(mapI(b));

getM.then(function(m){
	window[libP] = getL(m);
});
