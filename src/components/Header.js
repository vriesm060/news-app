import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>News App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS === 'ios' ? '#72bcd4' : '#fff',
    padding: 15,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },

  title: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 20,
    color: Platform.OS === 'ios' ? '#fff' : '#72bcd4',
  }
});