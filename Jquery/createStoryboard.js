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
    $("#titelForm").hide();
        $("#startDatumForm").hide();
        $("#deadlineForm").hide();
        $("#doelstellingForm").hide();

    function next(e){
        e.preventDefault();
        var large = '<br><br><br><br><div class="SB"> <p><button id="inhoud" style="background-color: white; border: none"><Strong>Titel: </Strong>'+ getTitel.value+'</button></p> <p><button id="startDatum" style=" background-color: white; border: none"><Strong>Start: </Strong>'+ getStartDate.value+'</button></p> <p><button id="eindDatum" style=" background-color: white; border: none"><Strong>Deadline: </Strong>' + getDeadline.value + '</button></p> <p><button id="doelen" style="background-color: white; border: none"><Strong>Doelstellingen: </Strong>'+ getPurpose.value + '</button></p><p><button id="orange" style="width: 65px; float: left; height: 15px; background-color: #F0874B"><input type="checkbox"></button><button id="blue" style="width: 65px; float: left; height: 15px; background-color: #12ADAD"><input type="checkbox"></button><button id="pink" style="width: 65px; float: left; height: 15px; background-color: #EE8090"><input type="checkbox"></button><button id="green" style="width: 65px; float: left; height: 15px; background-color: #85A22A"><input type="checkbox"></button><button id="violet" style="width: 65px; float: left; height: 15px; background-color: #6361A8"><input type="checkbox"></button><button id="yellow" style="width: 65px; float: left; height: 15px; background-color: #F2B315"><input type="checkbox"></button></p></div>';
        $("#create_storyboard").append(large);
        $("#titelForm").hide();
        $("#startDatumForm").hide();
        $("#deadlineForm").hide();
        $("#doelstellingForm").hide();
        $("#inhoud").click(function(e){
            e.preventDefault();
            $("#titelForm").slideDown();
        });

        $("#startDatum").click(function(e){
            e.preventDefault();
            $("#startDatumForm").slideDown();
        });

        $("#eindDatum").click(function(e){
            e.preventDefault();
            $("#deadlineForm").slideDown();
        });

        $("#doelen").click(function(e){
            e.preventDefault();
            $("#doelstellingForm").slideDown();
        });

        $("#slaopDeadline").click(function(e){
            e.preventDefault();
            var dead = document.getElementById("dead");
            var eindDatum = document.getElementById("eindDatum");
            eindDatum.innerHTML = "<Strong>Titel: </Strong>" + dead.value;
            $("#deadlineForm").slideUp();
        });

        $("#slaopDoelstelling").click(function(e){
            e.preventDefault();
            var doel = document.getElementById("doel");
            var doelen = document.getElementById("doelen");
            doelen.innerHTML = "<Strong>Doelstelling: </Strong>" + doel.value;
            $("#doelstellingForm").slideUp();
        });



        popup.style.display = "none";
        $("#createForm").slideUp();
        $("#slaopTitel").click(function(e){
            e.preventDefault();
            var ti = document.getElementById("ti");
            var inhoud = document.getElementById("inhoud");
            inhoud.innerHTML = "<Strong>Titel: </Strong>" + ti.value;
            $("#titelForm").slideUp();
        });
        
        $("#slaopStartDatum").click(function(e){
            e.preventDefault();
            var sta = document.getElementById("sta");
            var startDatum = document.getElementById("startDatum");
            startDatum.innerHTML = "<Strong>Start: </Strong>" + sta.value;
            $("#startDatumForm").slideUp();
        });


    
            
        
    
        
           
        
     
    }
    

    function nieuweDoelstelling(e){
        e.preventDefault();
        $("#tab").append("<a id='doelSelect'> <input id='purpose' class='purpose' type='text' value=''> <input type='checkbox'> </a>");
        console.log("purpose werkt");

    }


        
       
    

   
    
  






});