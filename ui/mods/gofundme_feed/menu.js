define(function() {
  var menu = {
    menu: [],
    menuMap: {},
  }

  require(['sandbox_unit_menu/menu'], function(loadedMenu) {
    menu.menu = loadedMenu

    loadedMenu.forEach(function(item) {
      menu.menuMap[item.code] = item
    })
  })

  return menu
})
