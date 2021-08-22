$(document).ready(function () {
  $("#book-search").on('input', function () {
      // target text in search box, pass that into API as query term...
      let input = $(this).val();
      console.log(input);
    $.ajax({
        url: `https://www.googleapis.com/books/v1/volumes?q=${input}`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log("1.", data.items[0].volumeInfo.title);
            console.log("2.", data.items[1].volumeInfo.title);
            console.log("3.", data.items[2].volumeInfo.title);
            console.log("4.", data.items[3].volumeInfo.title);
            console.log("5.", data.items[4].volumeInfo.title);
            console.log("6.", data.items[5].volumeInfo.title);
            console.log("7", data.items[6].volumeInfo.title);
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation');
        }
    });
  })
});
