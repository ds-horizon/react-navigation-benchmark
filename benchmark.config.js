module.exports = {
  scenarios: [
    {
      name: 'JS Stack Navigation',
      type: 'js-stack',
      iterations: 10,
      screens: ['Home', 'Details', 'Profile', 'Settings'],
    },
    {
      name: 'Native Stack Navigation',
      type: 'native-stack',
      iterations: 10,
      screens: ['Home', 'Details', 'Profile', 'Settings'],
    },
  ],
  metrics: [
    'navigation-time',
    'memory-usage',
    'fps',
    'render-time',
  ],
}; 