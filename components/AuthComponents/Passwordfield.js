import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {backDropColor, subtextColor, width} from '../../Constants';
import {PixelRatio} from 'react-native';
const Passwordfield = (props) => {
  const [visible, setVisibility] = useState(false);
  const icon = !visible ? 'eye-off' : 'eye';
  return (
    <View style={styles.container}>
      <View style={styles.icon2}>
        <Icon
          name="lock-closed"
          color={'#37306B'}
          onPress={() => setVisibility(!visible)}
          size={22}
          style={{paddingTop: 12}}
        />
      </View>
      <TextInput
        placeholder={props.title}
        placeholderTextColor="#37306B"
        textAlign="left"
        style={styles.text}
        onChangeText={props.function}
        secureTextEntry={!visible}
      />
      <View style={styles.icon}>
        <Icon
          name={icon}
          color={'#37306B'}
          onPress={() => setVisibility(!visible)}
          size={22}
          style={{paddingTop: 12}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom:PixelRatio.getFontScale() * 20,

  },
  text: {
    fontFamily: 'OpenSans-Regular',
    backgroundColor: 'white',
    height: 56,
    width: width * 0.61,
    borderColor:'white',
    fontSize: 15,
    paddingLeft: 22,
    color: subtextColor,
    
  },
  icon: {
    backgroundColor: 'white',
    width: width * 0.1,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    paddingTop:PixelRatio.getFontScale() * 2,
    paddingLeft:PixelRatio.getFontScale() * 5,
  },
  icon2: {
    backgroundColor: 'white',
    width: width * 0.1,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    paddingTop:PixelRatio.getFontScale() * 2,
    paddingLeft:PixelRatio.getFontScale() * 18,

  },
});

export default Passwordfield;