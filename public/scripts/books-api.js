$(document).ready(function() {
  $("#book-search").on('input', function() {
    // target text in search box, pass that into API as query term...
    let input = $(this).val();
    console.log(input);
    //Idea: Convert AJAX req into a promise, use .then to access data to store in db...
    $.get(`https://www.googleapis.com/books/v1/volumes?q=${input}`, function(data) {
      const first = data.items[0].volumeInfo.title;
      return first;
    })
      .then(data => {
        const dataArr = data.items;
        for (let i = 0; i < 3; i++) {
          console.log(dataArr[i].volumeInfo.title);
          $('#api-res').append(`<li>${dataArr[i].volumeInfo.title}</li>`);
        }
        for (item of dataArr) {
          console.log('Title:', item.volumeInfo.title, 'Author:', item.volumeInfo.authors, 'Image:', item.volumeInfo.imageLinks)
          //get elementById (api-response)
        }
        //set list items to 0
        //console.log(data.items);
      });

    // $.ajax({
    //   url: `https://www.googleapis.com/books/v1/volumes?q=${input}`,
    //   type: 'GET',
    //   dataType: 'json',
    //   success: function(data) {
    //     $('#api-res-1').val(data.items[0].volumeInfo.title);
    //     $('#api-res-2').html(data.items[1].volumeInfo.title);
    //     //$('#api-response').val(data.items[1].volumeInfo.title);

    //     // console.log("1.", data.items[0].volumeInfo.title);
    //     // console.log("2.", data.items[1].volumeInfo.title);
    //     // console.log("3.", data.items[2].volumeInfo.title);
    //     // console.log("4.", data.items[3].volumeInfo.title);
    //     // console.log("5.", data.items[4].volumeInfo.title);
    //     // console.log("6.", data.items[5].volumeInfo.title);
    //     console.log("2", data.items[1].volumeInfo);
    //     const response = { "first": data.items[0].volumeInfo, "second": data.items[1].volumeInfo, "third": data.items[2].volumeInfo };
    //     return response;
    //   },
    //   error: function(error) {
    //     console.log('Error in Operation', error);
    //   }
    // })
    //   .then(response => {
    //     console.log(response);
    //   });
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

