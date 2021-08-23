$(document).ready(function() {
  const myKey = 'AIzaSyAK1_0cYdihfjuAf_yQdIzt2WY80wQsFLw';

  $("#food-search").on('input', function() {
    // target text in search box, pass that into API as query term...
    let input = $(this).val();
    $.ajax({
      url: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json
      ?input=Museum of Contemporary Art Australia
      &inputtype=textquery
      &fields=formatted_address,name,rating,opening_hours,geometry
      &key=${myKey}`,
      type: 'GET',
      headers: {
        "accept": "application/json",
        "Access-Control-Allow-Origin":"*"
     },
      success: function(data) {
        console.log("success", data);
      },
      error: function(xhr, textStatus, errorThrown) {
        console.log('Error in Operation');
      }
    }).then(res => {
      console.log('Result:', res);
    })
  });
});
