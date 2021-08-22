
$(document).ready(function () {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    const position = {"latitude": crd.latitude, "longitude": crd.longitude}
    return position;
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const geolocation = navigator.geolocation.getCurrentPosition(success, error, options);
  $("#food-search").on('input', function () {
      // target text in search box, pass that into API as query term...
      let input = $(this).val();
      console.log(input);
      // console.log(geolocation)
    $.ajax({
        url: `https://api.yelp.com/v3/autocomplete?text=${input}&latitude=${position.latitude}&longitude=${position.longitude}`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log("1.", data);
            console.log("2.", data);
            console.log("3.", data);
            console.log("4.", data);
            console.log("5.", data);
            console.log("6.", data);
            console.log("7", data);
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation');
        }
    });
  })
});
