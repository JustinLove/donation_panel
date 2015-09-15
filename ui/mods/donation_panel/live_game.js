(function() {
  var paths = require.s.contexts._.config.paths
  paths.donation_panel = 'coui://ui/mods/donation_panel'
  paths.sandbox_unit_menu = 'coui://ui/mods/sandbox_unit_menu'

  handlers.request_player_names = function(payload) {
    api.Panel.message(payload[0], payload[1], model.playerData().names)
  }
})()

require(['donation_panel/panel'], function(panel) {
  panel()

  api.Panel.message('donation_panel', 'cheat_allow_create_unit', model.cheatAllowCreateUnit())
  model.cheatAllowCreateUnit.subscribe(function(value) {
    api.Panel.message('donation_panel', 'cheat_allow_create_unit', value)
  })

  model.playerData.subscribe(function(value) {
    api.Panel.message('donation_panel', 'player_names', value.names)
  })

})