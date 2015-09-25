define([
  'donation_panel/fundrazr/test',
  'donation_panel/fundrazr/live',
  'donation_panel/gofundme/test',
  'donation_panel/gofundme/live',
], function(
  fundrazr_test,
  fundrazr_live,
  gofundme_test,
  gofundme_live
) {
  return {
    fundrazr_test: fundrazr_test,
    fundrazr_live: fundrazr_live,
    gofundme_test: gofundme_test,
    gofundme_live: gofundme_live,
  }
})
