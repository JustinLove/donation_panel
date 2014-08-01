define(['gofundme_feed/menu'], function(menu) {
  //var donations = "http://www.gofundme.com/mvc.php?route=donate/pagingdonationsb&url=planetaryablegamers&idx=0&type=recent"
  var donations = "coui://ui/mods/gofundme_feed/test.html"

  var process = function(html) {
    var $doners = $(html).find(".doner")
    console.log([html, $doners])
    $doners.each(function(i, doner) {
      var amount = $(doner).find('.damt').text().match(/\d+(\.\d+)?/)[0]
      var comment = $(doner).find('.dcom').text().trim()
      var codes = comment.match(/[abcdefABCDEF][123456]/g) || []
      codes = codes.map(function(s) {return s.toUpperCase()})
      var orders = codes.map(function(c) {return menu.menuMap[c]})

      console.log(amount, comment, codes, orders)
    })
  }

  var update = function(url) {
    url = url || donations
    $.get(url, function(html, status) {
      if (status == "success") {
        process(html)
      }
    })
  }

  return {
    donations: donations,
    update: update,
    process: process,
  }
})
