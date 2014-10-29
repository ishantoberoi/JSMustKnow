(function(){
	var foo = function(arg){

		if(!(this instanceof foo)){
			console.log(' not instanceof foo');
			return new foo(arg);
		}

		console.log(' it is instanceof foo');
		this.myArg = arg;
	}

	foo.fn = foo.prototype = {
		init : function(){
			console.log('init called');
		}

	}

	window.foo = foo;

}());


foo.fn.plugin = function(){
	console.log(this.myArg);
	return this; // return this for chainability
}

var a = foo('testargument').plugin();

var f = new foo('argumenttwo');
f.plugin();