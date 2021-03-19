// let ul = $('ul.task-list');

$('form').on('click', 'input[type=submit]', function(e) {
    e.preventDefault();
    
    let task = $('input[type=text]').val();
    

    if (task.length > 0) {


        $('ul.task-list').append('<li><input type=checkbox><p>' + task + '</p><img src="close.png" alt="close"></li>')
        $('input[type=text]').val('');
    }

    $(function (){
            $('input[type=checkbox]').click(function(){
                $(this).parent('li').remove();
            });
        
        });

        
})


// $('ul.task-list').append('<li><input type=checkbox>' + task + '</li>')
//         $('input[type=text]').val('');

// $('.hover-edit-menu').on('click', '.remove-button', function(){
//     var elem = $(this).closest('.item', '.todo-list');
//     localStorage.removeItem("taskId_" + elem.attr("data-item"));
//     elem.remove();
// });	