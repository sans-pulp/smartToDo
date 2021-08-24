$(() => {
  $('#search').on('click', '.item-input', function() {

    let $bookList = [];
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
            //console.log('dataArr', dataArr);
            $bookList = data.items;
            for (let i = 0; i < 5; i++) {

              $('#book-res').append(`<li data-id="${i}" id="book${i + 1}"><p class="title">Title: ${dataArr[i].volumeInfo.title}</p><p class="author">Author(s): ${dataArr[i].volumeInfo.authors}</p><img class="thumbnail" src=${dataArr[i].volumeInfo.imageLinks.thumbnail} /><button>Select this</button></li> `);
            }

          });

      }
    });

    $('#book-res').on('click', 'li', function() {
      //how would I access dataArr[i] when i click the Select this button?
      // onclick i want to do selectBook(dataArr[i])
      // Do something on an existent or future .dynamicElement

      let dataSelected = $(this).attr("data-id");
      console.log('______', dataSelected);
      const bookInfo = $bookList[dataSelected];
      console.log('++++', bookInfo);
      const userId = $("#userid").val();
      console.log('userId', userId);
      const bookObj = { user: userId, title: bookInfo.volumeInfo.title, author: bookInfo.volumeInfo.authors[0], publisher: bookInfo.volumeInfo.publisher, image: bookInfo.volumeInfo.imageLinks.thumbnail };
      console.log(bookObj);
      $.post("/api/books/new", bookObj)
        .done(function(data) {
          alert("Book added" + data);
          window.location = "/";
      });

    });

  })

});

// Need to write query to store data in db -- CREATED fake table (books_api)
/**/
//fnc to post to server
const createBook = bookObj => {
  const query = `INSERT INTO books_api (user_id, title, author, publisher, image_thumbnail) VALUES ($1, $2, $3, $4) RETURNING *`;
  //retrieve user_id from cookie!!
  const values = [bookObj.user, bookObj.title, bookObj.authors[0], bookObj.publisher, bookObj.imageLinks.thumbnail];
  return db.query(query, values);
};
/* stuff to store from books api -- all under volumeInfo
- title
- authors[0] - first author
- publisher
- imageLinks.thumbnail
  - get default image in case imageLinks.thumbnail does not exist
*/

