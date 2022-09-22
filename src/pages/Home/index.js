import {Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CardProduct, Carousel, Gap, Header} from '../../components';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DataItem from '../../assets/Json/main-menu.json';
import DataProduct from '../../assets/Json/products.json';

const Home = () => {
  console.log(DataProduct);

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar backgroundColor={'transparent'} translucent animated={true} barStyle="dark-content" />
      <Header />
      <ScrollView>
        <Carousel />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.conItem}>
            {DataItem.data.map((d, i) => {
              return (
                <View style={styles.item} key={i}>
                  <Image
                    source={{
                      uri: d.icon,
                    }}
                    style={styles.imgItem}
                  />
                  <Text style={styles.txtItem}>{d.name}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <Gap height={hp(4)} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.conProduct}>
            {DataProduct.data.map((d, i) => {
              return <CardProduct key={i} url={d.cover} price={d.price} name={d.name} />;
            })}
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  conItem: {flexDirection: 'row', marginHorizontal: wp(2)},
  conProduct: {flexDirection: 'row', paddingHorizontal: wp(2), paddingVertical: wp(2)},
  item: {
    height: hp(10),
    paddingHorizontal: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgItem: {width: wp(12), height: wp(12)},
  txtItem: {fontSize: 15, fontWeight: '600'},
});
