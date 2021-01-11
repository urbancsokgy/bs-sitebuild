$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
        console.log(hash);
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 3000, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


  window.onscroll = function() {myFunction()};

function myFunction() {
  if (window.scrollY > 1 || document.documentElement.scrollTop > 1) {
    console.log(window.scrollY);
    document.querySelector('.navbar-top').classList.remove('top-nav');
    document.querySelector('.navbar-top').classList.remove('bg-transparent');
    
    
    
} else {
    document.querySelector('.navbar-top').classList.add('top-nav');
    document.querySelector('.navbar-top').classList.add('bg-transparent');
  
  }
}