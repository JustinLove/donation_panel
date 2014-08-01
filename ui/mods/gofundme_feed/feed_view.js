define(['gofundme_feed/feed'], function(feed) {
  var viewModel = {
    visible: ko.observable(true),
    open: ko.observable(true),
    toggle: function() {
      viewModel.open(!viewModel.open())
    },
    donations: ko.observable([]),
    executeNext: function() {},
    update: function() {
      console.log("about to call from view update")
      feed.update().then(function(data) {
        console.log('view gets data')
        viewModel.donations(data)
      })
    },
    ready: function() {
      console.log('ready')
      viewModel.update()
    },
  }

  return viewModel
})
