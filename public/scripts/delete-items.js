$(() => {
  $('#todo-list').on('click', '#del-btn' , function() {
    const id = $(this).find('.itemId').val();
    console.log($(this));
    console.log(id);
    // const id = $('#todo-list').find("#itemId").val();
    $.ajax({
      url: `/api/movies/${id}`,
      type: 'DELETE',
      success: function(res) {
        alert('Deleted!');
        window.location = "/"
      }
    });
  });

});
