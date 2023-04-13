import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PixelRatio} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SellerHome from '../screens/SellerScreens/SellerHome';
import SellerProfile from '../screens/SellerScreens/SellerProfile';
import AddProduct from '../screens/SellerScreens/AddProduct';
import ViewListedProducts from '../screens/SellerScreens/ViewListedProducts';
import RemoveProduct from '../screens/SellerScreens/RemoveProduct';
import EditProduct from '../screens/SellerScreens/EditProduct';

const SellerNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'shome') {
            iconName = 'home';
          } else if (route.name === 'sprofile') {
            iconName = 'user';
          } else if (route.name === 'add') {
            iconName = 'plus-circle';
          } else if (route.name === 'edit') {
            iconName = 'edit';
          } else if (route.name === 'remove') {
            iconName = 'minus-circle';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {height: PixelRatio.getFontScale() * 60},
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="add" component={AddProduct} />
      <Tab.Screen name="remove" component={RemoveProduct} />
      <Tab.Screen name="edit" component={EditProduct} />
      <Tab.Screen name="shome" component={SellerHome} />
      <Tab.Screen name="sprofile" component={SellerProfile} />
    </Tab.Navigator>
  );
};

export default SellerNavigator;

const styles = StyleSheet.create({});
