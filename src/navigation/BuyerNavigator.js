import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PixelRatio} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../screens/BuyerScreens/HomeScreen';
import SearchScreen from '../screens/BuyerScreens/SearchScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import UserProfile from '../screens/BuyerScreens/UserProfile';
import UserCart from '../screens/BuyerScreens/UserCart';

const BuyerNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'home') {
            iconName = 'home';
          } else if (route.name === 'search') {
            iconName = 'search';
          } else if (route.name === 'profile') {
            iconName = 'user';
          } else if (route.name === 'cart') {
            iconName = 'shopping-cart';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { height: PixelRatio.getFontScale() * 60 },
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        headerShown:false,tabBarShowLabel:false
      })}
     
    >
      <Tab.Screen name="home" component={HomePage} />
      <Tab.Screen name="search" component={SearchScreen} />
      <Tab.Screen name="profile" component={UserProfile} />
      <Tab.Screen name="cart" component={UserCart} />
    </Tab.Navigator>
  );
};

export default BuyerNavigator;

const styles = StyleSheet.create({});
