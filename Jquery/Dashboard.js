$(document).ready(function(){
    console.log("script linked");
    $(".currentStoryboards").hide();
    $("#startTimer").click(timer);
    $(".runningStoryboards .uitklap").click(runningStoryboards);
    $(".uitklap").click(function(){
        $(this).toggleClass("animate-listitem");
    });
   // $("#storyboardCanvas").append(chart);

    function runningStoryboards(){
        console.log('trigger toggle');
        $(".currentStoryboards").slideToggle();
        
    
    }

    $( function() {
        $( "#datepicker" ).datepicker();
    } );

   /* var chart = document.getElementById("storyboardCanvas");
    var ctx = chart.getContext("2d");
    var chartColor = "#321432";
    console.log(ctx);
    ctx.fillStyle = chartColor;
    ctx.fillRect(10, 10, 150, 100);
    ctx.fillRect(10, 110, 150, 100);
    ctx.fillRect(10, 210, 150, 100); 
*/
function timer(){
    var mins = 2;
    var secs = mins * 60;
    console.log(mins);
    console.log(secs);

    function countdown(){
        setTimeout(Decrement(), 60);
    } 
    console.log(countdown);
    function Decrement(){
        if(document.getElementById){
            minutes = document.getElementById("minutes");
            seconds = document.getElementById("seconds");

            if(seconds < 59){
                seconds.value = secs;
            }
            else{
                minutes.value = getminutes();
                seconds.value = getseconds();
            }
            if(mins < 1){
                minutes.style.color = "red";
                seconds.style.color = "red";
            }
            if(mins < 0){
                alert("time up");
                minutes.value = 0;
                seconds.value = 0;
            }
            else{
                secs--;
                setTimeout(Decrement(), 1000);
            }
        }
    }
    function getminutes(){
        mins = Math.floor(secs/60);
        return mins;
    }
    function getseconds(){
        return secs - Math.round(mins * 60);
    }
}
});