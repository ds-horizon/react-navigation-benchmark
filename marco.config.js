module.exports = {
  android: {
    packageName: 'com.navigationbenchmark', // Update if your package name is different
    outputPath: './marco-reports/android',
    dataDir: [{
      path: './marco-reports/android/js_stack_navigation_release.json',
      reportName: 'AndroidJSStackNavigation'
    },
    {
        path: './marco-reports/android/native_stack_navigation_release.json',
        reportName: 'AndroidNativeStackNavigation'
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