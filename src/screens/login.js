import React from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import {login} from '../redux/action';
import {useDispatch, useSelector} from 'react-redux';
function Login() {
  const dispatch = useDispatch();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [nameError, setNameError] = React.useState(false);
  const validate = () => {
    var regexp = /\S+@\S+\.\S+/;
    setEmailError(!regexp.test(email.toLowerCase()));
    setNameError(!(name.length > 3));
    return emailError || nameError;
  };

  const onButtonClick = () => {
    let form = {};
    form['name'] = name;
    form['email'] = email;
    validate() ?  null : dispatch(login(form));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.textView]}>
        <Text style={styles.text}>Login using your name and email</Text>
      </View>
      <View style={[styles.textView, styles.inputView]}>
        <TextInput
          style={styles.input}
          onChangeText={value => setName(value)}
          placeholder="Name..."
        />
      </View>
      {nameError ? (
        <Text style={styles.error}>Name length should be greater than 3</Text>
      ) : null}
      <View style={[styles.textView, styles.inputView]}>
        <TextInput
          style={styles.input}
          onChangeText={value => setEmail(value)}
          placeholder="Email..."
        />
      </View>
      {emailError ? <Text style={styles.error}>Wrong Email Format</Text> : null}
      <View style={[styles.button]}>
        <TouchableOpacity onPress={() => onButtonClick()}>
          <Text style={[styles.text, {color: 'brown'}]}>Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF8E5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textView: {
    elevation: 10,
    alignItems: 'center',
    padding: 35,
    marginVertical: 50,
    width: '80%',
    borderRadius: 5,
    textAlign: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: '#FF95C5',
  },
  inputView: {
    padding: 5,
    backgroundColor: '#FBF8F1',
    marginVertical: 10,
  },
  input: {
    fontSize: 15,
    color: 'black',
    fontWeight: '400',
  },
  button: {
    backgroundColor: '#FF95C5',
    width: '50%',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    margin: 20,
  },
  error: {
    color: '#E05D5D',
    margin: 5,
  },
});
