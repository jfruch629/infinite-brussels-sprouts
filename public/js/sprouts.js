let pageNumber = 2;
$('.more-sprouts').on('click', (event) => {
  event.preventDefault()

  let request = $.ajax({
    method: 'GET',
    url: '/tweets.json?page=' + pageNumber
  });

pageNumber++;

  request.done((data) => {
    data.forEach(function(tweet) {
      $('.tweets').append("<li class='tweet'> <div class='body'>" + tweet['text'] +  "</div><div class='user'>" + tweet['username'] + "</div></li>")
    });
  });
});
