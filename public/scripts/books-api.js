$(document).ready(function() {
  $("#book-search").on('input', function() {
    // target text in search box, pass that into API as query term...
    $('#book-res').empty();
    let input = $(this).val();
    console.log(input.length);
    //Idea: Convert AJAX req into a promise, use .then to access data to store in db...
    if (input.length >= 4) {
      $.get(`https://www.googleapis.com/books/v1/volumes?q=${input}`, function(data) {
        console.log('API call:');
      })
        .then(data => {
          const dataArr = data.items;
          for (let i = 0; i < 2; i++) {
            console.log(dataArr[i].volumeInfo.title, dataArr[i].volumeInfo.authors);
            $('#book-res').prepend(`<li> Title: ${dataArr[i].volumeInfo.title}, Author: ${dataArr[i].volumeInfo.authors}</li> <img src=${dataArr[i].volumeInfo.imageLinks.thumbnail}>`);
          }
          // store stuff in db from here? --> ON Click!
        });
    }
  });
  // Need to write query to store data in db -- CREATED fake table (books_api)
});

/* stuff to store from books api -- all under volumeInfo
- title
- authors[0] - first author
- publisher
- categories[0] -- first category
- imageLinks.thumbnail
  - get default image in case imageLinks.thumbnail does not exist
*/

