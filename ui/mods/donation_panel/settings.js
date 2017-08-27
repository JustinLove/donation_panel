(function() {
  var donation_panel_settings = {
    donation_panel_feed: {
      title: 'Donation Feed',
      type: 'select',
      options: [
        'donordrive_test',
        'donordrive_live',
        'donation_config_live',
        'fundrazr_test',
        'fundrazr_live',
        'gofundme_test',
        'gofundme_live',
        'tiltify_local',
        'tiltify_api_test',
        'tiltify_live',
      ],
      default: 'donordrive_test'
    },
    donation_panel_api_key: {
      title: 'Feed Api Key',
      type: 'text',
      default: ''
    },
    donation_panel_match_tags: {
      title: 'Match Tags',
      type: 'text',
      default: ''
    },
    donation_panel_current_match: {
      title: 'Current Match',
      type: 'text',
      default: ''
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
    if (donation_panel_settings[setting].type == 'text') {
      var textHtml = 
        '<div class="option" data-bind="with: $root.settingsItemMap()[\'ui.' + setting + '\']">' +
          '<label data-bind="text: title" >' +
            'title' +
          '</label>' +
          '<input type="text" class="form-control" value="" data-bind="value: value" />' +
        '</div>'
      $group.append(textHtml)
    } else {
      $group.append('<div class="option" data-bind="template: { name: \'donation-panel-setting-template\', data: $root.settingsItemMap()[\'ui.' + setting + '\'] }"></div>')
    }
  })
})()
