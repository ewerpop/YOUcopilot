module.exports = {
  "presets": [
    // "@vue/cli-plugin-babel/preset"
    ['veaury/babel/ReactPreset', {
      test (filename) {
        // default ignore node_modules
        if (filename.match(/[/\\]node_modules[\\/$]+/)) return
        // default pass abc path
        if (filename.match(/[/\\]abc[\\/$]+/)) return filename
      },
    }]
  ]
}