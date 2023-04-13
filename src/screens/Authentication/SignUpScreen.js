import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PixelRatio} from 'react-native';
import {heightToDp, widthToDp} from '../../Responsive';
import TextField from '../../../components/AuthComponents/Textfield';
import Passwordfield from '../../../components/AuthComponents/Passwordfield';
import {useNavigation} from '@react-navigation/native';
import {width} from '../../../Constants';
import axios from 'axios';
const SignUpScreen = () => {
  // const {signIn} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('');
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const navigation = useNavigation();
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  // const handleSignup = () => {
  //   console.log(email, password, phoneNumber);
  //   // Create a user object with the input data
  //   const user = {
  //     username: username,
  //     email: email,
  //     password: password,
  //     address: address,
  //     Number: phoneNumber,
  //     role: role,
  //   };

  //   // Make a POST request to the backend server
  //   fetch('https://ecommerce-backend-0aa0.onrender.com/api/user/signup', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     credentials: 'include',
  //     body: JSON.stringify(user),
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //         // Signup successful
  //         Alert.alert('Success', 'User signup successful');
  //       } else {
  //         // Signup failed
  //         Alert.alert('Error', 'Failed to signup user');
  //       }
  //     })
  //     .catch(error => {
  //       // Error occurred

  //       console.error(error);
  //       Alert.alert('Error', 'Failed to connect to server');
  //     });
  // };

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        'https://ecommerce-backend-0aa0.onrender.com/api/user/signup',
        {
          username: username,
          email: email,
          password: password,
          address: address,
          Number: phoneNumber,
          role: role,
        },
      );
      console.log(response)

      // Handle success
      Alert.alert('Success', 'User registered successfully');
    } catch (error) {
      // Handle error
      Alert.alert('Error', 'Failed to register user');
    }
  };

  const onCreateAccPressed = () => {
    navigation.navigate('signup');
  };

  const handleUser = text => {
    setEmail(text);
  };

  const handleUserName = text => {
    setUsername(text);
  };
  const handlePassword = text => {
    setPassword(text);
  };
  const handleAddress = text => {
    setAddress(text);
  };
  const handlePhone = text => {
    setPhoneNumber(text);
  };
  const handleRole = text => {
    setRole(text);
  };

  return (
    <ScrollView>
      {/* header */}
      <Ionicons
        name="arrow-back"
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.header}>Create a new account</Text>

      {/* textfields */}
      <View style={styles.textfieldContainer}>
        <TextField title={'Create a username'} function={handleUserName} />
      </View>
      <View style={styles.textfieldContainer}>
        <TextField title={'Email'} function={handleUser} />
      </View>

      <View style={styles.textfieldContainer}>
        <Passwordfield title={'Your Password'} function={handlePassword} />
      </View>
      <View style={styles.textfieldContainer}>
        <TextField title={'Enter your address'} function={handleAddress} />
      </View>
      <View style={styles.textfieldContainer}>
        <TextField title={'Phone number'} function={handlePhone} />
      </View>
      <View style={styles.textfieldContainer}>
        <TextField title={'Select role'} function={handleRole} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignup} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

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
    color: 'black',
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
    fontWeight: 'bold',
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
