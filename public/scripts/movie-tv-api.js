$(document).ready(function () {
  $("#movies-search").on('input', function () {
      // target text in search box, pass that into API as query term...
      let input = $(this).val();
      console.log(input);
    $.ajax({
        url: `https://api.themoviedb.org/3/search/multi?api_key=e6b6ba40dc45cede536cb541a2b35eab&query=${input}`,

        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log("1.", data.results[0].title);
            console.log("2.", data.results[1].title);
            console.log("3.", data.results[2].title);
            console.log("4.", data.results[3].title);
            console.log("5.", data.results[4].title);
            console.log("6.", data.results[5].title);
            console.log("7", data.results[6].title);
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation');
        }
    });
  })
});
