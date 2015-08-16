action_sets.hacks.next_donation_order = function () {
  api.Panel.message('donation_panel', 'execute_next')
}
api.settings.definitions.keyboard.settings.next_donation_order = {
  title: 'next donation order',
  type: 'keybind',
  set: 'mods',
  display_group: 'mods',
  display_sub_group: 'donation panel',
  default: 'alt+n'
}

action_sets.hacks.update_feed = function () {
  api.Panel.message('donation_panel', 'update_feed')
}
api.settings.definitions.keyboard.settings.update_feed = {
  title: 'update feed',
  type: 'keybind',
  set: 'mods',
  display_group: 'mods',
  display_sub_group: 'donation panel',
  default: 'alt+u'
}

