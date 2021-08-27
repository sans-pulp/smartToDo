
$(() => {
  $('#search').on('click', '.item-input', function() {
    let $movieList = [];
    $("#movies-search").on('input', function() {
      $('#movie-res').empty();
      let input = $(this).val();
      console.log(input.length);
      //Idea: Convert AJAX req into a promise, use .then to access data to store in db...
      if (input.length >= 4) {
        //this gets the configuration to set the base_url for poster_path...
        $.get(`https://api.themoviedb.org/3/search/multi?api_key=${config.movieApiKey}&query=${input}`, function(data) {
          console.log('API call:');
        })
          .then(data => {
            const dataArr = data.results;
            $movieList = data.results;
            for (let i = 0; i < 5; i++) {
              //slight issue, some movies/tv shows do not have a title but have a name or original_title, how do i select which one is not undefined??? --> has to do with mediatype => Movies usually have a title, while tv shows have a name!
              if (dataArr[i].media_type === 'movie') {
                $('#movie-res').append(`<li data-id="${i}" class="search-result"><div class="left"><p class="text-1 title">${dataArr[i].title}</p><p class="text-2 release-date">${parseInt(dataArr[i].release_date)}</p> </div><div class="right"><img src=https://image.tmdb.org/t/p/w154${dataArr[i].poster_path} class="item-img"/> </div> </li>`);
              } else if (dataArr[i].media_type === 'tv') {
                $('#movie-res').append(`<li data-id="${i}" class="search-result"><div class="left"><p class="text-1 title">${dataArr[i].name}</p></div><div class="right"><img src=https://image.tmdb.org/t/p/w154${dataArr[i].poster_path} class="item-img"> </div> </li> `);
              }
            }
          });
      }
    });

    $('#movie-res').on('click', 'li', function() {
      let dataSelected = $(this).attr("data-id");
      console.log('______', dataSelected);
      const movieInfo = $movieList[dataSelected];
      console.log('++++', movieInfo);
      const userId = $("#userid").val();
      console.log('userId', userId);
      const movieObj = { user: userId, title: movieInfo.title || movieInfo.name, release_date: movieInfo.release_date || null, image: `https://image.tmdb.org/t/p/w154${movieInfo.poster_path}`, rating: movieInfo.vote_average, media_type: movieInfo.media_type };
      console.log('movieObj', movieObj);
      $.post("/api/movies/new", movieObj)
        .done((data) => {
          console.log(data);
          Swal.fire({
            title: 'Item Added',
            text: "And the binge-list grows..",
            timer: 2000,
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false
          })
          window.location = "/";
        });
    });
    // Need to write query to store data in db -- CREATED fake table (books_api)
  });
});

/* Data to store in db
- title (movie = title, tv = name)
- release_date
- poster_path as image_thumbnail
- vote_average as rating...
*/
