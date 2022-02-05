import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './app';
import AuthNavigator from './auth';
import Apploading from './loading';
import {useDispatch, useSelector} from 'react-redux';
export default function RootNavigator() {
  const {userData} = useSelector(state => state.user);
  const signedIn = userData.hasOwnProperty('id');

  function Navigator() {
    return signedIn ? <AppNavigator /> : <AuthNavigator />;
  }
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
