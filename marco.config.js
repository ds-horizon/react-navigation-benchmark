module.exports = {
  android: {
    packageName: 'com.navigationbenchmark', // Update if your package name is different
    outputPath: './marco-reports/android',
    dataDir: [
      { path: './marco-reports/android/js_lowEndDeviceSimple.json', reportName: 'JS_Simple' },
      { path: './marco-reports/android/native_lowEndDeviceSimple.json', reportName: 'Native_Simple' },
      { path: './marco-reports/android/js_lowEndDeviceMedComplex.json', reportName: 'JS_Complex' },
      { path: './marco-reports/android/native_lowEndDeviceMedComplex.json', reportName: 'Native_Complex' }
    ],
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
