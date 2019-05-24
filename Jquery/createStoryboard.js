$(document).ready(function(){
    console.log("createStoryboard linked");
    $("#createForm").hide();
    $(".create-button").click(appearForm);
    $("#goBack").click(back);
    $(".addPurpose").click(nieuweDoelstelling);
    $("#next").click(next);
    
    var getPurpose = document.getElementById("purpose");
    var popup = document.getElementById("Form");
    var getTitel = document.getElementById("newTitle");
    var getDeadline = document.getElementById("endDate");
    var getStartDate = document.getElementById("beginDate");
    
    function appearForm(){
        $("#createForm").slideDown();
        console.log("appearForm werkt");
        getTitel.value = "";
        getStartDate.value = "";
        getDeadline.value = "";
        getPurpose.value = "";
        
        popup.style.display = "block"; 
    }

    function back(e){
        e.preventDefault();
        $("#createForm").slideUp();
        popup.style.display = "none";
        console.log("back werkt");
    }
    function next(e){
        e.preventDefault();
        var large = '<div class="SB"> <h2 id="inhoud">'+ getTitel.value+'</h2> <p><Strong>Startdatum: </Strong>'+ getStartDate.value+'</p> <p><Strong>Deadline: </Strong>' + getDeadline.value + '</p> <p><Strong>Doelstellingen: </Strong>'+ getPurpose.value + '</p></div>';
        $("#create_storyboard").append(large);
        
        popup.style.display = "none";
        $("#createForm").slideUp();



       
        
    }
    function nieuweDoelstelling(e){
        e.preventDefault();
        $("#tab").append("<a id='doelSelect'> <input id='purpose' class='purpose' type='text' value=''> <input type='checkbox'> </a>");
        console.log("purpose werkt");

    }
    
  






});