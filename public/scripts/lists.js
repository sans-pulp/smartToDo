$(document).ready(function() {

  const userId = $("#userid").val();

  //POPULATE TO DO LIST

  const populateList = function(pathString) {
    $('#todo-list').empty();
    $.get(pathString)
      .then(items => {
        items.forEach(item => {
          $('#todo-list').append(
            `<li class="list-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
           width="50"
          height="50"
           fill="currentColor"
           class="bi bi-check-circle completed-button"
           viewBox="0 0 16 16"
           >
           <path
           d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
           />
          <path
            d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
           />
         </svg>
        <div class="item-text">
           <h4>${item.title}</h4>
          <p>${item.author || item.media_type}</p>
        </div>
        <img src='${item.image_thumbnail}'>
        <div class="hover-buttons">
           <button class="switch-btn">
             <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16" >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
               />
            </svg>
           </button>
          <button id="del-btn-${item.media_type || 'book'}">
          <input type="hidden" value="${item.id}" name="itemId" class="itemId">
            <svg
               xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
               fill="currentColor"
              class="bi bi-trash"
               viewBox="0 0 16 16"
             >
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
               />
              <path
                 fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </button>
        </div>
       </li>`
          );
        });
      });
  };

  let whichList = document.getElementById('which-list');
  $('.list-button').click(function() {
    $('.list-button').removeClass('active').addClass('inactive');
    $(this).removeClass('inactive').addClass('active');
    if ($(this).hasClass('books') && $(this).hasClass('active')) {
      $('#search').empty();
      $('#search').append(`
      <div class="books item-input">
        <input id="book-search" type="text" placeholder="Enter a book title" />
          <ul id="book-res">
      <!-- append li children once API req is done -->
          </ul>
      </div>`
      );
      $('.item-input').css("visibility", "hidden");
      $('div.books').css("visibility", "visible");
      whichList.innerHTML = "My Books";
      populateList(`/api/books/${userId}`);
    }
    if ($(this).hasClass('movies') && $(this).hasClass('active')) {
      $('#search').empty();
      $('#search').append(`
      <div class="movies item-input">
        <input id="movies-search" type="text" placeholder="Enter a movie title" />
          <ul id="movie-res">
      <!-- append li children once API req is done -->
          </ul>
      </div>
      `);
      $('.item-input').css("visibility", "hidden");
      $('div.movies').css("visibility", "visible");
      whichList.innerHTML = "My Movies";
      populateList(`/api/movies/${userId}`);
    }
    if ($(this).hasClass('food') && $(this).hasClass('active')) {
      $('#search').empty();
      $('#search').append(`
      <div class="food item-input">
        <input id="food-search" type="text" placeholder="Enter a restaurant name" />
          <ul id="food-res">
      <!-- append li children once API req is done -->
          </ul>
      </div>
      `);
      $('.item-input').css("visibility", "hidden");
      $('div.food').css("visibility", "visible");
      whichList.innerHTML = "My Restaurants";
      populateList(`/api/restaurants/${userId}`);
    }
    if ($(this).hasClass('products') && $(this).hasClass('active')) {
      $('#search').empty();
      $('#search').append(`
      <div class="products item-input">
        <input id="product-search" type="text" placeholder="Enter an item" />
          <ul id="product-res">
      <!-- append li children once API req is done -->
          </ul>
      </div>
      `);
      $('.item-input').css("visibility", "hidden");
      $('div.products').css("visibility", "visible");
      whichList.innerHTML = "My Shopping List";
      populateList(`/api/products/${userId}`);
    }
  });
});
