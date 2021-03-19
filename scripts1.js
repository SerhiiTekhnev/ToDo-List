let ul = $('ul.task-list')
$('form').on('click', 'input[type=submit]', function (e) {
    e.preventDefault();

    let task = $('input[name=add_task]').val()

    if(task.length > 0) {
        let li = $("<li>", {id: "foo", "class": "a"});
        let checkbox = $("<input>", {type: "checkbox"})
        let del = $("<span>", {class: "delete"})
        del.text('x')
        li.append(task)
        li.append(del).append(checkbox)
        // let li = '<li>' + task + '</li>'

        ul.append(li)
    }
})

