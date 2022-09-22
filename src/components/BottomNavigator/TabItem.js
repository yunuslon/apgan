import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {colors, fonts, Icon} from '../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const IconCmp = () => {
    if (title === 'Home') {
      return active ? (
        <Icon nameIC={'home'} typeIC={'Entypo'} colorIC={colors.white} sizeIC={wp(7)} />
      ) : (
        <Icon nameIC={'home'} typeIC={'Entypo'} colorIC={colors.black} sizeIC={wp(7)} />
      );
    }
    if (title === 'Contoh PIPQ') {
      return active ? (
        <Icon nameIC={'info'} typeIC={'Feather'} colorIC={colors.white} sizeIC={wp(7)} />
      ) : (
        <Icon nameIC={'info'} typeIC={'Feather'} colorIC={colors.black} sizeIC={wp(7)} />
      );
    }
    if (title === 'DB Salik') {
      return active ? (
        <Icon nameIC={'download'} typeIC={'AntDesign'} colorIC={colors.white} sizeIC={wp(7)} />
      ) : (
        <Icon nameIC={'download'} typeIC={'AntDesign'} colorIC={colors.black} sizeIC={wp(7)} />
      );
    }
    if (title === 'Setting') {
      return active ? (
        <Icon nameIC={'menu-outline'} typeIC={'Ionicons'} colorIC={colors.white} sizeIC={wp(7)} />
      ) : (
        <Icon nameIC={'menu-outline'} typeIC={'Ionicons'} colorIC={colors.black} sizeIC={wp(7)} />
      );
    }
    if (title === 'Search') {
      return active ? (
        <Icon nameIC={'search'} typeIC={'Feather'} colorIC={colors.white} sizeIC={wp(7)} />
      ) : (
        <Icon nameIC={'search'} typeIC={'Feather'} colorIC={colors.black} sizeIC={wp(7)} />
      );
    }
    return <Icon nameIC={'home'} typeIC={'Entypo'} colorIC={colors.white} sizeIC={wp(7)} />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
      <IconCmp />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
  text: active => ({
    fontSize: 10,
    color: active ? colors.white : colors.black,
    fontFamily: fonts.semiBold,
    marginTop: 4,
    textAlign: 'center',
  }),
  imgIcn: {width: wp(9), height: wp(9)},
});
