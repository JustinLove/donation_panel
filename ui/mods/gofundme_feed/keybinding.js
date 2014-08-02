action_sets.hacks['next donation order'] = function () {
  api.panels.gofundme_feed && api.panels.gofundme_feed.message('execute_next')
}
default_keybinds.hacks['next donation order'] = 'alt+n'

action_sets.hacks['update feed'] = function () {
  api.panels.gofundme_feed && api.panels.gofundme_feed.message('update_feed')
}
default_keybinds.hacks['update feed'] = 'alt+u'
