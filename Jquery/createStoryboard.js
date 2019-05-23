$(document).ready(function(){
    console.log("createStoryboard linked");
    $("#createForm").hide();
    $(".create-button").click(appearForm);
    $("#goBack").click(back);
    //$(".addPurpose").click(nieuweDoelstelling);
    $(".addPurpose").click(nieuweDoelstelling);
    $("#next").click(next);

    function appearForm(){
        $("#createForm").slideDown();
        $("nav, .legende-leeractiviteiten, #create_storyboard, header, .create-button, #storyboard_template, footer").hide()
        $("body").css("background-color", "rgba(0,0,0,0.5)");
        console.log("appearForm werkt");
        
    }

    function back(e){
        e.preventDefault();
        $("#createForm").slideUp();
        $("nav, .legende-leeractiviteiten, #create_storyboard, header, .create-button, #storyboard_template, footer").show();
        $("body").css("background-color", "white");
        console.log("back werkt");
    }
    function next(e){
        e.preventDefault();
        var getTitel = document.getElementById("newTitle");
        var getDeadline = document.getElementById("endDate");
        var setTitel = document.getElementById("input_titel");
        var setDeadline = document.getElementById("input_deadline");

        setTitel.innerHTML = getTitel.value;
        setDeadline.innerHTML = getDeadline.value;


    }
    function nieuweDoelstelling(e){
        e.preventDefault();
        $("#tab").append("<a id='doelSelect'> <input class='purpose' type='text'> <input type='checkbox'> </a>");
        console.log("purpose werkt");

    }

});