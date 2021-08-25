$(document).ready(function() {

  $('#search').on('click', '.item-input', function() {

    $("#food-search").on('input', function() {
      console.log("KKSSKDSKDN")
      // target text in search box, pass that into API as query term...
      let input = $(this).val();

    });
  });
});

