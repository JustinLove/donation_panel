(function() {
  model.toggleDonationPanel = function() {
    api.Panel.message(api.Panel.parentId, 'panel.invoke', ['toggleDonationPanel']);
  };
  model.donationPanelLoading = ko.observable(false)
  model.donationPanelImage = ko.computed(function() {
    if (model.donationPanelLoading()) {
      return 'coui://ui/mods/donation_panel/wide_loading.gif'
    } else {
      return 'img/ingame_options_bar/game_menu.png'
    }
  })
  $('.div_ingame_options_bar_cont').prepend(
  '<div class="btn_ingame_options btn_std_ix div_toggle_donation_panel">' + 
      '<a href="#" data-bind="click: toggleDonationPanel">' + 
          '<img height="16" data-bind="attr: { src: donationPanelImage }" />' + 
      '</a>' +
  '</div>')

  handlers.donation_panel_loading = model.donationPanelLoading
})()

