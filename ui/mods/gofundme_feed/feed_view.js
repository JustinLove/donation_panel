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

      if (donation.unexectedOrders.length > 0) {
        viewModel.currentOrder(donation.unexectedOrders.shift())
      } else {
        viewModel.currentOrder({})
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
        return donation.unexectedOrders.length > 0
      })[0] || Donation({})
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
