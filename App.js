/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
      <Text>こんにちは世界</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backGroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default App;
