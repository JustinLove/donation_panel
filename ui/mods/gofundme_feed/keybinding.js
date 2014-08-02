action_sets.hacks['next donation order'] = function () {
  console.log(api.panels)
  api.panels.gofundme_feed && api.panels.gofundme_feed.message('execute_next')
}
default_keybinds.hacks['next donation order'] = 'alt+n'
