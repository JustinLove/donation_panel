(function() {
  var paths = require.s.contexts._.config.paths
  paths.donation_panel = 'coui://ui/mods/donation_panel'
  paths.sandbox_unit_menu = 'coui://ui/mods/sandbox_unit_menu'
})()

require(['donation_panel/feed', 'donation_panel/panel'], function(feed, panel) {
  setTimeout(function() {
    feed.testUpdate().then(function(donors) {
      donors.forEach(function(item) {
        console.log(item)
      })
    })
  }, 1000)

  panel()
})
