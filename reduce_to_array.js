// Reduce always returns an array with one item


Array.prototype.reduce = function(testFunction,initialValue){
	var accumulatedValue,counter;
	if(this.length == 0){
		return this;
	}else{
		if(arguments.length == 1){
			counter = 1;
			accumulatedValue = this[0];
		}else if(arguments.length >= 2){
			counter = 0;
			accumulatedValue = initialValue;
		}else{
			throw 'Invalid arguments.'
		}

		while(counter < this.length){
			accumulatedValue = testFunction(accumulatedValue,this[counter]);
			counter++;
		}
		return [accumulatedValue];
	}

}


// find largest value in array 

(function(){
	var ratings = [2,3,1,4,5];
	return ratings.
		reduce(function(acc,curr){
			if(acc < curr){
				return curr;
			}else{
				return acc;
			}
		},0)

}());