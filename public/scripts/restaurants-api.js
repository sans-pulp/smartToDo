$(document).ready(function() {
  const myKey = 'INSERT KEY';

  function initMap() {
    const sydney = new google.maps.LatLng(-33.867, 151.195);
    infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(document.getElementById("map"), {
      center: sydney,
      zoom: 15,
    });
    const request = {
      query: "Museum of Contemporary Art Australia",
      fields: ["name", "geometry"],
    };
    service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        for (let i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
        map.setCenter(results[0].geometry.location);
      }
    });
  }

  $("#food-search").on('input', function() {
    // target text in search box, pass that into API as query term...
    // let input = $(this).val();
    // $.ajax({
    //   url: `https://api.yelp.com/v3/businesses/WavvLdfdP6g8aZTtbBQHTw`,
    //   type: 'GET',
    //   'Access-Control-Allow-Origin': 'http://localhost:8080/',
    //     'Access-Control-Allow-Methods':'GET', 'Authorization': 'Bearer GixEmjn2yx9r_eSrRV1uGJ7nC-Vzq835hv8hldXFmxG5bg2s0kHWghgrFT-MVDn30lQWkxvYgskYF58yBCZyQFxMC7ZT6wIInYAhJbdH1eTz9Aj33mc9kjZeLVUkYXYx',
    //   success: function(data) {
    //     console.log("success", data);
    //   },
    //   error: function(xhr, textStatus, errorThrown) {
    //     console.log('Error in Operation');
    //   }
    // }).then(res => {
    //   console.log('Result:', res);
    // })
    initMap();
  })
});
