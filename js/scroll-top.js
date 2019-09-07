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
	  }, 0);//loading speed variable
	}
	}
	// Listeners
	window.addEventListener('scroll', btnReveal);
	btnTop.addEventListener('click', TopscrollTo);  

};

basicScrollTop();