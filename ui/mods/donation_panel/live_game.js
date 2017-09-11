(function() {
  var paths = require.s.contexts._.config.paths
  paths.donation_panel = 'coui://ui/mods/donation_panel'
  paths.donation_data = 'coui://ui/mods/donation_data'
  paths.sandbox_unit_menu = 'coui://ui/mods/sandbox_unit_menu'

  handlers.request_player_names = function(payload) {
    if (model.playerData) {
      api.Panel.message(payload[0], payload[1],
        model.playerData().names)
    }
    api.panels.options_bar && 
      api.panels.options_bar.message('donation_panel_loading', false)
  }
  handlers.request_planet_names = function(payload) {
    if (model.celestialViewModels) {
      api.Panel.message(payload[0], payload[1],
        model.celestialViewModels().map(function(planet) {return planet.name()}))
    }
  }
})()

require(['donation_panel/panel'], function(panel) {
  panel.show()

  if (model.cheatAllowCreateUnit) {
    api.Panel.message('donation_panel', 'cheat_allow_create_unit', model.cheatAllowCreateUnit())
    model.cheatAllowCreateUnit.subscribe(function(value) {
      api.Panel.message('donation_panel', 'cheat_allow_create_unit', value)
    })
  }

  if (model.playerData) {
    model.playerData.subscribe(function(value) {
      api.Panel.message('donation_panel', 'player_names', value.names)
    })
  }
  if (model.celestialViewModels) {
    model.celestialViewModels.subscribe(function(value) {
      api.Panel.message('donation_panel', 'planet_names',
        value.map(function(planet) {return planet.name()}))
    })
  }
})
