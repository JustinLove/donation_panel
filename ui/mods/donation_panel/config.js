define(function() {
  var feed = function() {
    return api.settings.isSet('ui', 'donation_panel_feed', true) || 'donordrive_test'
  }
  var api_key = function() {
    return api.settings.isSet('ui', 'donation_panel_api_key', true) || ''
  }
  var match_tags = function() {
    return (api.settings.isSet('ui', 'donation_panel_match_tags', true) || '').split(/\s*,\s*/)
  }
  var current_match = function() {
    return api.settings.isSet('ui', 'donation_panel_current_match', true) || ''
  }
  return {
    name: feed,
    feed: feed,
    api_key: api_key,
    match_tags: match_tags,
    current_match: current_match,
  }
})
