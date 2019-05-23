$(document).ready(function(){
    console.log("createStoryboard linked");
    $("#createForm").hide();
    $(".create-button").click(appearForm);
    $("#goBack").click(back);
    //$(".addPurpose").click(nieuweDoelstelling);
    $(".addPurpose").click(function(e){
        e.preventDefault();
        $("#tab").append("<p class='purpose'></p> <button class='addPurpose'><img src='Fotos/Symbolen/COURSES plus teken (toevoegen).png' alt='add'></button>");
        console.log("purpose werkt");
    });
    $("#next").click(next);

    function appearForm(){
        $("#createForm").slideDown();
        $("nav, .legende-leeractiviteiten, #create_storyboard, header, .create-button, #storyboard_template, footer").hide()
        $("body").css("background-color", "rgba(0,0,0,0.5)");
        console.log("appearForm werkt");
        
    }

    function back(){
        $("#createForm").slideUp();
        console.log("back werkt");
    }
    function next(){

    }
    function nieuweDoelstelling(){
        $("#tab").append("<p class='purpose'></p> <button class='addPurpose'><img src='Fotos/Symbolen/COURSES plus teken (toevoegen).png' alt='add'></button>");
        console.log("purpose werkt");

    }

});