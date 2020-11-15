module.exports = {
  src_folders: ['test'],
  custom_commands_path:  'node_modules/@applitools/eyes-nightwatch/commands',
  test_settings: {
    default: {
      disable_error_log: false,
      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName : 'chrome',
        'goog:chromeOptions': {
          w3c: false,
        },
      },

      webdriver: {
        port: 4444,
        default_path_prefix: '/wd/hub',
      },
    },
  },
  eyes: {
    apiKey: 'APPLITOOLS_API_KEY', // You can get your api key from the Applitools dashboard
    batch: {
      name: 'Demo batch'
    },
    // enableEyesLogs: true
  }
}