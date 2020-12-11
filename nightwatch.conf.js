const {BrowserType, DeviceName, ScreenOrientation} = require('@applitools/eyes-nightwatch')
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
    //apiKey: 'APPLITOOLS_API_KEY', // You can get your api key from the Applitools dashboard
    batch: {
      name: 'Ultrafast Batch'
    },
    useVisualGrid: true,
    browsersInfo: [
      {name: BrowserType.CHROME, width: 800, height: 600},
      {name: BrowserType.FIREFOX, width: 700, height: 500},
      {name: BrowserType.IE_11, width: 1600, height: 1200},
      {name: BrowserType.EDGE_CHROMIUM, width: 1024, height: 768},
      {name: BrowserType.SAFARI, width: 800, height: 600},
      {chromeEmulationInfo: {deviceName: DeviceName.iPhone_X, screenOrientation: ScreenOrientation.PORTRAIT}},
      {chromeEmulationInfo: {deviceName: DeviceName.Pixel_2, screenOrientation: ScreenOrientation.PORTRAIT}},
    ],
    concurrency: 1
    // enableEyesLogs: true
  }
}
