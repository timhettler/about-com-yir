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

    // // Rocket
    canvas = document.getElementById("rocket-animation");
    exportRoot = new lib.slide1_animation();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(24);
    createjs.Ticker.addEventListener("tick", stage);

    // //Content
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

      $('#new-marketing-programs')
        .on('impress:stepenter', function (e) {
          canvas = document.getElementById("tools-animation");
          exportRoot = new lib6.slide6_animation01();

          stage = new createjs.Stage(canvas);
          stage.addChild(exportRoot);
          stage.update();

          createjs.Ticker.setFPS(24);
          createjs.Ticker.addEventListener("tick", stage);
        });

        $('#double-down')
            .on('impress:stepenter', function (e) {
            $(this).find('#video-experts')[0].play();
            })
            .on('impress:stepleave', function (e) {
            $(this).find('#video-experts')[0].pause();
            });

        $('#the-biggest-news')
            .on('impress:stepenter', function (e) {
                var $container = $(this).find('.section--1');
                var $img = $container.find('img');

                $container
                    .animate({'scrollTop':$img.height()}, 10000)
                    .one('mousemove', function () {
                        $(this).stop();
                    });
            })
            .on('impress:stepleave', function (e) {
              $(this).find('.section--1')
                .css('scrollTop', 0);
            });

        $('#great-new-additions')
            .on('impress:stepenter', function (e) {
                canvas = document.getElementById("additions-animation");
                exportRoot = new lib8.slide8_animation02();

                stage = new createjs.Stage(canvas);
                stage.addChild(exportRoot);
                stage.update();

                createjs.Ticker.setFPS(24);
                createjs.Ticker.addEventListener("tick", stage);
            });

        $('img[data-full-src]')
            .css('cursor', 'pointer')
            .on('click', function () {
                $('.js-step-9-hero').prop('src',$(this).data('full-src'));
            });
  });

}(window.jQuery, window, document));
