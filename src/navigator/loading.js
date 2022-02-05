import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet} from 'react-native';

function Loading() {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" color="#00ff00" />
    </SafeAreaView>
  );
}

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
