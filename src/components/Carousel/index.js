import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DataBener from '../../assets/Json/banners.json';
const Carousel = () => {
  return (
    <View style={styles.wrapper}>
      <Swiper autoplayTimeout={2} autoplay>
        {DataBener.data.map((d, i) => {
          return (
            <View style={styles.slide1} key={i}>
              <Image
                source={{
                  uri: d.url,
                }}
                style={{width: wp(100), height: hp(30)}}
                resizeMode="contain"
              />
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  wrapper: {height: hp(38)},
  slide1: {
    height: hp(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
