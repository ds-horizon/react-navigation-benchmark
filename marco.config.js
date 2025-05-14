module.exports = {
  android: {
    packageName: 'com.navigationbenchmark', // Update if your package name is different
    outputPath: './marco-reports/android',
    dataDir: [{
      path: './marco-reports/android/js_log.json',
      reportName: 'Android_JSStackNavigation'
    },
    {
        path: './marco-reports/android/native_log.json',
        reportName: 'Android_NativeStackNavigation'
      }],
    port: '8080',
  },
  ios: {
    packageName: 'org.reactjs.native.example.NavigationBenchmark', // Update if your package name is different
    outputPath: './marco-reports/ios',
    dataDir: [{
      path: './marco-reports/ios/js_log.json',
      reportName: 'ios_JSStackNavigation'
    },
      {
        path: './marco-reports/ios/native_log.json',
        reportName: 'ios_NativeStackNavigation'
      }],
    port: '8080',
  }
};
