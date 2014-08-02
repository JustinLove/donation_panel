console.log('bootstrap')

var model;
var handlers = {};

(function() {
  var paths = require.s.contexts._.config.paths
  paths.sandbox_unit_menu = 'coui://ui/mods/sandbox_unit_menu'
  paths.gofundme_feed = 'coui://ui/mods/gofundme_feed'
})();

require(['gofundme_feed/feed_view'], function(feed_view) {
  "use strict";

  model = feed_view

  handlers.execute_next = model.executeNext

  // inject per scene mods
  if (scene_mod_list['missile_command'])
      loadMods(scene_mod_list['live_game_missile_command']);

  // setup send/recv messages and signals
  app.registerWithCoherent(model, handlers);

  // Activates knockout.js
  ko.applyBindings(model);

  $(model.ready)
})

