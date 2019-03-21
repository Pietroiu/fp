export let compose = function() {
	return ([].slice.call(arguments)).reverse().reduce((p,n)=>(v)=>n(p(v)),(v)=>v);
};