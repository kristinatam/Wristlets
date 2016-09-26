$(document).ready(function() {
   var colors = ["#F7BFBF", "#D1A1F6", "#929BEB", "#49FD5B", "#FCA674"];
 
    $('#rotated').click(function() {
         
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
        $('body').css("background-color", randomColor);   
   
});
        });