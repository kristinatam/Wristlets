$(document).ready(function() {
    var colors = $.getJSON("http://www.colourlovers.com/api/palettes/top?jsonCallback=?",
    { numResults: 3 }, function() {

        var allColors = colors.responseJSON; 
        
        $('#rotated').click(function() {  
        var randomColor = allColors[Math.floor(Math.random() * allColors.length)];
            $('body, address').css("background-color","#"+ randomColor.colors[0]);    
            console.log("Spalva: ", randomColor.colors[0]);
            console.log("Spalvos: ", allColors);
});
    });
      
         });