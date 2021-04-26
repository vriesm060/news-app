import React from 'react';
import { StyleSheet } from 'react-native';

import Card from '../components/Card';

export default function NewsListScreen(props) {
  return (
    <Card navigation={props.navigation} />
  );
}

const styles = StyleSheet.create({
  
});