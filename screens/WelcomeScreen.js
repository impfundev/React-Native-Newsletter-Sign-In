import * as React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require('../assets/little-lemon-logo.png')}
          resizeMode='contain'
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
        <Text style={styles.taglineText}>Little Lemon, your local Mediterranean Bistro</Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Subscribe')}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  taglineText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 60,
    paddingHorizontal: 60,
  },
  button: {
    backgroundColor: '#495E57',
    marginVertical: 30,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    paddingVertical: 10,
  }
})

export default WelcomeScreen;
