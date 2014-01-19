(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.slide10_button_animation02 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.contactbutton();
	this.instance.setTransform(-328.3,-504.8,1,1,0,0,0,-328.4,-504.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,398,100);


// symbols:
(lib.ClipGroup = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1232A").s().p("A75H0QhUAAg8g8Qg7g8AAhUIAApOQAAhVA7g8QA8g8BUAAMA3yAAAQBVAAA7A8QA9A8AABVIAAJOQAABUg9A8Qg7A8hVAAg");
	this.shape.setTransform(1551.5,1323);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1352.5,1273,398,100);


(lib.contactbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABXBxQgdgRgRgeQgQgdAAglIAAAAQAAgjAQgdQARgdAdgSQAdgSAmAAQAXAAASAFQASAFAOAJQAOAJAMALIgcAhQgPgOgRgJQgRgIgWgBQgYABgTAMQgSALgLAVQgLAUAAAYIAAAAQAAAZALATQAKAVATAMQATAMAYAAQAXAAARgJQARgIAPgPIAdAdQgNANgPAKQgPAKgSAFQgSAGgXAAQglgBgdgQgAupBwQgegRgQgdQgRgeAAgkIAAAAQAAgZAKgYQAJgYASgSQASgRAYgKQAYgLAdAAQAnAAAeASQAdASARAdQAQAcABAkIAAAAQgBAbgJAXQgKAYgSARQgRATgYAKQgYAJgeABQgnAAgdgSgAuRhMQgTALgLAVQgKAUgBAYIAAAAQABAZALATQAKAVAUAMQATAMAZAAQAZAAATgMQATgMALgUQALgUAAgZIAAAAQAAgXgLgVQgLgUgTgMQgTgMgagBQgZABgTAMgAyjBxQgdgRgRgeQgQgdAAglIAAAAQAAgjAQgdQARgdAdgSQAdgSAmAAQAXAAASAFQASAFAOAJQAOAJAMALIgcAhQgPgOgRgJQgRgIgWgBQgYABgTAMQgSALgLAVQgLAUAAAYIAAAAQAAAZALATQAKAVATAMQATAMAYAAQAXAAARgJQARgIAPgPIAdAdQgNANgPAKQgPAKgSAFQgSAGgXAAQglgBgdgQgAL7B1QgYgNgNgYQgNgZAAglIAAiPIAsAAIAACOQAAAjARASQARASAeAAQAeAAAQgRQARgSAAgjIAAiPIAsAAIAACNQAAAmgNAZQgNAagZAMQgYANghAAQghAAgYgNgAP1B3QgbgKgWgUIAaggQASAQAUAIQATAJAXAAQAVAAALgJQAMgJABgOIAAAAQAAgJgFgHQgEgHgNgFQgMgGgXgFQgbgHgTgIQgTgHgJgOQgKgOAAgYIAAAAQAAgWALgQQALgRATgJQAUgJAZAAQAbAAAXAIQAWAIATAPIgXAiQgSgNgRgGQgRgHgRAAQgUABgKAHQgLAJAAANIAAABQAAAJAFAHQAFAGANAGQANAGAYAFQAbAHASAJQASAHAJAOQAJAPAAAUIAAABQAAAYgMARQgLAQgUAJQgUAJgbAAQgdAAgbgKgASxB9IAAgxIAwAAIAAAxgAFjB9IAAjQIhQAAIAAgqIDMAAIAAAqIhQAAIAADQgAgcB9Igag9Ih3AAIgaA9IguAAIBvj7IApAAIBtD7gAhGAZIgshiIgrBiIBXAAgAlhB9IAAjQIhQAAIAAgqIDMAAIAAAqIhQAAIAADQgAn9B9IiLixIAACxIgrAAIAAj6IApAAICHCtIAAitIArAAIAAD6gAS9AtIgOidIAAgNIAzAAIAAANIgNCdg");
	this.shape.setTransform(194,49.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(-328.4,-504.9,1,1,0,0,0,1024,768);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D1232A","#92181F"],[0,1],0,61,0,-60.9).s().p("A74HzQhVAAg7g7Qg9g8AAhVIAApNQAAhVA9g7QA7g9BVAAMA3xAAAQBVAAA8A9QA7A7AABVIAAJNQAABVg7A8Qg8A7hVAAg");
	this.shape_1.setTransform(199,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,398,100);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;