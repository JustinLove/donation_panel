define([
  'gofundme_feed/feed',
  'gofundme_feed/donation'
], function(feed, Donation) {
  var nullOrder = {build: []}

  var knownDonations = {}

  var integrateDonations = function(donations) {
    donations.forEach(function(d) {
      if (!knownDonations[d.id]) {
        var dm = Donation(d)
        knownDonations[d.id] = dm
        viewModel.donations.push(dm)
      }
    })
  }

  var viewModel = {
    visible: ko.observable(true),
    open: ko.observable(true),
    toggle: function() {
      viewModel.open(!viewModel.open())
    },
    donations: ko.observableArray([]),
    currentDonation: ko.observable(Donation({})),
    currentOrder: ko.observable(nullOrder),
    select: function(donation) {
      console.log(donation)

      viewModel.currentDonation().selected(false)
      viewModel.currentDonation(donation)
      donation.selected(true)

      if (donation.unexectedOrders.length > 0) {
        viewModel.currentOrder(donation.unexectedOrders.shift())
      } else {
        viewModel.currentOrder(nullOrder)
      }
    },
    executeNext: function() {
      donation = viewModel.currentDonation()
      if (donation.unexectedOrders.length > 0) {
        viewModel.currentOrder(donation.unexectedOrders.shift())
      } else {
        viewModel.select(viewModel.donationWithOrders())
      }
    },
    donationWithOrders: function() {
      return viewModel.donations().filter(function(donation) {
        return donation.unexectedOrders.length > 0 && !donation.insufficient()
      })[0] || Donation({})
    },
    update: function() {
      feed.update().then(integrateDonations)
    },
    ready: function() {
      console.log('ready')
      setTimeout(viewModel.update, 1000)
    },
  }

  viewModel.currentCode = ko.computed(function() {
    return viewModel.currentOrder().code
  })
  viewModel.currentMin = ko.computed(function() {
    return viewModel.currentOrder().donation
  })
  viewModel.currentOrder.subscribe(function(order) {
    api.Panel.message(api.Panel.parentId, 'sandbox_menu_item', order)
  })

  return viewModel
})
