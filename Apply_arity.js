
Array.prototype.concat = function(){
	var result = [];
	this.forEach(function(subArray){
		result.push.apply(result, subArray);
	});
	return result;
}

var a = [[2,3,4,5],[11,2,333],[33,232,21]];
a.concat();


var a = [1,22,34,4,66];
Math.max.apply(null,a); // works beacuse it gives it as a[0],a[1] etc
but Math.max.call(null,a) // NaN. Because call cannot split it as a[0],a[1], hence a is intrepreted as whoe array and Not a Number


