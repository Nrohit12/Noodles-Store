import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Search, RestaurantDetails} from '../screens';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetails} />
    </Stack.Navigator>
  );
}

export default AppStack;
