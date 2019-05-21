$(document).ready(function () {
    $('.uitklap1').click(function () {
        $(this).toggleClass("animate-listitem");
        $('.First').slideToggle();
    });
    
    $('.uitklap2').click(function () {
        $(this).toggleClass("animate-listitem");
        $('.Second').slideToggle();
    });
    
    $('.uitklap3').click(function () {
        $(this).toggleClass("animate-listitem");
        $('.Third').slideToggle();
    });
}); 
