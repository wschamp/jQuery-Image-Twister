/*!
 * jQuery Image Twister
 *
 * Copyright 2010, Andrew Hite
 * Date: Thu May 27
 */
$(function(){
  $.fn.twister = function(options){
    options = jQuery.extend({
      duration: 250,
      degrees: 5,
      scale: 120,
      overflown: false,
			center: false
    }, options);
      
    $(this).each(function(){
      var container = $(this);
      $(this).find('img').load(function(){
        $(container).css({
          height: $(this).height(),
          width: $(this).width(),
          overflow: options.overflown ? 'visible' : 'hidden'
        });
      });
    })
    .mouseenter(function(){
      $(this).find('img')
        .css({
          zIndex: '9999'
        })
        .animate({ 
          marginTop: options.center ? '0' : '-' + (options.degrees * 2) + '%',
          marginLeft: options.center ? '0' : '-' + (options.degrees * 2) + '%',
          rotate: options.degrees + 'deg', 
          width: options.scale + '%'
        }, { 
          duration: options.duration, 
          queue: true
        });
    })
    .mouseleave(function(){
      $(this).find('img')
        .css({
          zIndex: '9988'
        })
        .animate({
          marginTop: '0',
          marginLeft: '0',
          rotate: 0 + 'deg',
          width: 100 + '%'
        }, {
          duration: options.duration,
          queue: true
        });
    });
  }
});