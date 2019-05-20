$(document).ready(function(){
console.log("script Linked");
$('.uitklap').click(function(){
    console.log(this);
    $(this).addClass("animate-listitem");
    
   
});
});