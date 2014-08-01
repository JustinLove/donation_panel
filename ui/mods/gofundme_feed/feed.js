define(['gofundme_feed/menu'], function(menu) {
  //var donations = "http://www.gofundme.com/mvc.php?route=donate/pagingdonationsb&url=planetaryablegamers&idx=0&type=recent"
  var donations = "coui://ui/mods/gofundme_feed/test.html"

  var process = function(html) {
    var $doners = $(html).find(".doner")
    console.log([html, $doners])
    return $doners.map(function(i, doner) {
      var amount = $(doner).find('.damt').text().match(/\d+(\.\d+)?/)[0]
      var comment = $(doner).find('.dcom').text().trim()
      var donor = $(doner).find('.dname').text().trim()
      var codes = comment.match(/[abcdefABCDEF][123456]/g) || []
      codes = codes.map(function(s) {return s.toUpperCase()})
      var orders = codes.map(function(c) {return menu.menuMap[c]})

      return {
        amount: amount,
        comment: comment,
        donor: donor,
        codes: codes,
        orders: orders,
      }
    }).get()
  }

  var update = function(url) {
    return $.get(url || donations).then(process)
  }

  return {
    donations: donations,
    update: update,
    process: process,
  }
})
