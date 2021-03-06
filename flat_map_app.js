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

Array.prototype.flatmap = function(testFunction){
	return this.map(function(item){
		return testFunction(item);
	})
	.mergeAll();
}

(function(){
var movieLists = [
			{
				name: "Instant Queue",
				videos : [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxarts": [
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxarts": [
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id:432534, time:65876586 }]
					}
				]
			},
			{
				name: "New Releases",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxarts": [
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxarts": [
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
							{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id:432534, time:65876586 }]
					}
				]
			}
		];
	
		return movieLists.
			flatmap(function(movieList){
				return movieList.videos.
					flatmap(function(video){
						return video.boxarts.
							filter(function(boxart){
								return boxart.width === 150;
							})
							.map(function(boxart){
								return {id:video.id,title:video.title,url:boxart.url};
							})
					})
			})
}());
