define([
  'donation_panel/donation_config/parse',
  'donation_panel/config',
], function(parse, config) {
  var local = "http://localhost:5100/donations"
  var donations = local

  var query = ""
  if (config.current_match()) {
    "?untagged=true&game=" + config.current_match()
  }

  var update = function(url) {
    return $.ajax({
      method: 'GET',
      url: (url || donations) + query,
      dataType: 'json',
    }).then(parse.process)
  }

  return {
    donations: donations,
    update: update,
    process: parse.process,
  }
})
