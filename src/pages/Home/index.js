import {Platform, SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar backgroundColor={'transparent'} translucent animated={true} barStyle="dark-content" />
      <Header />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
