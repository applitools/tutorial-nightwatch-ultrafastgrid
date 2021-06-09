const {Target} = require('@applitools/eyes-nightwatch')
module.exports = {
    'Ultrafast Test': function(browser) {
        browser
            .url('https://demo.applitools.com')
            .eyesOpen('Demo App - Nightwatch', 'Smoke Test - Nightwatch', {width: 800, height: 600})
            .eyesCheck(Target.window().fully().withName('Login Window'))
            .click('#log-in')
            .eyesCheck(Target.window().fully().withName('App Window'))
            .eyesClose()
            .end()
    }
}
