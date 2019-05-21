$(document).ready(function(){
console.log("script linked");
$(".newStoryboards").hide();
$(".uitklap").click(function(){
    $(this).toggleClass("animate-listitem");
    $(".newStoryboards").slideToggle();
    $("#plus").on("click", function(){
        $(".newStoryboards").append("<img src='Afbeeldingen/ShareIcon.jpg' alt='otherTest' id='test'>");   
    });
    $("#minus").on("click", function(){
        function removeElement(storyboard) {
            storyboard.parentNode.removeChild(storyboard);
        }
        removeElement(document.getElementById("test"));
    });
  });
});