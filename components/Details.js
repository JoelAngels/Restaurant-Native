import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';

const Details = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Feather name="chevron-left" size={12} color={colors.textDark} />
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <MaterialCommunityIcons
              name="star"
              size={12}
              color={colors.white}
            />
          </View>
        </View>
      </SafeAreaView>

      {/* Titles */}
      <View style={styles.titlesWrapper}>
        <Text style={styles.title}>{item.title}</Text>
      </View>

      {/* Price */}
      <View style={styles.priceWrapper}>
        <Text style={styles.priceText}>${item.price}</Text>
      </View>

      {/* Pizza Info */}

      <View style={styles.infoWrapper}>
        <View style={styles.infoLeftWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Size</Text>
            <Text style={styles.infoItemText}>
              {item.sizeName} {item.sizeNumber}"
            </Text>
          </View>

          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Crust</Text>
            <Text style={styles.infoItemText}>{item.crust}</Text>
          </View>

          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Delivery</Text>
            <Text style={styles.infoItemText}>{item.deliveryTime} mins</Text>
          </View>
        </View>
        <View style={styles.infoRightWrapper}>
          <Image source={item.image} style={styles.itemImage} />
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },

  headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 2,
  },

  titlesWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },

  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: colors.textDark,
    width: '50%',
  },

  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },

  priceText: {
    color: colors.price,
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
  },

  infoWrapper: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  infoLeftWrapper: {
    paddingLeft: 20,
  },

  infoItemWrapper: {
    marginBottom: 20,
  },

  infoItemTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.textLight,
  },

  infoItemText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: colors.textDark,
  },

  itemImage: {
    resizeMode: 'contain',
    marginLeft: 50,
  },

  ingredientsWrapper: {
    marginTop: 40,
  },
});
