import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import {Header} from './header';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {getNoodles} from '../redux/action';
import Apploading from '../navigator/loading';
import {renderRestaurants} from './restaurantCards';
import {filterItems} from './junk';

function Home({navigation}) {
  let {restaurants, loading} = useSelector(state => state.restaurant);
  const [isSorted, setIsSorted] = useState(false);
  const [sortedData, setSortedData] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    loading ? dispatch(getNoodles()) : sortItems();
  }, [loading]);

  const sortItems = () => {
    const sorted = [...restaurants].sort((a, b) => {
      let a1 = a.Stars.toString().toLowerCase();
      let b1 = b.Stars.toString().toLowerCase();
      if (a1 > b1) return 1;
      if (a1 < b1) return -1;
      return 0;
    });
    isSorted ? setSortedData(sorted) : setSortedData(restaurants);
    setIsSorted(!isSorted);
  };
  return (
    <ScrollView style={{flex: 1}} keyboardShouldPersistTaps="handled">
      <Header header={'Restaurants'} dispatch={dispatch} />
      <View style={styles.searchFilter}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Search')}
          style={styles.search}>
          <Text>Search...</Text>
        </TouchableOpacity>
        <View style={styles.filter}>
          <Icon
            name="filter"
            onPress={() => sortItems(restaurants)}
            size={30}
            color="#11052C"></Icon>
        </View>
      </View>
      {loading ? (
        <Apploading />
      ) : (
        <View>{renderRestaurants(sortedData)}</View>
      )}
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  regions: {
    padding: 30,
    elevation: 10,
    margin: 14,
    alignItems: 'center',
  },
  searchFilter: {
    marginHorizontal: 28,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  search: {
    backgroundColor: '#B2B1B9',
    padding: 15,
    width: '82%',
    marginRight: 10,
    borderRadius: 10,
  },
  filter: {
    elevation: 5,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
});
