$(document).ready(function() {
  let $restaurantList = [];
  $('#search').on('click', '.item-input', function() {

    $("#food-search").on('input', function() {
      // target text in search box, pass that into API as query term...
      $('#food-res').empty();
      let input = $(this).val();
      if (input.length >= 4) {

        let queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";
        const apiKey = 'Kua6xMJhPX_UJEI9cdrZY7lbnN55KqOQi-1qTcVFgPZ-8ID2j2l871f0dBestqcgfNvicFnkmf0c4M1t8tJ9lP2OpwS9EbA5k7NEB5ksUqyUTw0CQb52CdOtC4klYXYx'; //Add your key here

        $.ajax({
          url: queryURL,
          method: "GET",
          headers: {
            "accept": "application/json",
            "x-requested-with": "xmlhttprequest",
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${apiKey}`
          },
          data: {
            term: `${input}`,
            location: 'Toronto'
          }
        }).then(data => {
          console.log(data);
          const dataArr = data.businesses;
          $restaurantList = data.businesses;

          for (let i = 0; i < 4; i++) {
            $('#food-res').append(`<li data-id="${i}"> <p>Name: ${dataArr[i].name}</p> <p>Location: ${dataArr[i].location.address1}, ${dataArr[i].location.city}, ${dataArr[i].location.state} </p> <p>Phone #: ${dataArr[i].phone}</p> <p>Rating: ${dataArr[i].rating}</p> <img src=${dataArr[i].image_url} /> <button> Select this </button> </li>`)

          }
        });
      }
    });
    $('#food-res').on('click', 'li', function() {
      let dataSelected = $(this).attr("data-id");
      console.log('______', dataSelected);
      const restaurantInfo = $restaurantList[dataSelected];
      console.log('++++', restaurantInfo);
      const userId = $("#userid").val();
      console.log('userId', userId);
      const restObj = { user: userId, name: restaurantInfo.name, address: restaurantInfo.location.address1 || null, city: restaurantInfo.location.city, image: restaurantInfo.image_url, rating: restaurantInfo.rating, type: "restaurant" };
      console.log('movieObj', movieObj);
      $.post("/api/movies/new", movieObj)
        .done((data) => {
          console.log(data);
          alert("Movie/Show added!");
          window.location = "/";
        });
    });
  });
});

