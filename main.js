$(document).ready(function() {

    $('#rotated').click(function() {
        var colors = $.getJSON("http://www.colourlovers.com/api/palettes/top?jsonCallback=?", {
            numResults: 3
        }, function() {

            var allColors = colors.responseJSON;

            var randomColor = allColors[Math.floor(Math.random() * allColors.length)];
            $('body, address').css("background-color", "#" + randomColor.colors[0]);
        });
    });

});