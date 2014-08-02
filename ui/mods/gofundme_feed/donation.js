define(function() {
  var prototype = {
  }

  var expandSimpleMultiples = function(model) {
    if (model.orders.length == 1) {
      var credit = model.amount
      var item = model.orders[0]
      credit -= item.donation
      while (credit >= item.donation) {
        credit -= item.donation
        model.minimum += item.donation
        model.unexectedOrders.push(item)
      }
    }
  }

  var constructor = function(donation) {
    var model = Object.create(prototype)
    $.extend(model, donation)
    model.selected = ko.observable(false)
    model.finished = ko.observable(false)
    model.orders = model.orders || []
    model.unexectedOrders = ko.observableArray(model.orders.concat())
    model.minimum = model.orders
      .map(function(o) {return o.donation})
      .reduce(function(a, b) {return a + b}, 0)
    model.insufficient = ko.observable(model.minimum > model.amount)

    expandSimpleMultiples(model)

    return model
  }

  return constructor
})
