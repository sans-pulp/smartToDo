$(() => {
  let $productList = [];
  $('#search').on('click', '.item-input', function() {

    $("#product-search").on('input', function() {
      // target text in search box, pass that into API as query term...
      $('#product-res').empty();
      let input = $(this).val();
      if (input.length > 5) {
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

        $.ajax(settings)
          .then(data => {
            const dataArr = data.result;
            $productList = data.result;
            console.log(dataArr);
            for (let i = 0; i < 4; i++) {
              //dynamically show search results on page
              $('#product-res').append(`
              <li data-id="${i}" class="search-result"> <div class="left"> <p class="title text-1">${dataArr[i].title}</p> <p class="price text-2">$${dataArr[i].price.current_price}</p></div> <div class="right"><img class="item-img" src=${dataArr[i].thumbnail} /></div></li>`);
            }
          });
      }
    });
    $('#product-res').on('click', 'li', function() {
      let chosenItem = $(this).attr("data-id");
      console.log('______', chosenItem);
      const productInfo = $productList[chosenItem];
      console.log('++++', productInfo);
      const userId = $("#userid").val();
      console.log('userId', userId);
      const productObj = { user: userId, title: productInfo.title, price: productInfo.price.current_price, image: productInfo.thumbnail, rating: productInfo.reviews.rating, url: productInfo.url || null, type: "product" };
      console.log('productObj', productObj);
      $.post("/api/products/new", productObj)
        .done((data) => {
          console.log(data);
          Swal.fire({
            title: 'Product Added',
            text: "Time to go shopping!",
            timer: 2000,
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false
          })
          window.location = "/";
        });
    })

  });
});
