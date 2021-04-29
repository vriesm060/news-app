import { API_KEY } from '../../../constants/api';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const ADD_FAVORITES = 'ADD_FAVORITES';

export const fetchArticles = () => {
  return async dispatch => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;
    const result = await fetch(url);
    const data = await result.json();

    dispatch({
      type: FETCH_ARTICLES,
      payload: data,
    });
  };
}

export const addFavorites = (url) => {
  return {
    type: ADD_FAVORITES,
    payload: url,
  };
}