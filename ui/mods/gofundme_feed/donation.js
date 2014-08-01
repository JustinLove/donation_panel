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
    return model
  }

  return constructor
})
