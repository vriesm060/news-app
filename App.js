import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';

import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';

const loadFonts = () => {
  return Font.loadAsync({
    'Bree-Serif': require('./assets/fonts/breeserif_regular.otf'),
    'Kreon-Light': require('./assets/fonts/kreon_light.ttf'),
    'Kreon-Regular': require('./assets/fonts/kreon_regular.ttf'),
    'Kreon-Bold': require('./assets/fonts/kreon_bold.ttf'),
  });
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
