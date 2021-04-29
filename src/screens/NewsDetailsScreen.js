import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import * as newsAction from '../redux/actions/newsAction';

export default function NewsDetailsScreen(props) {
  const dispatch = useDispatch();

  const {articleUrl} = props.route.params;
  const article = useSelector(state => state.news.articles.articles.find(article => article.url === articleUrl));
  const isFav = useSelector(state => state.news.favorites.some(article => article.url === article.url));
  
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>{ article.title }</Text>
      </View>
      <View>
        <ImageBackground style={styles.image} source={{uri: article.urlToImage}}>
          <View style={styles.titleContainer}>
            <Text style={styles.author}>{ article.author }</Text>
            <MaterialIcons
              name={isFav ? 'favorite' : 'favorite-border'}
              color="#72bcd4"
              size={24}
              onPress={() => dispatch(newsAction.addFavorites(article.url))}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{ article.description }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },

  heading: {
    marginHorizontal: 20,
    marginBottom: 10,
  },

  title: {
    fontFamily: 'Bree-Serif',
    fontSize: 24,
  },

  image: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },

  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  author: {
    fontFamily: 'Kreon-Regular',
    fontSize: 20,
    color: '#fff',
  },

  description: {
    margin: 10,
  },

  descriptionText: {
    fontSize: 20,
    fontFamily: 'Kreon-Regular',
  },
});