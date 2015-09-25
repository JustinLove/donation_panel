define(['donation_panel/tiltify/parse'], function(parse) {
  var donations = "https://tiltify.com/api_test/v2/campaign/donations"

  var update = function(url) {
    return $.ajax({
      method: 'GET',
      url: url || donations,
      dataType: 'json',
      headers: {
        'Authorization': 'Token token="test_479c924413fe9168952891e9a36"',
      },
    }).then(parse.process)
  }

  return {
    donations: donations,
    update: update,
    process: parse.process,
  }
})
