import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NewsListScreen from '../screens/NewsListScreen';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="NewsList"
          component={NewsListScreen}
          options={{
            title: 'All News',
          }}
        />
        <Stack.Screen
          name="NewsDetails"
          component={NewsDetailsScreen}
          options={{
            title: 'News Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}