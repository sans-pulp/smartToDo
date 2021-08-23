$(document).ready(function() {
  $("#movies-search").on('input', function() {
    //this gets the configuration to set the base_url for poster_path...
    // $.get(`https://api.themoviedb.org/3/configuration?api_key=e6b6ba40dc45cede536cb541a2b35eab`, function(data) {
    //   console.log(data);
    // })
    // target text in search box, pass that into API as query term...
    $('#movie-res').empty();
    let input = $(this).val();
    console.log(input.length);
    //Idea: Convert AJAX req into a promise, use .then to access data to store in db...
    if (input.length >= 4) {
      $.get(`https://api.themoviedb.org/3/configuration?api_key=e6b6ba40dc45cede536cb541a2b35eab`, function(data) {
        console.log(data);
      });
      $.get(`https://api.themoviedb.org/3/search/multi?api_key=e6b6ba40dc45cede536cb541a2b35eab&query=${input}`, function(data) {
        console.log('API call:');
      })
        .then(data => {
          const dataArr = data.results;
          for (let i = 0; i < 2; i++) {
            console.log(dataArr[i]);
            //slight issue, some movies/tv shows do not have a title but have a name or original_title, how do i select which one is not undefined??? --> has to do with mediatype => Movies usually have a title, while tv shows have a name!
            if (dataArr[i].media_type === 'movie') {
              $('#movie-res').prepend(`<li> Title: ${dataArr[i].title}</li> <img src=https://image.tmdb.org/t/p/w154${dataArr[i].poster_path}>`);
            } else {
              $('#movie-res').prepend(`<li> Title: ${dataArr[i].name}</li> <img src=https://image.tmdb.org/t/p/w154${dataArr[i].poster_path}>`);
            }
          }
          // store stuff in db from here? --> ON Click!
        });
    }
  });
  // Need to write query to store data in db -- CREATED fake table (books_api)
});


