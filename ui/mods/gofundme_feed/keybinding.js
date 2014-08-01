action_sets.hacks['paste ten units'] = function () {
  if (model.pasteUnits) model.pasteUnits(10)
}
default_keybinds.hacks['paste ten units'] = 'shift+ctrl+v'

action_sets.hacks['paste queue'] = function () {
  console.log(model)
  if (model.pasteShift) model.pasteShift()
}
default_keybinds.hacks['paste queue'] = 'alt+v'
