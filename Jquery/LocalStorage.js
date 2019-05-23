$(document).ready(function () {
    var button = $('.add-item');
    var input = $('.input-field1');
    var input1 = $('.input-field2');
    var input2 = $('.input-field3');
    var input3 = $('.input-field4');

    var list = $('.list');
    if (localStorage.getItem('user-input')) {
        $list.html(localStorage.getItem('user-input'));
    }
   
    $button.on('click', function () {

        $list.append('<li>' + input.val() + input1.val() + input2.val() + input3.val() ); 
        
        console.log('.list');

        localStorage.setItem('user-input', );

        $input.val('');

    });

    $('.Aanmeldbutton').on('click', function () {
        console.log('update');
        localStorage.setItem('user-input', list.html());
    });
});  