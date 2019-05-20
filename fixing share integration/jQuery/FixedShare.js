$(document).ready(function(){
console.log("script linked");
$("#test").hide();
$(".uitklap").click(function(){
    $(this).toggleClass("animate-listitem");
    $("#test").slideToggle();
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