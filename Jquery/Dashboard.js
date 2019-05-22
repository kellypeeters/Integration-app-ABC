$(document).ready(function(){
    console.log("script linked");
    $(".currentStoryboards").hide();
    $(".uitklap").click(function(){
        $(this).toggleClass("animate-listitem");
    });
    $(".runningStoryboards button").click(runningStoryboards);

    function runningStoryboards(){
        $(".currenStoryboards").slideToggle();
    }
});