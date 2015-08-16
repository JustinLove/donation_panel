(function() {
  var donation_panel_settings = {
    donation_panel_feed: {
      title: 'Donation Feed',
      type: 'select',
      options: ['AbleGamers', 'Test'],
      default: 'Test'
    }
  }

  _.extend(api.settings.definitions.ui.settings, donation_panel_settings)

  // force model.settingsLists to update
  model.settingDefinitions(api.settings.definitions)

  var $group = $('<div class="sub-group"></div>').appendTo('.option-list.ui .form-group')
  $group.append('<div class="sub-group-title">Donation Panel</div>')

  var $template = $('script#setting-template')
  $group.append($template[0].outerHTML.replace('setting-template', 'donation-panel-setting-template').replace('hide', 'show'))

  Object.keys(donation_panel_settings).forEach(function(setting) {
    $group.append('<div class="option" data-bind="template: { name: \'donation-panel-setting-template\', data: $root.settingsItemMap()[\'ui.' + setting + '\'] }"></div>')
  })
})()
