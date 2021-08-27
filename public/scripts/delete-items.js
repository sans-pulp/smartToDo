$(() => {
  //delete tv show
  $('#todo-list').on('click', '#del-btn-tv' , function() {
    const id = $(this).find('.itemId').val();
    $.ajax({
      url: `/api/movies/${id}`,
      type: 'DELETE',
      success: function() {
        Swal.fire({
          icon: 'error',
          title: 'TV Show Deleted',
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false
        })
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
        Swal.fire({
          icon: 'error',
          title: 'Movie Deleted',
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false
        })
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
        Swal.fire({
          icon: 'error',
          title: 'Book Deleted',
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false
        })
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
        Swal.fire({
          icon: 'error',
          title: 'Restaurant Deleted',
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false
        })
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
        Swal.fire({
          icon: 'error',
          title: 'Product Deleted',
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false
        })
        window.location = "/";
      }
    });
  });
});
