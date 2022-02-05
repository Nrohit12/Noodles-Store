import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {Header} from './header';
import {useDispatch} from 'react-redux';

function RestaurantDetails({navigation, route}) {
  const {restaurantData} = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(restaurantData);
  });

  return (
    <ScrollView style={{flex: 1}}>
      <Header header={'Restaurant Detail'} dispatch={dispatch} />
      <View style={styles.details}>
        <Image source={{uri: restaurantData.Image}} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.variety}>{restaurantData.Variety}</Text>
          <Text style={styles.text}>Brand : <Text style={styles.value}>{restaurantData.Brand}</Text></Text>
          <Text style={styles.text}>Style : <Text style={styles.value}>{restaurantData.Style} </Text></Text>
          <Text style={styles.text}>Country : <Text style={styles.value}>{restaurantData.Country}</Text></Text>
          <Text style={styles.text}>Top Ten : <Text style={styles.value}>{restaurantData['Top Ten']}</Text></Text>
        </View>
        <Text style={styles.rating}>{restaurantData.Stars} ⭐</Text>
      </View>
    </ScrollView>
  );
}

export default RestaurantDetails;

const styles = StyleSheet.create({
  image: {
    height: 300,
    resizeMode: 'cover',
    borderRadius: 20,
    margin: 10,
  },
  details: {
    elevation: 10,
    backgroundColor: 'white',
    padding: 30,
    
  },
  rating: {
    color: '#11052C',
    fontSize: 18,
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#557C55',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  variety: {
    color: '#191919',
    alignSelf: 'center',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    margin:5
  },
  text: {
    color: '#000000',
    fontSize: 16,
    margin: 5
  },
  value: {
    color: '#676FA3',
    fontSize: 17,
  }
});
