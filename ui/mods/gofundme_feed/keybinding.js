action_sets.hacks['next donation order'] = function () {
  api.Panel.message('gofundme_feed', 'execute_next')
}
default_keybinds.hacks['next donation order'] = 'alt+n'

action_sets.hacks['update feed'] = function () {
  api.Panel.message('gofundme_feed', 'update_feed')
}
default_keybinds.hacks['update feed'] = 'alt+u'
