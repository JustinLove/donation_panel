define(['donation_panel/donordrive/parse'], function(parse) {
  var testSequence = [
    //"coui://ui/mods/donation_panel/donordrive/sample.htm",
    "coui://ui/mods/donation_panel/donordrive/test.htm",
  ]

  var update = function() {
    if (testSequence.length > 1) {
      url = testSequence.shift()
    } else {
      url = testSequence[0]
    }
    return $.get(url).then(parse.process)
  }

  return {
    donations: testSequence[0],
    update: update,
    process: parse.process,
  }
})
