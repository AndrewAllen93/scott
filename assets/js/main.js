/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

var SliceSlider = {
    
   /**
    * Settings Object
    */
   settings: {
     delta:              0,
     currentSlideIndex:  0,
     scrollThreshold:    40,
     slides:             document.querySelectorAll('.slide'),
     numSlides:          document.querySelectorAll('.slide').length,
     navPrev:            document.querySelectorAll('.js-prev'),
     navNext:            document.querySelectorAll('.js-next'),
   },
   
   /**
    * Init
    */
   init: function() {
     this.bindEvents();
   },
   
   /**
    * Bind our click, scroll, key events
    */
   bindEvents: function(){
     var self = this;
     // Scrollwheel & trackpad
     this.settings.slides.forEach(function(slide) {
       slide.addEventListener('wheel', function(e) {
         self.handleScroll(e);
       });
     });
     // On click prev
     this.settings.navPrev.forEach(function(nav) {
       nav.addEventListener('click', function() {
         self.prevSlide();
       });
     });
     // On click next
     this.settings.navNext.forEach(function(nav) {
       nav.addEventListener('click', function() {
         self.nextSlide();
       });
     });
     // On Arrow keys
     document.addEventListener('keyup', function(e) {
       // Left or back arrows
       if ((e.which === 37) ||  (e.which === 38)){
         self.prevSlide();
       }
       // Down or right
       if ((e.which === 39) ||  (e.which === 40)) {
         self.nextSlide();
       }
     });
   },
   
   /** 
    * Intercept scroll direction
    */
   handleScroll: function(e){
     var self = SliceSlider;
     // Scrolling up
     if (e.deltaY < 0) { 
       self.settings.delta--;
       if ( Math.abs(self.settings.delta) >= self.settings.scrollThreshold) {
         self.prevSlide();
       }
     }
     // Scrolling Down
     else {
       self.settings.delta++;
       if (self.settings.delta >= self.settings.scrollThreshold) {
         self.nextSlide();
       }
     }
     // Prevent page from scrolling
     e.preventDefault();
   },
 
   /**
    * Show Slide
    */
   showSlide: function(){ 
     var self = this;
     // Reset
     this.settings.delta = 0;
     // Bail if we're already sliding
     if (document.body.classList.contains('is-sliding')){
       return;
     }
     // Loop through our slides
     this.settings.slides.forEach(function(slide, i) {
       // Toggle the is-active class to show slide
       slide.classList.toggle('is-active', (i === self.settings.currentSlideIndex)); 
       slide.classList.toggle('is-prev', (i === self.settings.currentSlideIndex - 1)); 
       slide.classList.toggle('is-next', (i === self.settings.currentSlideIndex + 1)); 
       // Add and remove is-sliding class
       document.body.classList.add('is-sliding');
       setTimeout(function(){
         document.body.classList.remove('is-sliding');
       }, 1000);
     });
   },
 
   /**
    * Previous Slide
    */
   prevSlide: function(){
     var self = this;
     // If on first slide, loop to last
     if (this.settings.currentSlideIndex <= 0) {
       this.settings.currentSlideIndex = this.settings.numSlides;
     }
     this.settings.currentSlideIndex--;
     this.showSlide();
   },
 
   /**
    * Next Slide
    */
   nextSlide: function(){
     var self = this;
     this.settings.currentSlideIndex++;
     // If on last slide, loop to first
     if (this.settings.currentSlideIndex >= this.settings.numSlides) { 
       this.settings.currentSlideIndex = 0;
     }
     this.showSlide();
   },
 };
 SliceSlider.init();
 
