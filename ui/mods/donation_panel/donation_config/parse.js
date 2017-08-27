define([], function() {
  var process = function(json) {
    return json.donations.map(function(donation) {
      var id = donation.id
      var amount = donation.amount
      var comment = donation.comment || ''
      var donor_name = donation.donor_name
      var donor_image = donation.donor_image

      return {
        amount: amount,
        comment: comment,
        donor_name: donor_name,
        donor_image: donor_image,
        id: id,
      }
    }).reverse()
  }

  return {
    process: process,
  }
})
