module.exports = function check(str, bracketsConfig) {
    
	let strArr = Array.from(str);

	for (var el = 0; el < strArr.length; el++) {
		for (var i = 0; i < bracketsConfig.length; i++) {
			if (strArr[el] === bracketsConfig[i][0] && strArr[el + 1] === bracketsConfig[i][1]) {
				strArr.splice(el, 2);
				el -= 2;
			}
		}
	}

	return strArr.length === 0;
    
}
