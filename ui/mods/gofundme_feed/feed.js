define(['gofundme_feed/menu'], function(menu) {
  var process = function(html) {
    // trim: leadig blank line will throw invalid
    var $doners = $(html.trim()).find(".doner")
    //console.log([html, $doners])
    return $doners.map(function(i, doner) {
      var amount = parseInt($(doner).find('.damt').text().match(/\d+(\.\d+)?/)[0], 10)
      var comment = $(doner).find('.dcom').text().trim()
      var donor = $(doner).find('.dname').text().trim()
      var codes = comment.match(menu.codes) || []
      codes = codes.map(function(s) {return s.toUpperCase()})
      var orders = codes.map(function(c) {return menu.menuMap[c]})

      return {
        amount: amount,
        comment: comment,
        donor: donor,
        id: donor + amount.toString() + comment,
        codes: codes,
        orders: orders,
      }
    }).get().reverse()
  }

  var donations = "http://www.gofundme.com/mvc.php?route=donate/pagingdonationsb&url=planetaryablegamers&idx=0&type=recent"
  //var donations = "coui://ui/mods/gofundme_feed/raw.html"

  var update = function(url) {
    return $.get(url || donations).then(process)
  }

  var testSequence = [
    "coui://ui/mods/gofundme_feed/test.html",
    "coui://ui/mods/gofundme_feed/test2.html",
  ]

  var testUpdate = function() {
    if (testSequence.length > 1) {
      url = testSequence.shift()
    } else {
      url = testSequence[0]
    }
    return $.get(url || donations).then(process)
  }

  return {
    donations: donations,
    update: update,
    testUpdate: testUpdate,
    process: process,
  }
})
