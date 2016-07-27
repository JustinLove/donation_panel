define(function() {
  var feed = function() {
    return api.settings.isSet('ui', 'donation_panel_feed', true) || 'donordrive_test'
  }
  var api_key = function() {
    return api.settings.isSet('ui', 'donation_panel_api_key', true) || ''
  }
  return {
    name: feed,
    feed: feed,
    api_key: api_key,
  }
})
