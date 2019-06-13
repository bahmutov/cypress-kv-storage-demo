module.exports = (on, config) => {
  // https://on.cypress.io/browser-launch-api
  on('before:browser:launch', (browser = {}, args) => {
    // browser will look something like this
    // {
    //   name: 'chrome',
    //   displayName: 'Chrome',
    //   version: '63.0.3239.108',
    //   path: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    //   majorVersion: '63'
    // }

    if (browser.name === 'chrome') {
      // TODO: also check the version, need at least 74
      // `args` is an araay of all the arguments
      // that will be passed to Chrome when it launchers
      args.push('--enable-experimental-web-platform-features')

      // whatever you return here becomes the new args
      return args
    }

    if (browser.name === 'electron') {
      console.error('Electron browser does not support KV:Storage')
      return args
    }
  })
}
