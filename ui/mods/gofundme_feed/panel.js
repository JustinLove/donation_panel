define(function() {
  return function() {
    var $panel = $('<panel id="gofundme_feed"></panel>').css({
      visibility: 'visible',
      position: 'absolute',
      bottom: 0,
      left: 0,
    }).attr({
      name: "gofundme_feed",
      src: "coui://ui/mods/gofundme_feed/gofundme_feed.html",
      'no-keyboard': true,
      'yield-focus': true,
      fit: "dock-bottom-right",
    })
    $panel.appendTo('body')
    api.Panel.bindElement($panel[0])
  }
})
