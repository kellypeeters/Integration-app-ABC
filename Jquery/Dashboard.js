$(document).ready(function(){
    console.log("script linked");
    $(".currentStoryboards").hide();
    $(".storyboardsDashboard").append(kleurenRecenteStoryboards);
    $(".runningStoryboards button").click(runningStoryboards);
    $(".uitklap").click(function(){
        $(this).toggleClass("animate-listitem");
    });
    $("#storyboardCanvas").append(chart);

    function runningStoryboards(){
        console.log('trigger toggle');
        $(".currentStoryboards").slideToggle();
        
    
    }

    function kleurenRecenteStoryboards(){
        $(".recentFirst .kleurtjes").append("<a id='color'>kleur</a>");
        $(".recentSecond .kleurtjes").append("<a id='color'>kleur</a>");
        
            if(true){
                $("#color").css("background-color", "red");
    
        }
    }
    var chart = document.getElementById("storyboardCanvas");
    var ctx = chart.getContext("2d");
    var chartColor = "#321432";
    console.log(ctx);
    ctx.fillStyle = chartColor;
    ctx.fillRect(10, 10, 150, 100);
    ctx.fillRect(10, 110, 150, 100);
    ctx.fillRect(10, 210, 150, 100);
 

    ctx.lineTo(0,50);
    ``
});