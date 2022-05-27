# react-native-appmetrica-alpha
React Native bridge to the [AppMetrica](https://appmetrica.yandex.com/) on both iOS and Android.

## Installation

1. `npm install react-native-appmetrica-alpha --save`
2. If React Native version <= 0.59: \
  `react-native link react-native-appmetrica-alpha`
3. iOS only
  * if `${PROJECT_DIR}/ios/Podfile` exists: \
  `npx pod-install`
  * if `${PROJECT_DIR}/ios/Podfile` don't exists: \
  [Setup AppMetrica](https://appmetrica.yandex.com/docs/mobile-sdk-dg/tasks/ios-quickstart.html) and placed frameworks at `${PROJECT_DIR}/ios/Frameworks`

## Usage

```ts
import { activate, reportEvent, reportError } from 'react-native-appmetrica-alpha';

// Starts the statistics collection process.
.activate({
  apiKey: '...KEY...',
  sessionTimeout: 120,
  firstActivationAsUpdate: false,
});

// Sends a custom event message and additional parameters (optional).
reportEvent('My event');
reportEvent('My event', { foo: 'bar' });

// Send a custom error event.
reportError('My error');
```
