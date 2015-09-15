define(function() {
  var insertPanel = function(model) {
    var $panel = $('<panel id="donation_panel"></panel>').css({
      visibility: 'visible',
      position: 'absolute',
      bottom: 0,
      right: 0,
    }).attr({
      name: "donation_panel",
      src: "coui://ui/mods/donation_panel/donation_panel.html",
      'no-keyboard': true,
      'yield-focus': true,
      fit: "dock-bottom-right",
      'data-bind': 'visible: visible',
    })
    $panel.appendTo('body')
    ko.applyBindings(model, $panel[0])
    api.Panel.bindElement($panel[0])
  }

  var viewModel = {
    visible: ko.observable(false),
  }

  var inserted = false
  var insert = function() {
    console.log('insert')
    insertPanel(viewModel)
    api.panels.options_bar && api.panels.options_bar.message('donation_panel_loading', true)
    inserted = true
  }
  viewModel.visible.subscribe(function(visible) {
    if (visible && !inserted) {
      insert()
    }
  })

  model.toggleDonationPanel = function() {
    viewModel.visible(!viewModel.visible())
  }

  return {
    insert: insert,
    viewModel: viewModel,
    show: function() {
      viewModel.visible(true)
    },
  }
})
