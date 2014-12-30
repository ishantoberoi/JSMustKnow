var avgScore = "global score";

var gameController = {
	score : [1,2,3,4,5,6,7,8,9],
	avgScore : null
}


function avg(scores){
	var len = scores.length,
			i,sum=0;

	for(i=0;i<len;i++){
		sum += scores[i];
	}
	this.avgScore = sum/len;  // 'this' very important
}

Now, run :- avg(gameController.score);

check :- window.avgScore; and gameController.avgScore; Only window.avgScore changes.



Now use;

avg.call(gameController,gameController.score); OR avg.apply(gameController,[gameController.score])
Now this belongs to gameController, so gameController.avgScore changes.
