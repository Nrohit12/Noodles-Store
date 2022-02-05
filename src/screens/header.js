import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {logout} from '../redux/action';

export const Header = ({header, dispatch}) => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      {header === 'Restaurants' ? null : (
        <Icon
          name="back"
          onPress={() => navigation.goBack()}
          size={30}
          color="#11052C"
          style = {{marginRight: 15}}
          />
      )}
      <Text style={styles.text}>{header}</Text>
      <View style={styles.logOutView}>
        <Icon
          name="logout"
          onPress={() => dispatch(logout())}
          size={30}
          color="#11052C"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flexDirection: 'row',
  },
  text: {
    color: '#11052C',
    elevation: 10,
    fontWeight: '600',
    fontSize: 25,
  },
  logOutView:{
    position: 'absolute',
    top: 30,
    right: 30
  }
});
