(function ( $, window, document, undefined ) {
  'use strict';

  impress().init();

  var canvas, canvasTopicAreas, stage, exportRoot;
  function initCreateJS() {
    // Intro
    canvas = document.getElementById("intro");
    exportRoot = new libIntro.YIR_intro();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();
    stage.enableMouseOver();

    createjs.Ticker.setFPS(24);
    createjs.Ticker.addEventListener("tick", stage);

    // Rocket
    canvas = document.getElementById("rocket-animation");
    exportRoot = new lib.slide1_animation();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(24);
    createjs.Ticker.addEventListener("tick", stage);

    //Content
    canvas = document.getElementById("content-animation");
    exportRoot = new lib1.slide2_animation();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();
    createjs.Ticker.setFPS(24);
    createjs.Ticker.addEventListener("tick", stage);
  }

  $(document).ready(function(){
      initCreateJS();
  });

}(window.jQuery, window, document));
