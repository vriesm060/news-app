import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';
import Card from './src/components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
