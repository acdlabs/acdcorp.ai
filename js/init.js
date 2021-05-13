/** *************Init JS*********************
	
    TABLE OF CONTENTS
	---------------------------
	1.Ready function
	2.Load function
	3.Subscribe JS
	4.Full height function
	5.Resize function
	6.ACDAI function
		1)Fullpage JS
	7.Service,Team toggle window
	8.Placehoder ie9
************************************* **/
 
 "use strict"; 

/*****Ready function start*****/
$(document).ready(function(){
  ACDAI();
  $('.la-anim-1').addClass('la-animate');
});
/*****Ready function end*****/

/*****Load function start*****/
$(window).load(function(){
	$(".preloader-it").delay(500).fadeOut("slow");
});
/*****Load function* end*****/

/***** Full height function start *****/
var setHeight = function () {
	var height = $(window).height();
	$('.full-height').css('height', (height));
};
/***** Full height function end *****/


/***** Resize function start *****/
$(window).on("resize", function () {
	setHeight();
	var width = $(window).width();
}).resize();
/***** Resize function end *****/

/***** ACDAI function start *****/
var ACDAI = function (){
	/*Fullpage JS*/
	$('#fullpage').fullpage({
		menu: '#menu',
		anchors: ['home_sec', 'contact_sec'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['home', 'contact'],
		responsiveWidth: 1300
	});



	particlesJS("particles-js", {
      particles: {
        number: { value: 50, density: { enable: false, value_area: 500 } },
        color: { value: "#dfe7f7" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
          value: 2,
          random: true,
          anim: { enable: false, speed: 20, size_min: 0.5, sync: false }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: { enable: false, mode: "repulse" },
          onclick: { enable: true, mode: "bubble" },
          resize: true
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: { distance: 400, size: 5, duration: 1, opacity: 1, speed: 3 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 }
        }
      },
      retina_detect: true
    });

}
/***** ACDAI function end *****/