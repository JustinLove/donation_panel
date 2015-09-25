define([
  'donation_panel/tiltify/parse',
  'donation_panel/config',
], function(parse, config) {
  var donations = "https://tiltify.com/api/v2/campaign/donations"

  var update = function(url) {
    return $.ajax({
      method: 'GET',
      url: url || donations,
      dataType: 'json',
      headers: {
        'Authorization': 'Token token="' + config.api_key() + '"',
      },
    }).then(parse.process)
  }

  return {
    donations: donations,
    update: update,
    process: parse.process,
  }
})
