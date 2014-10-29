Array.zip = function(left,right,combinerFunction){
	var result = [],counter;
	for(counter = 0; counter<Math.min(left.length,right.length);counter++){
		result.push(combinerFunction(left[counter],right[counter]));
	}
	return result;
}

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

var movieLists = [
			{
				name: "New Releases",
				videos: [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxarts": [
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"interestingMoments": [
							{ type: "End", time:213432 },
							{ type: "Start", time: 64534 },
							{ type: "Middle", time: 323133}
						]
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxarts": [
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
							{ width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"interestingMoments": [
							{ type: "End", time:54654754 },
							{ type: "Start", time: 43524243 },
							{ type: "Middle", time: 6575665}
						]
					}
				]
			},
			{
				name: "Instant Queue",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxarts": [
							{ width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"interestingMoments": [
							{ type: "End", time:132423 },
							{ type: "Start", time: 54637425 },
							{ type: "Middle", time: 3452343}
						]
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxarts": [
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
							{ width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
							{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"interestingMoments": [
							{ type: "End", time:45632456 },
							{ type: "Start", time: 234534 },
							{ type: "Middle", time: 3453434}
						]
					}
				]
			}
		];

		return movieLists.
			map(function(movieList){
				return movieList.videos.
					map(function(video){
						return Array.zip(video.boxarts.
							reduce(function(acc,curr){
								if(acc.width*acc.height < curr.width*curr.height){
									return acc;
								}else{
									return curr;
								}
							}),video.interestingMoments.
									filter(function(moment){
										return moment.type === 'Middle';
									}),
									function(boxart,moment){
										return {id:video.id,title:video.title,time:moment.time,url:boxart.url};
									})
					})

			})
}());