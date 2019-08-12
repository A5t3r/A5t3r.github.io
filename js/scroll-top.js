var basicScrollTop = function () {  
	// The button
	var btnTop = document.querySelector('#scrollToTop');
	// Reveal the button
	var btnReveal = function () { 
	if (window.scrollY >= 300) {
	  btnTop.classList.add('is-visible');
	} else {
	  btnTop.classList.remove('is-visible');
	}    
	}  
	// Smooth scroll top
	// Thanks to => http://stackoverflow.com/a/22610562
	var TopscrollTo = function () {
	if(window.scrollY!=0) {
	  setTimeout(function() {
		window.scrollTo(0,window.scrollY-100);
		TopscrollTo();
	  }, 5);
	}
	}
	// Listeners
	window.addEventListener('scroll', btnReveal);
	btnTop.addEventListener('click', TopscrollTo);  

};
basicScrollTop();	
	
// overlay click animation
$(document).ready(function() {
	$('#overlay').click(function() {
	  $('#overlay').fadeOut('slow');
	  $('.animated-icon3').toggleClass('open');
	  $('#navbarMenu').collapse("hide");
	});
});