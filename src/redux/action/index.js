import { SET_RESTAURANTS, SET_NOODLES, LOGIN, LOGOUT, SET_RESTAURANT_DETAILS } from '../constant';
import { api } from './api';
import axios from 'axios';
import { LogBox } from 'react-native';

// logging the user in our application async is used just for reusability
export const login = (data) => async dispatch => {
    await axios
        .get('https://www.google.com')
        .then(response => {
            const id = Math.floor(Math.random() * 100)
            data['id'] = id
            console.log(data)
            dispatch({ type: LOGIN, payload: data });
        }).catch(error => {
            console.log('There has been a problem logging you in' + error.message);
            throw error;
        });
   
};

// logging the user out of our application async is used just for reusability
export const logout = () => async dispatch => {
    await axios
        .get('https://www.google.com')
        .then(response => {
            dispatch({ type: LOGOUT, payload: {} });
        }).catch(error => {
            console.log('There has been a problem logging you out' + error.message);
            throw error;
        });
};

export const getNoodles = () => async dispatch => {
    await axios
        .get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json')
        .then(response => {
            dispatch(getRestaurants(response.data))
        }).catch(error => {
            console.log('There has been a problem logging you out' + error.message);
            throw error;
        });
};

const getRestaurants = (images) => async dispatch => {
    await axios
        .get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json')
        .then(response => {
            let data = []
            response.data.map((item) => {
                const imageIndex = Math.round(Math.random() * (images.length - 1));
                item['Image'] = images[imageIndex].Image
                data.push(item)
            })
            dispatch({ type: SET_RESTAURANTS, payload: data});
        }).catch(error => {
            console.log('There has been a problem logging you out' + error.message);
            throw error;
        });
};




LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);