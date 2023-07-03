import React, { useState } from 'react';
import { validateEmail } from '../utils';
import Button from '../components/Button';
import {
  View,
  Text,
  Alert,
  Image,
  TextInput,
  Pressable,
  StyleSheet
} from 'react-native';

const SubscribeScreen = () => {
  const [email, onChangeEmail] = useState('');
  const isEmailValid = validateEmail(email);

  return(
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.headerImage}
          source={require('../assets/little-lemon-logo-grey.png')}
          resizeMode='contain'
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
        <Text style={styles.headerText}>
          Subscribe to our Newsletter for our latest delicious recipes
        </Text>
      </View>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        placeholder='type your email address'
        keyboardType='email-address'
      />
      <Button
        onPress={() => {
          Alert.alert("Thanks for subscribing, stay tuned!");
        }}
        disabled={!isEmailValid}
      >
        Subscribe
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  headerWrapper: {
    alignItems: 'center',
  },
  headerImage: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 30,
  },
  inputBox: {
    height: 40,
    marginVertical: 24,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    paddingVertical: 10,
  },
})

export default SubscribeScreen;
