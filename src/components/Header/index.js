import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fonts, Icon} from '../../utils';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {logo} from '../../assets';

const Header = () => {
  return (
    <View style={styles.page}>
      <Image source={logo} style={styles.logoSty} />
      <View style={styles.wrapper}>
        <Icon nameIC={'search'} typeIC={'Feather'} colorIC={colors.white} sizeIC={wp(6)} />
        <TextInput placeholder="Cari yang anda inginkan" style={styles.input} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.red,
    height: hp(10),
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: hp(1),
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
  },
  logoSty: {width: wp(10), height: wp(10)},
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.white,
    paddingHorizontal: wp(2),
    width: wp(70),
    height: hp(5),
    borderRadius: wp(2),
  },
  input: {
    fontSize: 15,
    fontFamily: fonts.normal,
    textAlignVertical: 'center',
    color: colors.white,
    flex: 1,
    marginHorizontal: wp(2),
  },
});
