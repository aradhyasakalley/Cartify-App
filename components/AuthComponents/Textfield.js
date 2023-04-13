/* Text field for sign in/sign up page */
import React from 'react';
import {TextInput, StyleSheet, PixelRatio} from 'react-native';
import {backDropColor, subtextColor, width} from '../../Constants';

const TextField = (props) => {
  return (
    <TextInput
      style={styles.textinput}
      placeholder={props.title}
      placeholderTextColor="#37306B"
      textAlign="left"
      onChangeText={props.function}
    />
  );
};

const styles = StyleSheet.create({
  textinput: {
    fontFamily: 'OpenSans-Regular',
    backgroundColor: 'white',
    height: 56,
    width: width * 0.81,
    borderRadius: 10,
    borderColor:'#ebe7e7',
    fontSize: 15,
    paddingLeft: 22,
    color: subtextColor,
    marginBottom:PixelRatio.getFontScale() * 20,
    
  },
});

export default TextField;
