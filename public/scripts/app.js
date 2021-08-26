$(() => {
  console.log('app.js');

  $('.login')
    .click(event => {
      event.preventDefault();
      $('#form-container').empty();
      //generate login form, add it to the form-container element
      $('#form-container').append(`
      <div class="p-5 m-5 border rounded-3" id="login-form">
      <h1>Login</h1>
      <form action="/login" method="POST">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" name="email" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" name="password" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>  </form>
      </div>
      `);
    });

  $('.register')
    .click(event => {
      event.preventDefault();
      $('#form-container').empty();
      $('#form-container').append(`
      <div class="p-5 m-5 border rounded-3" id="register-form">
      <h1>Registration Form</h1>
      <form action="/register" method="POST">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" name="name" required/>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email Address</label>
        <input type="email" class="form-control" name="email" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" name="password" required/>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
      `);
    });

  //Complete Book
  // $('#todo-list').on('click', '#complete-book' , function() {
  //   const id = $(this).find('.itemId').val();
  //   $.ajax({
  //     url: `/api/books/${id}`,
  //     type: 'POST',
  //     success: function(res) {
  //       alert('Movie Deleted!');

  //     }
  //   });
  // }


});
