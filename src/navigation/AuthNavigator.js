import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Authentication/LoginScreen';
import SignUpScreen from '../screens/Authentication/SignUpScreen';
import ForgotPassword from '../screens/Authentication/ForgotPassword';
import OtpScreen from '../screens/Authentication/OtpScreen';
import HomePage from '../screens/BuyerScreens.js/HomeScreen';
import BuyerNavigator from './BuyerNavigator';
import SellerNavigator from './SellerNavigator';
const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="forgot" component={ForgotPassword} />
        <Stack.Screen name="otp" component={OtpScreen} />
        <Stack.Screen name="buyer" component={BuyerNavigator} />
        <Stack.Screen name="seller" component={SellerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
