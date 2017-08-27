define([
  'donation_panel/tiltify/local',
  'donation_panel/tiltify/api_test',
  'donation_panel/tiltify/live',
  'donation_panel/fundrazr/test',
  'donation_panel/fundrazr/live',
  'donation_panel/gofundme/test',
  'donation_panel/gofundme/live',
  'donation_panel/donordrive/test',
  'donation_panel/donordrive/live',
  'donation_panel/donation_config/live',
], function(
  tiltify_local,
  tiltify_api_test,
  tiltify_live,
  fundrazr_test,
  fundrazr_live,
  gofundme_test,
  gofundme_live,
  donordrive_test,
  donordrive_live,
  donation_config_live
) {
  return {
    tiltify_local: tiltify_local,
    tiltify_api_test: tiltify_api_test,
    tiltify_live: tiltify_live,
    fundrazr_test: fundrazr_test,
    fundrazr_live: fundrazr_live,
    gofundme_test: gofundme_test,
    gofundme_live: gofundme_live,
    donordrive_test: donordrive_test,
    donordrive_live: donordrive_live,
    donation_config_live: donation_config_live,
  }
})
