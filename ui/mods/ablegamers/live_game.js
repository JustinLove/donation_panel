(function() {
  var pasteUnits = model.pasteUnits || function(n) {
    if (!model.cheatAllowCreateUnit()) return
    if (n < 1) return

    for (var i = 0;i < n;i++) {
      engine.call("unit.debug.paste")
    }
  }

  var pasteQueue = []
  var pasteBurst = 0

  var shiftQueue = function() {
    var item = pasteQueue.shift()
    api.panels.sandbox && api.panels.sandbox.message('sandbox_unit_queue', pasteQueue)
    if (item) {
      var spec = item[1]
      var unit = model.unitSpecs[spec]
      selectedUnit = {spec: spec, name: (unit && unit.name) || 'unknown'}
      pasteBurst = item[0]
    } else {
      pasteBurst = 0
    }
  }

  var pasteShift = function() {
    if (model.playerControlFlags().indexOf(true) == -1) return

    shiftQueue()
    model.pasteUnits(pasteBurst)
  }

  handlers.sandbox_menu_item = function(item) {
    if (item) {
      pasteQueue = item.build.concat()
    }
  }

  model.pasteUnits = pasteUnits
  model.pasteShift = pasteShift
})()