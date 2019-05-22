$(document).ready(function(){
    console.log("script linked");
    $(".sharedWithYou").hide();
    $(".recentlyUsed").hide();
    $(".muchUsed").hide();
    $(".newStoryboards").hide();
    $(".Gedeeld button").click(gedeeldMetJou);
    $(".Recente button").click(recent);
    $(".Veel-gebruikte button").click(veelGebruikt);
    $(".Van-u-gedeeld button").click(gedeeldMetAnderen);
    $(".uitklap").click(function(){
        $(this).toggleClass("animate-listitem");
    });

    function gedeeldMetJou(){
        $(".sharedWithYou").slideToggle();
    }
    function recent(){
         $(".recentlyUsed").slideToggle();
    }
    function veelGebruikt(){
         $(".muchUsed").slideToggle();
       
    }

    function gedeeldMetAnderen(){
        $(".newStoryboards").slideToggle();
        $("#plus").click(add);
        function add(){
            $(".newStoryboards").append("<div id='testSpecial'><a><Strong>CP2</Strong></a><a>Introduction</a><a>15/03</a></div>");  
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
