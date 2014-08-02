(function() {
  _.extend(api.settings.definitions.ui.settings, {
    gofundme_feed: {
      title: 'GoFundMe Feed',
      type: 'select',
      options: ['AbleGamers', 'Test'],
      default: 'Test'
    }
  })

  // force model.settingsLists to update
  model.settingDefinitions(api.settings.definitions)
})()

