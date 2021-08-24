$(() => {
  $("#book-search").on('input', function() {
    // target text in search box, pass that into API as query term...
    let bookchoice;
    //create fnc to pass in obj and assigns the obj to the var to store the selected book
    const selectBook = obj => {
      bookchoice = obj;
      // return bookchoice;
    };
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
          const clickyFnc = (i, obj) => {
            selectBook(obj[i]);
          }
          for (let i = 0; i < 2; i++) {
            console.log('volInfo', dataArr[i].volumeInfo);
            $('#book-res').append(`<li id="book${i + 1}"><button onclick="clickyFnc(i, dataArr)()" > Title: ${dataArr[i].volumeInfo.title}, Author: ${dataArr[i].volumeInfo.authors} <img src=${dataArr[i].volumeInfo.imageLinks.thumbnail}> </button> </li> `);
          }
          return bookchoice;

          
          // create form with checkbox options
          //options are search results
          //once form is populated by for loop, query form to access values checked
          //extract values (array), map them to values in dataArray to get corresponding values (based on index)
          // send form data to db...

        })
        .then((bookchoice) => {
          console.log('api data', bookchoice);
          //create var to store selected book


          //fnc to post to server
          const createBook = bookObj => {
            const query = `INSERT INTO books_api (title, author, publisher, image_thumbnail) VALUES ($1, $2, $3, $4) RETURNING *`;
            const values = [bookObj.title, bookObj.authors[0], bookObj.publisher, bookObj.imageLinks.thumbnail];
            return db.query(query, values);
          };

          //$('#book')

          // if i want the user to be able to select/click one of the li's to send the data into the db, how would I go about it?
        //how would I get this data sent into the db? is it a post req?
        });
    }
  });
  // Need to write query to store data in db -- CREATED fake table (books_api)
  /**/
});

/* stuff to store from books api -- all under volumeInfo
- title
- authors[0] - first author
- publisher
// - categories[0] -- first category
- imageLinks.thumbnail
  - get default image in case imageLinks.thumbnail does not exist
*/

