import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {renderRestaurants} from './restaurantCards';

function Search({navigation}) {
  const {restaurants, loading} = useSelector(state => state.restaurant);
  const [search, setSearch] = React.useState([]);
  const [text, onChangeText] = React.useState('');

  const setSearchArray = text => {
    const searchArray =
      text.length > 0
        ? restaurants.filter(item => {
            return item.Brand.toLowerCase().indexOf(text.toLowerCase()) > -1;
          })
        : [];
    setSearch(searchArray);
  };
  return (
    <ScrollView style={{flex: 1}}>
      <View style={[styles.container]}>
        <IconButton
          color="black"
          icon={require('../assets/back.png')}
          style={{width: 24, height: 24, marginRight: 20}}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setSearchArray(text)}
          placeholder="Search Brand Names"
        />
      </View>
      <View>{renderRestaurants(search)}</View>
    </ScrollView>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECB390',
    padding: 10,
    elevation: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    color: 'white',
    elevation: 10,
    fontWeight: '400',
    fontSize: 15,
  },
  input: {
    padding: 10,
  },
});
