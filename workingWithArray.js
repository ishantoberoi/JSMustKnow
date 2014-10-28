Array.prototype.filter = function(predicateFunction){
	var result = [];
	this.forEach(function(item){
		if(predicateFunction(item)) {
			result.push(item);
		}
	})
	return result;
}

Array.prototype.map = function(predicateFunction){
	var result = [];
	this.forEach(function(item){
		result.push(predicateFunction(item));
	})
	return result;
}

var a = [1,2,3,4,5,6,7,8,9];
a.map(function(x){
	return x*2;
}).filter(function(x){
	if(x > 4) return true;
})



// run it in console to see the results 







