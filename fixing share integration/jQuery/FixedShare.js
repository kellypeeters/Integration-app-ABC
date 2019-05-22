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
    $("#plus").click(add);
    $("#minus").click(remove);
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
    }
    
        
        function add(){
            $(".newStoryboards").append("<div id='testSpecial'><a><Strong>CP2</Strong></a><a>Introduction</a><a>15/03</a></div>");  
            console.log(add);
        }
        
       
        function remove(){
            function removeElement(storyboard) {
                storyboard.parentNode.removeChild(storyboard);
            }
            removeElement(document.getElementById("testSpecial"));
            console.log(remove);
        }
    });

