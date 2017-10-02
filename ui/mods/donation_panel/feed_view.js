define([
  'donation_data/config',
  'donation_data/feed',
  'donation_panel/donation',
  'donation_panel/menu'
], function(config, feed, Donation, menu) {
  var nullOrder = {build: []}
  var unfinished = function(donation) {return !donation.finished()}

  var knownDonations = {}

  var integrateDonations = function(incoming) {
    incoming.forEach(function(d) {
      if (!knownDonations[d.id]) {
        var dm = Donation(d)
        dm.matchPlayers(viewModel.playerNames())
        dm.matchPlanets(viewModel.planetNames())
        dm.matchMatches(config.match_tags(), config.current_match())
        knownDonations[d.id] = dm
        viewModel.donations.unshift(dm)
      }
    })
    viewModel.donations(stableSort(viewModel.donations(), function(a, b) {return a.priority - b.priority}))
  }

  // https://stackoverflow.com/a/45422645/30203
  var stableSort = function(array, compareFunction) {
    'use strict'

    var length = array.length
    var entries = Array(length)
    var index

    // wrap values with initial indices
    for (index = 0; index < length; index++) {
      entries[index] = [index, array[index]]
    }

    // sort with fallback based on initial indices
    entries.sort(function (a, b) {
      var comparison = Number(compareFunction(a[1], b[1]))
      return comparison !== 0 ? comparison : a[0] - b[0]
    })

    // re-map original array to stable sorted values
    for (index = 0; index < length; index++) {
      array[index] = entries[index][1]
    }

    return array
  }

  var autoUpdate = function() {
    viewModel.update()
    setTimeout(autoUpdate, 10000)
  }

  var viewModel = {
    visible: ko.observable(true),
    name: ko.observable(config.name()),
    cheatAllowCreateUnit: ko.observable(false).extend({session: 'cheat_allow_create_unit'}),
    playerNames: ko.observableArray([]),
    planetNames: ko.observableArray([]),
    donations: ko.observableArray([]),
    discountLevel: ko.observable(0),
    currentDonation: ko.observable(Donation({})),
    currentOrder: ko.observable(nullOrder),
    select: function(donation) {
      viewModel.currentDonation().selected(false)
      viewModel.currentDonation(donation)
      donation.selected(true)
      api.Panel.message('devmode', 'improved_player_control_change', donation.matchingPlayerIndex)
      if (donation.matchingPlanetIndex != -1) {
        api.Panel.message(api.Panel.parentId, 'planets.click', donation.matchingPlanetIndex)
        api.audio.playSound('/SE/UI/UI_planet_switch_select');
      }

      if (!viewModel.cheatAllowCreateUnit()) {
        donation.finished(true)
        return
      }

      if (donation.unexecutedOrders().length > 0) {
        viewModel.currentOrder(donation.unexecutedOrders.shift())
      } else {
        donation.finished(true)
        viewModel.currentOrder(nullOrder)
      }
    },
    cancel: function(donation) {
      donation.finished(true)
    },
    executeNext: function() {
      donation = viewModel.currentDonation()
      if (donation.unexecutedOrders().length > 0) {
        viewModel.currentOrder(donation.unexecutedOrders.shift())
      } else {
        donation.finished(true)
        viewModel.select(viewModel.donationWithOrders())
      }
    },
    donationWithOrders: function() {
      return viewModel.donations().filter(function(donation) {
        return donation.unexecutedOrders().length > 0 && !donation.insufficient()
      }).reverse()[0] || Donation({})
    },
    update: function() {
      viewModel.name(config.name())
      feed[config.feed()].update().then(integrateDonations)
    },
    reap: function() {
      viewModel.donations(viewModel.donations().filter(unfinished))
    },
    manualUpdate: function() {
      viewModel.reap()
      viewModel.update()
    },
    ready: function() {
      console.log('ready')
      api.Panel.message(api.Panel.parentId, 'request_player_names',
        ['donation_panel', 'player_names'])
      api.Panel.message(api.Panel.parentId, 'request_planet_names',
        ['donation_panel', 'planet_names'])
      setTimeout(autoUpdate, 1000)
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
  viewModel.playerNames.subscribe(function(names) {
    viewModel.donations().forEach(function(donation) {
      donation.matchPlayers(names)
    })
  })
  viewModel.planetNames.subscribe(function(names) {
    viewModel.donations().forEach(function(donation) {
      donation.matchPlanets(names)
    })
  })
  viewModel.discountLevel.subscribe(function(level) {
    menu.setDiscountLevel(level)
    viewModel.donations(viewModel.donations().map(Donation))
    viewModel.currentDonation(Donation({}))
    viewModel.currentOrder(nullOrder)
    viewModel.donations(stableSort(viewModel.donations(), function(a, b) {return a.priority - b.priority}))
  })

  return viewModel
})
