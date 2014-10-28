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


(function() {
	var boxarts = [
			{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
			{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
			{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
			{ width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
		];

	return boxarts.
		reduce(function(acc,curr){
			if(acc.width * acc.height > curr.width * curr.height)
			{
				return acc;
			}else{
				return curr;
			}
		}).map(function(item){
			return item.url;
		})
}())
