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
            <button class=" btn complete-${item.media_type || item.type || 'book'}">
            <input type="hidden" value="${item.id}" name="itemId" class="itemId">
            <i class="bi bi-check-circle completed-button"></i>
            </button>

         <div class="item-content">
        <div class="item-text">
           <p class="text-1">${item.title || item.name}</p>
          <p class ="text-2">${item.author || item.media_type || item.address || item.price }</p>
        </div>
        <img src='${item.image_thumbnail}' width="100px">
        </div>
        <div class="hover-buttons">
        <button id="del-btn-${item.media_type || item.type || 'book'}">
          <input type="hidden" value="${item.id}" name="itemId" class="itemId">
          <i class="bi bi-trash"></i>
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
      whichList.innerHTML = "My Movies & Shows";
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
