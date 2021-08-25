$(() => {
  console.log('app.js');
  $.ajax({
    method: "GET",
    url: "/user",
    xhrFields:{withCredentials: true}
  }).done((data) => {
    console.log('data', data);
    const username = data.name;
      $("<div>").text(username).appendTo($("body"));

  });

});
