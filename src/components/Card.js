import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image 
          // source={require('../../assets/news.jpeg')}
          source={{uri: 'https://www.conchovalleyhomepage.com/wp-content/uploads/sites/83/2020/05/BREAKING-NEWS-GENERIC-1.jpg?w=1920&h=1080&crop=1'}}
          style={styles.image}
        />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Dummy title</Text>
        <MaterialIcons
          name="favorite-border"
          color="#72bcd4"
          size={24}
        />
      </View>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.description}>Dummy description</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    height: 300,
    margin: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2, },
    shadowRadius: 8,
    elevation: 5,
  },

  imageWrapper: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },

  image: {
    height: '100%',
    width: '100%',
  },

  titleWrapper: {
    height: '10%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  title: {
    fontFamily: 'Bree-Serif',
    fontSize: 20,
  },

  descriptionWrapper: {
    paddingHorizontal: 15,
  },

  description: {
    fontFamily: 'Kreon-Regular',
    fontSize: 15,
  },
});