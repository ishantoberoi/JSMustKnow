Array.prototype.map = function(testFunction){
	var result = [];
	this.forEach(function(item){
		result.push(testFunction(item));
	})
	return result;
}

Array.prototype.filter = function(testFunction){
	var result = [];
	this.forEach(function(item){
		if(testFunction(item)){
			result.push(item);
		}
	})
	return result;
}

Array.prototype.mergeAll = function(){
	var result = [];
	this.forEach(function(subArray){
		subArray.forEach(function(item){
			result.push(item);
		})
	})
	return result;
}

Array.prototype.flatMap = function(testFunction){
	return this.
		map(function(item){
			return testFunction(item);
		}).mergeAll();
}

Array.prototype.reduce = function(testFunction,initialValue){
	var counter,accumulatedValue,result = [];
	if(this.length === 0){
		return this;
	}else{
		if(this.arguments.length === 1){
			counter = 1;
			accumulatedValue = this[0];
		}else if(this.arguments.length >= 2){
			counter = 0;
			accumulatedValue = initialValue;
		}

		while(counter < this.length){
			result.push(testFunction(accumulatedValue,this[counter]));
			counter++;
		}
		return [accumulatedValue];
	}
}

Array.zip = function(left,right,combinerFun){
	var counter,result = [];
	for(counter = 0; counter<Math.min(left.length,right.length), counter++){
		result.push(combinerFun(left[counter],right[counter]));
	}
	return result;
}
