
// jquery functions below

$( document ).ready(function() {


    setTimeout(function(){
        // alert('here')
        doBounce($(".down-icon"), 3, '10px', 300);  
    },1600); 

    $( ".down-icon" ).click(function() {
        $('html, body').animate({
            scrollTop: parseInt($("#we-help").offset().top)
        }, 2000);
      });
     
     
});

function doBounce(element, times, distance, speed) {
    for(i = 0; i < times; i++) {
        element.animate({marginTop: '-='+distance},speed)
            .animate({marginTop: '+='+distance},speed);
    }        
}