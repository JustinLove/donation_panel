define(function() {
  var setting = function() {
    return api.settings.isSet('ui', 'donation_panel_feed', true) || 'Test'
  }
  return {
    name: function() {
      return setting()
    },
    feed: function() {
      return setting()
    }
  }
})
