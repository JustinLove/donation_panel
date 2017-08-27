define([
  'donation_panel/donation_config/parse',
], function(parse) {
  var local = "http://localhost:5100/donations"
  var donations = local

  var update = function(url) {
    return $.ajax({
      method: 'GET',
      url: url || donations,
      dataType: 'json',
    }).then(parse.process)
  }

  return {
    donations: donations,
    update: update,
    process: parse.process,
  }
})
