import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';

// import colors from './assets/colors/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

// Icon.loadFont();

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
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
