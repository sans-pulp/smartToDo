$(document).ready(function () {

  let whichList = document.getElementById('which-list');
  $('.list-button').click(function(){
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
      }
    });
});
