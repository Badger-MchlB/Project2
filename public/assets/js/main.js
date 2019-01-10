$(document).on('click', '.devour-btn', function(){ 
    var noteId = $(this).attr('data-id')
    $.ajax({
        method: 'PUT',
        url: '/api/notes/'+ noteId,
        data: {devoured : 1}
    }).then( response => {
        console.log(response)
        window.location = "/"
    })
  })

