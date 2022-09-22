import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {colors, fonts} from '../../utils';

const Card = props => {
  const {url, name, price} = props;
  return (
    <View style={styles.page}>
      <Image source={{uri: url}} style={styles.img} resizeMode="contain" />
      <View style={styles.detailSty}>
        <Text style={styles.txtName} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.priceSty}>Rp. {price}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.greySmoot,
    alignItems: 'center',
    width: wp(35),
    height: hp(20),
    marginRight: wp(2),
    borderRadius: wp(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  img: {
    width: wp(34),
    height: hp(12),
    borderRadius: wp(2),
  },

  detailSty: {
    justifyContent: 'flex-start',
    width: wp(35),
    paddingHorizontal: wp(2),
    flex: 1,
  },
  txtName: {fontSize: 16, fontFamily: fonts.bold, color: colors.black},
  priceSty: {fontSize: 14, fontFamily: fonts.normal, color: 'black'},
});
