$(document).ready(function() {

  $('#search').on('click', '.item-input', function() {

    $("#food-search").on('input', function() {
      // target text in search box, pass that into API as query term...
      let input = $(this).val();

    });
  });
});

