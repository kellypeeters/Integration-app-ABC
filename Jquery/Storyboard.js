//dropdown legende

$(function () {
    console.log("Script linked");

    $(document).ready(function () {
        $('.kennisverwerking').click(function () {
            $(this).toggleClass("animate");
            $('.dropdown-legende-kennisverwerking').slideToggle();
        });

        $('.samenwerking').click(function () {
            $(this).toggleClass("animate");
            $('.dropdown-legende-samenwerking').slideToggle();
        });

        $('.discussie').click(function () {
            $(this).toggleClass("animate");
            $('.dropdown-legende-discussie').slideToggle();
        });

        $('.onderzoek').click(function () {
            $(this).toggleClass("animate");
            $('.dropdown-legende-onderzoek').slideToggle();
        });

        $('.praktijk').click(function () {
            $(this).toggleClass("animate");
            $('.dropdown-legende-praktijk').slideToggle();
        });
        $('.productie').click(function () {
            $(this).toggleClass("animate");
            $('.dropdown-legende-productie').slideToggle();
        });
        $('.btn_vak_dropdown').click(function () {
            $(this).toggleClass("animate");
            $('.container_create_storyboard').slideToggle();
        });
    });

    });

