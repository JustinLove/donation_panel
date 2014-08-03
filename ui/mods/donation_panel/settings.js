(function() {
  _.extend(api.settings.definitions.ui.settings, {
    donation_panel_feed: {
      title: 'Donation Feed',
      type: 'select',
      options: ['AbleGamers', 'Test'],
      default: 'Test'
    }
  })

  // force model.settingsLists to update
  model.settingDefinitions(api.settings.definitions)
})()

