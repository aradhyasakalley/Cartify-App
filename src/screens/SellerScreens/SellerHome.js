import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const SellerHome = () => {
  
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

export default SellerHome;

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderColor: 'black',
    backgroundColor: '#37306B',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
    width: 320,
    height: 66,
    marginBottom: 11,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
