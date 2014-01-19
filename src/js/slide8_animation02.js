(function (lib8, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib8.slide8_animation02 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib8.RightRail();
	this.instance.setTransform(215,497,1,1,0,0,0,214.7,497);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,0,429.4,994);


// symbols:
(lib8.one_mc = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("1", "210px Gotham Rounded Bold", "#FFFFFF");
	this.text.lineHeight = 210;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82.4,256.2);


(lib8._7_MC = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("7", "210px Gotham Rounded Bold", "#FFFFFF");
	this.text.lineHeight = 210;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,119.8,256.2);


(lib8._0_MC = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("0", "210px Gotham Rounded Bold", "#FFFFFF");
	this.text.lineHeight = 210;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,143.1,256.2);


(lib8.RightRail = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79));

	// Layer 2
	this.text = new cjs.Text("bagels?", "48px Gotham Medium");
	this.text.lineHeight = 58;
	this.text.setTransform(10,812);

	this.text_1 = new cjs.Text("JOIN US!", "49px Gotham Medium", "#FFFFFF");
	this.text_1.lineHeight = 59;
	this.text_1.setTransform(93.3,909.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1232A").s().p("A74H0QhVAAg7g8Qg9g8AAhUIAApOQAAhVA9g8QA7g8BVAAMA3xAAAQBVAAA8A8QA7A8AABVIAAJOQAABUg7A8Qg8A8hVAAg");
	this.shape.setTransform(207.5,944);

	this.text_2 = new cjs.Text("EMPLOYEES TODAY", "34px Gotham Rounded Bold", "#FFFFFF");
	this.text_2.lineHeight = 41;
	this.text_2.setTransform(32.8,376.9);

	this.text_3 = new cjs.Text("IN JAN. 2013 TO", "45px Gotham Rounded Bold", "#FFFFFF");
	this.text_3.lineHeight = 54;
	this.text_3.setTransform(29.2,126.1);

	this.text_4 = new cjs.Text("146 EMPLOYEES", "44px Gotham Rounded Bold", "#FFFFFF");
	this.text_4.lineHeight = 53;
	this.text_4.setTransform(29.2,73);

	this.text_5 = new cjs.Text("WE’VE GROWN FROM", "32px Gotham Rounded Bold", "#FFFFFF");
	this.text_5.lineHeight = 38;
	this.text_5.setTransform(29.2,31.7);

	this.text_6 = new cjs.Text("mention the free", "48px Gotham Medium");
	this.text_6.lineHeight = 58;
	this.text_6.setTransform(10,754.3);

	this.text_7 = new cjs.Text("fun team. Did we", "48px Gotham Medium");
	this.text_7.lineHeight = 58;
	this.text_7.setTransform(10,699.3);

	this.text_8 = new cjs.Text("energetic and", "48px Gotham Medium");
	this.text_8.lineHeight = 58;
	this.text_8.setTransform(10,644.4);

	this.text_9 = new cjs.Text("Join our creative,", "48px Gotham Medium");
	this.text_9.lineHeight = 58;
	this.text_9.setTransform(10,589.4);

	this.text_10 = new cjs.Text("195", "48px Gotham Bold");
	this.text_10.lineHeight = 58;
	this.text_10.setTransform(333.6,534.4);

	this.text_11 = new cjs.Text("we’ll be up to ", "48px Gotham Medium");
	this.text_11.lineHeight = 58;
	this.text_11.setTransform(10,534.4);

	this.text_12 = new cjs.Text("By mid-2014", "48px Gotham Medium");
	this.text_12.lineHeight = 58;
	this.text_12.setTransform(10,479.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(80));

	// one_mc
	this.instance = new lib8.one_mc();
	this.instance.setTransform(72.6,280.9,4.87,4.87,0,0,0,45.4,128.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({scaleX:0.68,scaleY:0.68,x:72.4,alpha:1},7).to({scaleX:1.2,scaleY:1.2},2).to({scaleX:0.89,scaleY:0.89},2).to({scaleX:1,scaleY:1},2).wait(37));

	// 7_MC
	this.instance_1 = new lib8._7_MC();
	this.instance_1.setTransform(171,280.9,4.278,4.278,0,0,0,66,128.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({scaleX:0.71,scaleY:0.71,x:171.2,alpha:1},7).to({scaleX:1.17,scaleY:1.17},2).to({scaleX:0.89,scaleY:0.89},2).to({scaleX:1,scaleY:1},2).wait(28));

	// 0_MC
	this.instance_2 = new lib8._0_MC();
	this.instance_2.setTransform(298.6,280.9,4.075,4.075,0,0,0,77.7,128.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48).to({_off:false},0).to({regX:77.8,scaleX:0.8,scaleY:0.8,alpha:1},7).to({regX:77.7,scaleX:1.2,scaleY:1.2,x:298.5},2).to({scaleX:0.89,scaleY:0.89},2).to({scaleX:1,scaleY:1},2).wait(19));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EggoAjyMAAAhHjMBBSAAAMAAABHjg");
	this.shape_1.setTransform(209,229);

	this.text_13 = new cjs.Text(".", "48px Gotham Medium");
	this.text_13.lineHeight = 58;
	this.text_13.setTransform(412.3,534.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_13},{t:this.shape_1}]}).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,429.4,994);

})(lib8 = lib8||{}, images = images||{}, createjs = createjs||{});
var lib8, images, createjs;
