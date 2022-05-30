import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';

Feather.loadFont();

const Home = () => {
  return (
    <View style={styles.container}>
      {/*Header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.profileImage}
          />
          {/* Icon */}
          <Feather name="menu" size={24} color={colors.textDark} />
        </View>
      </SafeAreaView>

      {/* Titles */}
      <View style={styles.titlesWrapper}>
        <Text style={styles.titlesSubtitle}>Food</Text>
        <Text style={styles.titlesTitle}>Delivery</Text>
      </View>

      {/* Search */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: 'center',
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },

  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  titlesSubtitle: {
    fontFamily: 'Poppins-regular',
    color: colors.textDark,
    fontSize: 16,
  },

  titlesTitle: {
    fontFamily: 'Poppins-Bold',
    color: colors.textDark,
    fontSize: 32,
    marginTop: 5,
  },
});
