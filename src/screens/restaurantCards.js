import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Header} from './header';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Items = ({item}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onCardClick = () => {
    navigation.navigate('RestaurantDetail', {restaurantData: item})
  }

  return (
    <TouchableOpacity style={styles.restaurantCard} onPress={() => onCardClick()}>
      <Image source={{uri: item.Image}} style={styles.image} />
      <Text style={styles.text}>{item.Variety}</Text>
      <Text style={styles.rating}>{item.Stars} ⭐</Text>
      <Text style={styles.brand}>{item.Brand}</Text>
    </TouchableOpacity>
  );
};

export const renderRestaurants = (data) => {
  return data.map((item, index) => 
    <Items item={item} key={index}/>)
}
const styles = StyleSheet.create({
  restaurantCard: {
    width: '80%',
    elevation: 5,
    backgroundColor: 'white',
    margin: 20,
    alignSelf: 'center',
    borderRadius: 20,
    paddingBottom: 50,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    color: '#11052C',
    marginHorizontal: 25,
    marginTop: 10,
  },
  rating: {
    color: '#11052C',
    fontSize: 18,
    position: 'absolute',
    bottom: 10,
    right: 20,
    backgroundColor: '#557C55',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  brand: {
    color: '#676FA3',
    fontSize: 18,
    position: 'absolute',
    top: 10,
    left: 20,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
});
