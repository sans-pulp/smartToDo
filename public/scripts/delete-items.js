$(() => {
  //delete tv show
  $('#todo-list').on('click', '#del-btn-tv' , function() {
    const id = $(this).find('.itemId').val();
    //console.log($(this));
    //console.log(id);
    // const id = $('#todo-list').find("#itemId").val();
    $.ajax({
      url: `/api/movies/${id}`,
      type: 'DELETE',
      success: function(res) {
        alert('TV Show Deleted!');
        window.location = "/";
      }
    });
  });

  //delete movie
  $('#todo-list').on('click', '#del-btn-movie' , function() {
    const id = $(this).find('.itemId').val();
    //console.log($(this));
    //console.log(id);
    // const id = $('#todo-list').find("#itemId").val();
    $.ajax({
      url: `/api/movies/${id}`,
      type: 'DELETE',
      success: function(res) {
        alert('Movie Deleted!');
        window.location = "/";
      }
    });
  });


  //delete book
  $('#todo-list').on('click', '#del-btn-book' , function() {
    const id = $(this).find('.itemId').val();
    //console.log($(this));
    //console.log(id);
    // const id = $('#todo-list').find("#itemId").val();
    $.ajax({
      url: `/api/books/${id}`,
      type: 'DELETE',
      success: function(res) {
        alert('Book Deleted!');
        window.location = "/";
      }
    });
  });

  //delete restaurant
  $('#todo-list').on('click', '#del-btn-restaurant' , function() {
    const id = $(this).find('.itemId').val();
    //console.log($(this));
    //console.log(id);
    // const id = $('#todo-list').find("#itemId").val();
    $.ajax({
      url: `/api/restaurants/${id}`,
      type: 'DELETE',
      success: function(res) {
        alert('Restaurant Deleted!');
        window.location = "/";
      }
    });
  });
});
