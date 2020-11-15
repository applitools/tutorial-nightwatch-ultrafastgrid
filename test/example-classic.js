const {Target} = require('@applitools/eyes-nightwatch')
module.exports = {
    'Classic Runner Test': function(browser) {
        browser
            .url('https://demo.applitools.com')
            .eyesOpen('Demo App', 'Smoke Test', {width: 800, height: 600})
            .eyesCheck(Target.window().fully().withName('Login Window'))
            .click('#log-in')
            .eyesCheck(Target.window().fully().withName('App Window'))
            .eyesClose()
            .end()
    }
}