import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {BottomNavigator} from '../components';
import {Home} from '../pages';
const screenOptions = {headerShown: false};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Contoh PIPQ" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="DB Salik" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Setting" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Search" component={Home} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions} initialRouteName="MainApp">
        <Stack.Screen name={'MainApp'} component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
