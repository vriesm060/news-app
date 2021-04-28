import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import * as newsAction from '../redux/actions/newsAction';

export default function Card(props) {
  const dispatch = useDispatch();
  const isFav = useSelector(state => state.news.favorites.some(article => article.url === props.url));
  
  return (
    <TouchableOpacity style={styles.card} onPress={() => props.navigation.navigate('NewsDetails')}>
      <View style={styles.imageWrapper}>
        <Image 
          // source={require('../../assets/news.jpeg')}
          source={{uri: props.image}}
          style={styles.image}
        />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          { props.title.length > 25 ? props.title.slice(0, 25) + '...' : props.title }
        </Text>
        <MaterialIcons
          name={isFav ? 'favorite' : 'favorite-border'}
          color="#72bcd4"
          size={24}
          onPress={() => dispatch(newsAction.addFavorites(props.url))}
        />
      </View>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.description}>
          { props.description.length > 150 ? props.description.slice(0, 150) + '...' : props.description }
        </Text>
      </View>
    </TouchableOpacity>
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