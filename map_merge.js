Array.prototype.map = function(testFunction){
	var result = [];
	this.forEach(function(item){
		result.push(testFunction(item));
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


Array.prototype.filter = function(testFunction){
	var result = [];
	this.forEach(function(item){
		if(testFunction(item)){
			result.push(item);
		}
	})
	return result;
}

(function(){
	var obj = [
		{
			videos:[
								{
									id:"v001"
								},
								{
									id:"v002"
								}
							]

		},
		{
			videos:[
								{
									id:"v003"
								},
								{
									id:"v004"
								}
							]

		}
	];

	return obj.
		map(function(videosObj){
			return videosObj.videos.
				map(function(video){
					return video.id;
				})
		})
		.mergeAll();
		
}());

