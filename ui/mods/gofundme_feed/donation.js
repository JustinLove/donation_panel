define(function() {
  var prototype = {
  }

  var constructor = function(donation) {
    var model = Object.create(prototype)
    $.extend(model, donation)
    model.selected = ko.observable(false)
    model.orders = model.orders || []
    model.unexectedOrders = model.orders.concat()
    model.minimum = model.orders
      .map(function(o) {return o.donation})
      .reduce(function(a, b) {return a + b}, 0)
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
    return model
  }

  return constructor
})
