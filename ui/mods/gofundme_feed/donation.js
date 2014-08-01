define(function() {
  var prototype = {
  }

  var constructor = function(donation) {
    var model = Object.create(prototype)
    $.extend(model, donation)
    model.selected = ko.observable(false)
    model.orders = model.orders || []
    model.unexectedOrders = model.orders.concat()
    return model
  }

  return constructor
})
