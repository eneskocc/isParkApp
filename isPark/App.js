import * as React from 'react';
import {Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {store} from './app/redux/store';
import {Provider} from 'react-redux';

import {colors} from './app/config';

import Home from './app/screens/Home';

import {
  HomeStackScreen,
  SettingStackScreen,
  FavoriteStackScreen,

} from './app/screens';
const Tab = createBottomTabNavigator();

const TabScreens = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Favorite"
        component={FavoriteStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            const image = focused
              ? require('./app/assets/images/bottom/invitefriends.png')
              : require('./app/assets/images/bottom/invitefriends.png');
            return <Image style={{width: 25, height: 25}} source={image} />;
          },
        }}
      />
      <Tab.Screen
        name=" "
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            const image = focused
              ? require('./app/assets/images/bottom/Shape.png')
              : require('./app/assets/images/bottom/Shape.png');
            return <View style={{width:60,height:60,borderRadius:30,alignItems:'center',justifyContent:'center',backgroundColor:colors.green}}><Image style={{width: 25, height: 25,resizeMode:'contain'}} source={image} /></View>;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            const image = focused
              ? require('./app/assets/images/bottom/settings.png')
              : require('./app/assets/images/bottom/settings.png');
            return <Image style={{width: 25, height: 25}} source={image} />;
          },
        }}
      />

    </Tab.Navigator>
  );
};

export const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={TabScreens} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
