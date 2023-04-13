import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Alert
  } from 'react-native';
  import React, {useContext, useState} from 'react';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import {PixelRatio} from 'react-native';
  import {heightToDp, widthToDp} from '../../Responsive';
  import TextField from '../../../components/AuthComponents/Textfield';
  import Passwordfield from '../../../components/AuthComponents/Passwordfield';
  import {useNavigation} from '@react-navigation/native';
  import { width } from '../../../Constants';
  import axios from 'axios';
  const LoginScreen = () => {
    // const {signIn} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
      try {
        const response = await axios.post('https://ecommerce-backend-0aa0.onrender.com/api/user/login', {
          email: email,
          password: password
        });
  
        // Handle success
        navigation.navigate('seller')
        Alert.alert('Success', 'Logged in successfully');
      } catch (error) {
        // Handle error
        Alert.alert('Error', 'Failed to login');
      }
    };




    const signInPressed = () => {
      navigation.navigate('buyer')
    };
    const onCreateAccPressed =() =>{
      navigation.navigate('signup')
    }
    const handleEmail = (text) => {
      setEmail(text);
    };
  
    const handlePassword = (text) => {
      setPassword(text);
    };
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const navigation = useNavigation();
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
      <ScrollView>
        {/* header */}
        <Ionicons
          name="arrow-back"
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.header}>Welcome Back !</Text>
  
        {/* textfields */}
        <View style={styles.textfieldContainer}>
          
          <TextField title={'Email'} function={handleEmail} />
        </View>
        <View style={styles.textfieldContainer}>
          
          <Passwordfield title={'Your Password'} function={handlePassword} />
        </View>
  
        <View style={styles.bottomBar}>
          {/* <Switch value={isSwitchOn} onValueChange={onToggleSwitch} /> */}
          <Text style={styles.text}>Remember me</Text>
          <View style={styles.forgot}>
            <TouchableOpacity style={styles.text}>
              <Text style={styles.text}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onCreateAccPressed} style={styles.button2}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    );
  };
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({
    backButton: {
      color: 'black',
      fontSize: PixelRatio.getFontScale() * 24,
      alignSelf: 'flex-start',
      marginTop: PixelRatio.getFontScale() * 40,
      marginLeft: PixelRatio.getFontScale() * 20,
    },
    forgot: {
      paddingLeft: PixelRatio.getFontScale() * 16,
    },
    header: {
      color:'black',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: PixelRatio.getFontScale() * 30,
      marginBottom: PixelRatio.getFontScale() * 50,
      marginLeft: PixelRatio.getFontScale() * 35,
    },
    textfieldContainer: {
      alignItems: 'center',
      marginBottom: PixelRatio.getFontScale() * 0,
    },
    textfieldHeader: {
      alignSelf: 'flex-start',
      fontWeight: 'bold',
      color: 'gray',
      marginLeft: PixelRatio.getFontScale() * 38,
      marginBottom: PixelRatio.getFontScale() * 10,
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
    button2: {
        borderColor: 'black',
        backgroundColor: '#66347F',
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
      fontWeight:'bold'
    },
    buttonContainer: {
      alignItems: 'center',
      paddingTop: PixelRatio.getFontScale() * 50,
    },
    bottomBar: {
      flexDirection: 'row',
      marginLeft: PixelRatio.getFontScale() * 35,
      alignSelf: 'flex-start',
      justifyContent: 'flex-start',
      marginTop: PixelRatio.getFontScale() * 25,
    },
    text: {
      fontSize: 14,
      color: '#120D26',
      marginLeft: PixelRatio.getFontScale() * 20,
    },
  });