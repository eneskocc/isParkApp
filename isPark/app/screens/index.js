import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
//Home
import Home from './Home';
import Favorite from './Favorite';
import Settings from './Settings';
import Map from './Map';


export const HomeStack = createNativeStackNavigator();

function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Map" component={Map} />


    </HomeStack.Navigator>
  );
}
export const SettingStack = createNativeStackNavigator();

function SettingStackScreen({navigation}) {
  return (
    <SettingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SettingStack.Screen name="Setting" component={Settings} />
      <HomeStack.Screen name="Map" component={Map} />

    </SettingStack.Navigator>
  );
}

export const FavoriteStack = createNativeStackNavigator();

function FavoriteStackScreen({navigation}) {
  return (
    <FavoriteStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <FavoriteStack.Screen name="Favorite" component={Favorite} />
      <HomeStack.Screen name="Map" component={Map} />

    </FavoriteStack.Navigator>
  );
}




export {
  HomeStackScreen,
  SettingStackScreen,
 FavoriteStackScreen,
};
