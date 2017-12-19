window.onload = function () {
	Array.prototype.ownmap  = function (callback, context) {
		var map = new Array();
		var i,len;
		if(typeof callback != "function"){
				throw new TypeEror(callback + "is not a function");
		}
		for(i = 0, len = this.length; i < len; i++){
			var each = callback.call(context, this[i], i, this);
			map[map.length] = each;
		}
		return map;
	}
	Array.prototype.ownreduce = function (callback, initialValue) {
		var i, len, num = this[0];
		if(typeof callback != "function"){
				throw new TypeEror(callback + "is not a function");
		}
		for(i = 1, len = this.length; i < len; i++){
			num = callback(num, this[i], i, this);
		}
		return num + initialValue;
	}
	Array.prototype.ownforEach = function (callback) {
		var i, len;
		if(typeof callback != "function"){
			throw new TypeEror(callback + "is not a function");
		}
		for(i = 0, len = this.length; i < len; i++){
			callback(this[i], i, this);
		}
	}
	Array.prototype.ownsome = function (callback, context) {
		var i, len;
		if(typeof callback != "function"){
				throw new TypeEror(callback + "is not a function");
		}
		for(i=0, len=this.length; i < len; i++){
			 if(callback.call(context, this[i], i, this)){
			 	return true;
			 }
		}
		return false;
	}
	Array.prototype.ownfilter = function (callback, context) {
		var filter = new Array();
		var i, len;
		if(typeof callback != "function"){
				throw new TypeEror(callback + "is not a function");
		}
		for(i = 0, len = this.length; i < len; i++){
			if(callback.call(context, this[i], i, this)){
				filter[filter.length] = this[i];
			}
		}
		return filter;
	}
	var test = [4, 6, 7, 9, 2, 5, 1];
	var map = test.ownmap (function (item, index, array) {
		return item + 3;
	}); 
	console.log("map:");
	console.log(map);

	var test2 = [3, 5, 1, 8]
	var reduce = test2.ownreduce (function (prev, cur, index, array) {
		return  prev * cur;
	}, 1);
	console.log("reduce:");
	console.log(reduce);


	var test3 = [4, 6, 1, 8,1]
	test3.ownforEach(function (item, index, array) {
		test3[index] = item + 4;
	});
	console.log("forEach:");
	console.log(test3);


	var test4 = [-1, -4, -9, 1]
	var some = test4.ownsome (function (item, index, array) {
		return (item > 2);
	});
	console.log("some:");
	console.log(some);


	var test5 = [-4, 5, 1, -7, 6, 9]
	var filter = test5.ownfilter (function (item, index, array) {
		return (item > 2);
	});
	console.log("filter:");
	console.log(filter);
}