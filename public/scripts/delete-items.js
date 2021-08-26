$(() => {
  //delete tv show
  $('#todo-list').on('click', '#del-btn-tv' , function() {
    const id = $(this).find('.itemId').val();
    $.ajax({
      url: `/api/movies/${id}`,
      type: 'DELETE',
      success: function() {
        alert('TV Show Deleted!');
        window.location = "/";
      }
    });
  });

  //delete movie
  $('#todo-list').on('click', '#del-btn-movie' , function() {
    const id = $(this).find('.itemId').val();
    $.ajax({
      url: `/api/movies/${id}`,
      type: 'DELETE',
      success: function() {
        alert('Movie Deleted!');
        window.location = "/";
      }
    });
  });


  //delete book
  $('#todo-list').on('click', '#del-btn-book' , function() {
    const id = $(this).find('.itemId').val();
    $.ajax({
      url: `/api/books/${id}`,
      type: 'DELETE',
      success: function() {
        alert('Book Deleted!');
        window.location = "/";
      }
    });
  });

  //delete restaurant
  $('#todo-list').on('click', '#del-btn-restaurant' , function() {
    const id = $(this).find('.itemId').val();
    $.ajax({
      url: `/api/restaurants/${id}`,
      type: 'DELETE',
      success: function() {
        alert('Restaurant Deleted!');
        window.location = "/";
      }
    });
  });

  //delete product
  $('#todo-list').on('click', '#del-btn-product' , function() {
    const id = $(this).find('.itemId').val();
    $.ajax({
      url: `/api/products/${id}`,
      type: 'DELETE',
      success: function() {
        alert('Product Deleted!');
        window.location = "/";
      }
    });
  });
});
