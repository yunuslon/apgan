import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Provider, useSelector} from 'react-redux';
import {Loading} from './components';
import store from './redux/store';
import Routes from './routes';
import {colors} from './utils';
import SplashScreen from 'react-native-splash-screen';

const MainApp = () => {
  const {isLoading} = useSelector(state => state.globalReducer);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.page}>
      <FlashMessage position="top" />
      <Routes />
      {isLoading && <Loading />}
    </View>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
});
