define([
  'donation_panel/tiltify/local',
  'donation_panel/tiltify/api_test',
  'donation_panel/fundrazr/test',
  'donation_panel/fundrazr/live',
  'donation_panel/gofundme/test',
  'donation_panel/gofundme/live',
], function(
  tiltify_local,
  tiltify_api_test,
  fundrazr_test,
  fundrazr_live,
  gofundme_test,
  gofundme_live
) {
  return {
    tiltify_local: tiltify_local,
    tiltify_api_test: tiltify_api_test,
    fundrazr_test: fundrazr_test,
    fundrazr_live: fundrazr_live,
    gofundme_test: gofundme_test,
    gofundme_live: gofundme_live,
  }
})
