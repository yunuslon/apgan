import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../utils';
import {BarIndicator} from 'react-native-indicators';
const Loading = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <BarIndicator color={colors.red} size={wp(10)} count={3} />
      </View>
    </SafeAreaView>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(100),
    height: hp(100),
  },
  wrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: wp(25),
    height: wp(25),
    borderRadius: wp(4),
  },
});
