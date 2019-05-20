$(document).ready(function(){
console.log("script Linked");

$("#test").hide();
$('.uitklap').click(function(){
    console.log(this);
    
    $(this).toggleClass("animate-listitem");  
    $(this).slideToggle();
    
    $("#plus").on("click", function(){
        $(".Van-u-gedeeld").append("<a><img src='Afbeeldingen/ShareIcon.jpg' alt='otherTest' id='test'></a>");   
    });
    $("#minus").on("click", function(){
        function removeElement(storyboard) {
            storyboard.parentNode.removeChild(storyboard);
        }
        removeElement(document.getElementById("test"));
    });
  });

});