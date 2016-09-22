$(document).ready(function() {
    $('#button').click (function() {

    var email = $('#email').val();
    var username = $('#username').val();
    var password = $('#password').val();

    if (email == '' || username == '' || password == '') {
    alert("Please fill in all fields!");
    }  else {
    $('.success').show(); }

    });
});