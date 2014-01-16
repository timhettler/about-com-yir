(function ( $, window, document, undefined ) {
  'use strict';

  impress().init();

  var canvas, canvasTopicAreas, stage, exportRoot;
  function initCreateJS() {
    // Rocket
    canvas = document.getElementById("rocket-animation");
    exportRoot = new lib.slide1_animation();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(24);
    createjs.Ticker.addEventListener("tick", stage);

    // canvas MediaPost
    canvas = document.getElementById("canvasMediaPost");
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