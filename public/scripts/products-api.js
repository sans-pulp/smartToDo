
$(() => {
  $('#search').on('click', '.item-input', function() {
    function isEnglish(str) {
      return str[0].match(/[a-z]/i);
    }
    function onlyEnglish(str){
      let solution = "";
      for (let i = 0; i < str.length; i++) {
        if(str[i] === " " || isEnglish(str[i])){
          solution += str[i]
        }
      }
      return solution;
    }
        let $productList = [];
        $("#product-search").on('input', function() {
          // target text in search box, pass that into API as query term...
          $('#product-res').empty();
          setTimeout(() => {
            while ($('#product-res').length > 2){
              $('#product-res').length = 2;
            }
          }, 1000)
          let input = $(this).val();
          console.log(input.length);
          if (input.length > 3) {
          //Idea: Convert AJAX req into a promise, use .then to access data to store in db...
          const settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://rakuten_webservice-rakuten-marketplace-product-search-v1.p.rapidapi.com/services/api/Product/Search/20170426?keyword=${input}`,
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "rakuten_webservice-rakuten-marketplace-product-search-v1.p.rapidapi.com",
              "x-rapidapi-key": `${config.rapidAPiKey}`
            }
          };

          $.ajax(settings).done(function (response) {
            console.log(response);
          })
          .then(data => {
            const dataArr = data.Products;
            $productList = data.items;
            for (let i = 0; i < 2; i++) {
              if(isEnglish(dataArr[i].Product.productName)){

                //dynamically show search results on page
                $('#product-res').append(`<li data-id="${i}" id="product${i + 1}"><p class="title"> Title: ${onlyEnglish(dataArr[i].Product.productName)}<img class="thumbnail" src=${dataArr[i].Product.smallImageUrl} /><p> Price: $${dataArr[i].Product.averagePrice / 100}</p><button>Select this</button></li> `);

              }
            }

          });
        };
          });
});
});
