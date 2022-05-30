import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// import colors from './assets/colors/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const App = () => {
  return <Text style={styles.Primary}>Joel is good</Text>;
};

const styles = StyleSheet.create({
  White: {
    background: '#F9F9FB',
  },
  TextDark: {
    color: '#313234',
  },

  Primary: {
    color: '#F5CA48',
  },
  Secondary: {
    color: '#F26C68',
  },
  TextLight: {
    color: '#CDCDCD',
  },
  Price: {
    color: '#E4723C',
  },
});

export default App;
