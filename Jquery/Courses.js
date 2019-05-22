$(document).ready(function(){
    console.log("script linked");
    $("#addButton").click(nieuweCursus);
    function nieuweCursus(){
        $("#plus").click(add);
        function add(){
            $(".newCourse").append("<h3><img src='Foto's/Share/plus.png'></h3> <div class='lijn'><img src='Foto's/Share/lijn.png' alt='lijn' width='300'></div>");  
            console.log(add);
        }
        
        $("#minus").click(remove);
        function remove(){
            function removeElement(storyboard) {
                storyboard.parentNode.removeChild(storyboard);
            }
            removeElement(document.getElementById("testSpecial"));
            console.log(remove);
        }
    }

});