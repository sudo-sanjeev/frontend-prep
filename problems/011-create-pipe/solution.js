/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */
export function pipe(funcs) {
	return function (...args) {
		if (funcs.length === 0) return args[0];
		let ans = args[0];
		funcs.forEach((func) => {
			ans = func(ans);
		});
		return ans;
	};
}
