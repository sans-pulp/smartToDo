$(document).ready(function() {
  let $restaurantList = [];
  $('#search').on('click', '.item-input', function() {

    $("#food-search").on('input', function() {
      console.log("KKSSKDSKDN")
      // target text in search box, pass that into API as query term...
      $('#food-res').empty();
      let input = $(this).val();
      if (input.length >= 4) {

        let queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";
         //Add your key here

        $.ajax({
          url: queryURL,
          method: "GET",
          headers: {
            "accept": "application/json",
            "x-requested-with": "xmlhttprequest",
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${config.restaurantApiKey}`
          },
          data: {
            term: `${input}`,
            location: 'Toronto',
            sort_by: 'rating',
            limit: 5
          }
        }).then(data => {
          console.log(data);
          const dataArr = data.businesses;
          $restaurantList = data.businesses;

          for (let i = 0; i < 4; i++) {
            $('#food-res').append(`<li data-id="${i}"> <p>Name: ${dataArr[i].name}</p> <p>Location: ${dataArr[i].location.address1}, ${dataArr[i].location.city}, ${dataArr[i].location.state} </p> <p>Phone #: ${dataArr[i].phone}</p> <p>Rating: ${dataArr[i].rating}</p> <img src=${dataArr[i].image_url} width="150"/> <button> Select this </button> </li>`)

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
      console.log('restObj', restObj);
      $.post("/api/restaurants/new", restObj)
        .done((data) => {
          console.log(data);
          alert("Restaurant added!");
          window.location = "/";
        });
    });
  });
});

