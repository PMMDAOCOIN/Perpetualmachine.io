;var wp_cryptozen;

(function($) {
	'use strict';

	wp_cryptozen = {

		init: function() {
			//this.addClassAfterScroll();
			this.preloaderInit();
			this.scrollTop();
			// this.addClass();
			// this.buttonNuka();
		},
		scrollTop:function(){
			$(window).on('scroll', function () {
		        var scrolled = $(window).scrollTop();
		        if (scrolled > 300) $('.go-top').addClass('active');
		        if (scrolled < 300) $('.go-top').removeClass('active');
		    });

		    $('.go-top').on('click', function () {
		        $("html, body").animate({
		            scrollTop: "0"
		        }, 1200);
		    });
		},
		
		addClassAfterScroll: function(){
			$(window).scroll(function(){
			    $('.stick_menu_main').toggleClass('header-active', $(this).scrollTop() > 200);
			});
		},
		// addClass: function(){
		// 	$(".test a.elementor-button-link.elementor-button.elementor-size-sm").click(function(){
		// 	  $(".test .elementor-button-text").addClass("expand");
		// 	});
		// 	$(".testdel a.elementor-button-link.elementor-button.elementor-size-sm").click(function(){
		// 	  $(".elementor-button-text").removeClass("expand");
		// 	});

		// 	$(".testdel a.elementor-button-link.elementor-button.elementor-size-sm").click(function(){
		// 	  $(".testdel .elementor-button-text").addClass("expanddel");
		// 	});
		// 	$(".test a.elementor-button-link.elementor-button.elementor-size-sm").click(function(){
		// 	  $(".elementor-button-text").removeClass("expanddel");
		// 	});
		// },

		preloaderInit: function(){

			var preloader = $( '.preloader' );
			
				if ( preloader.length ) {
				var loader = setTimeout(function() {
		            preloader.addClass("loaded");
		            $(window).trigger("resize");
		        }, 1000);
			}
		},

		// buttonNuka: function(){
		// 	var buttonNuka = $( '.button-nuka .elementor-button' );
  //   		$('a.elementor-button').append('<span class="button-overlay"></span>');
		// 	if (buttonNuka.length) {
		// 		buttonNuka.on('mouseenter', function (e) {
		// 			var parentOffset = $(this).offset(),
		// 					relX = e.pageX - parentOffset.left,
		// 					relY = e.pageY - parentOffset.top;
		// 			$(this).find('.button-overlay').css({
		// 				top:  relY,
		// 				left: relX
		// 			})
		// 		})
		// 		.on('mouseout', function (e) {
		// 			var parentOffset = $(this).offset(),
		// 					relX = e.pageX - parentOffset.left,
		// 					relY = e.pageY - parentOffset.top;
		// 			$(this).find('.button-overlay').css({
		// 				top:  relY,
		// 				left: relX
		// 			})
		// 		});
		// 	}
		// }

	};

	$(document).ready(function(){
		wp_cryptozen.init();
	})

}(jQuery));