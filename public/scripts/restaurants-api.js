$(() => {
  $('#search').on('click', '.item-input', function() {
        let $restaurantList = [];

  $("#food-search").on('input', function() {
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://resy.p.rapidapi.com/4/find?lat=37.788719679657554&long=-122.40057774847898&day=2021-02-14&party_size=2&offset=0",
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "resy.p.rapidapi.com",
        "x-rapidapi-key": "06ba316887mshafb6d25264be89cp171583jsn6033b1af5d8a"
      }
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  })
})
});
