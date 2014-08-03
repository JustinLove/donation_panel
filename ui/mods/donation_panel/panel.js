define(function() {
  return function() {
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
    })
    $panel.appendTo('body')
    api.Panel.bindElement($panel[0])
  }
})
