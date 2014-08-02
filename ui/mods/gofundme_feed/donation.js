define(function() {
  var prototype = {
    matchPlayers: function(players) {
      var words = this.comment.match(/\b\w{3,}\b/g)
      if (!words) return

      var re = new RegExp(words.join('|'), 'i')
      this.matchingPlayers(players.filter(function(player) {
        return player.match(re)
      }))
      if (this.matchingPlayers().length == 1) {
        this.matchingIndex = players.indexOf(this.matchingPlayers()[0])
      }
    }
  }

  var expandSimpleMultiples = function(model) {
    if (model.orders.length == 1) {
      var credit = model.amount
      var item = model.orders[0]
      credit -= item.donation
      while (credit >= item.donation) {
        credit -= item.donation
        model.minimum += item.donation
        model.unexecutedOrders.push(item)
      }
    }
  }

  var constructor = function(donation) {
    var model = Object.create(prototype)
    $.extend(model, donation)
    model.selected = ko.observable(false)
    model.finished = ko.observable(false)
    model.orders = model.orders || []
    model.unexecutedOrders = ko.observableArray(model.orders.concat())
    model.minimum = model.orders
      .map(function(o) {return o.donation})
      .reduce(function(a, b) {return a + b}, 0)
    model.insufficient = ko.observable(model.minimum > model.amount)

    expandSimpleMultiples(model)

    model.matchingPlayers = ko.observable()
    model.matchingIndex = -1

    return model
  }

  return constructor
})
