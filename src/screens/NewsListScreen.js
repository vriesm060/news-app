import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Header from '../components/Header';
import Card from '../components/Card';

export default function NewsListScreen(props) {
  return (
    <View style={styles.container}>
      <Header />
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  
});