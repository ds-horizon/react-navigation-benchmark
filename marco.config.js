module.exports = {
  android: {
    packageName: 'com.navigationbenchmark', // Update if your package name is different
    outputPath: './marco-reports/android',
    dataDir: [{
      path: './marco-reports/android/js_stack_navigation_release.json',
      reportName: 'Android_JSStackNavigation'
    },
    {
        path: './marco-reports/android/native_stack_navigation_release.json',
        reportName: 'Android_NativeStackNavigation'
      }],
    port: '8080',
  },
  ios: {
    packageName: 'com.navigationbenchmark', // Update if your package name is different
    outputPath: './marco-reports/ios',
    dataDir: [{
      path: './marco-reports/ios/log.json',
      reportName: 'iosReport1'
    }],
    port: '8080',
  }
};
