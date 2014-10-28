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
			console.log(accumulatedValue);
			counter++;
		}
		return [accumulatedValue];
	}

}


Array.prototype.map = function(testFunction){
	var result = [];
	this.forEach(function(item){
		result.push(testFunction(item));
	})
	return result;
}


(function(){
	var videos = [
		{
			"id": 65432445,
			"title": "The Chamber"
		},
		{
			"id": 675465,
			"title": "Fracture"
		},
		{
			"id": 70111470,
			"title": "Die Hard"
		},
		{
			"id": 654356453,
			"title": "Bad Boys"
		}
	];

	return videos.
		reduce(function(acc,curr){
			var acc_copy = Object.create(acc);
			acc_copy[curr.id] = curr.title;
			return acc_copy;
		},{})
}());