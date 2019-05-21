//dropdown legende

$(function () {
    console.log("Script linked");

    $(document).ready(function () {
        $('.kennisverwerking').click(function () {
            $(this).toggleClass("animate-listitem");
            $('.dropdown-legende-kennisverwerking').slideToggle();
            $('.fa-caret-down')
        });

        $('.samenwerking').click(function () {
            $(this).toggleClass("animate-listitem");
            $('.dropdown-legende-samenwerking').slideToggle();
        });

        $('.discussie').click(function () {
            $(this).toggleClass("animate-listitem");
            $('.dropdown-legende-discussie').slideToggle();
        });

        $('.onderzoek').click(function () {
            $(this).toggleClass("animate-listitem");
            $('.dropdown-legende-onderzoek').slideToggle();
        });

        $('.praktijk').click(function () {
            $(this).toggleClass("animate-listitem");
            $('.dropdown-legende-praktijk').slideToggle();
        });
        $('.productie').click(function () {
            $(this).toggleClass("animate-listitem");
            $('.dropdown-legende-productie').slideToggle();
        });
        $("div").click(function () {
//        console.log($(this));
            $(this).appendTo("body");
        });
    });


});