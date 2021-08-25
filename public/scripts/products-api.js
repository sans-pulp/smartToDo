
$(() => {
  $('#search').on('click', '.item-input', function() {
    let $productList = [];
    $("#product-search").on('input', function() {

      // target text in search box, pass that into API as query term...
      $('#product-res').empty();
      let input = $(this).val();
      console.log(input.length);
      //Idea: Convert AJAX req into a promise, use .then todata to store in db...
      if (input.length > 4) {
        //Make Request-->
        const settings = {
          "async": true,
          "crossDomain": true,
          "url": `https://amazon23.p.rapidapi.com/product-search?query=${input}&country=CA`,
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "amazon23.p.rapidapi.com",
            "x-rapidapi-key": `${config.rapidAPiKey}`
          }
        };

        $.ajax(settings).done(function(response) {
          console.log('api call!');
        })
          .then(data => {
            const dataArr = data.result;
            $productList = data.result;
            for (let i = 0; i < 1; i++) {
              //dynamically show search results on page
              $('#product-res').prepend(`<li data-id="${i}" id="book${i + 1}"><p class="title">${dataArr[i].title}</p><p class="price">$${dataArr[i].price.current_price}</p><img class="thumbnail" src=${dataArr[i].thumbnail} width="100px"/><button>Select this</button></li> `);
            }
          });
      }
    });

  });
});
