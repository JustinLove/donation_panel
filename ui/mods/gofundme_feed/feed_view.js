define([
  'gofundme_feed/feed',
  'gofundme_feed/donation'
], function(feed, Donation) {
  var viewModel = {
    visible: ko.observable(true),
    open: ko.observable(true),
    toggle: function() {
      viewModel.open(!viewModel.open())
    },
    donations: ko.observable([]),
    currentDonation: ko.observable(Donation({})),
    currentOrder: ko.observable({}),
    select: function(donation) {
      console.log(donation)

      viewModel.currentDonation().selected(false)
      viewModel.currentDonation(donation)
      donation.selected(true)

      if (donation.orders.length > 0) {
        viewModel.currentOrder(donation.orders.shift())
      } else {
        viewModel.currentOrder({})
      }
    },
    executeNext: function() {
      donation = viewModel.currentDonation()
      if (donation.orders.length > 0) {
        viewModel.currentOrder(donation.orders.shift())
      } else {
        viewModel.currentOrder({})
      }
    },
    update: function() {
      feed.update().then(function(data) {
        viewModel.donations(data.map(Donation))
      })
    },
    ready: function() {
      console.log('ready')
      setTimeout(viewModel.update, 1000)
    },
  }

  viewModel.currentCode = ko.computed(function() {
    return viewModel.currentOrder().code
  })

  return viewModel
})
