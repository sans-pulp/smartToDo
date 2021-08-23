$(document).ready(function() {
  $("#book-search").on('input', function() {
    // target text in search box, pass that into API as query term...
    let input = $(this).val();
    console.log(input);
    $.ajax({
      url: `https://www.googleapis.com/books/v1/volumes?q=${input}`,
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        $('#api-res-1').val(data.items[0].volumeInfo.title);
        $('#api-res-2').val(data.items[1].volumeInfo.title);
        //$('#api-response').val(data.items[1].volumeInfo.title);

        // console.log("1.", data.items[0].volumeInfo.title);
        // console.log("2.", data.items[1].volumeInfo.title);
        // console.log("3.", data.items[2].volumeInfo.title);
        // console.log("4.", data.items[3].volumeInfo.title);
        // console.log("5.", data.items[4].volumeInfo.title);
        // console.log("6.", data.items[5].volumeInfo.title);
        console.log("2", data.items[1].volumeInfo);

      },
      error: function(error) {
        console.log('Error in Operation', error);
      }
    });
  });
});

/* stuff to store from books api -- all under volumeInfo
- title
- authors[0] - first author
- publisher
- categories[0] -- first category
- imageLinks.thumbnail
  - get default image in case imageLinks.thumbnail does not exist
*/

