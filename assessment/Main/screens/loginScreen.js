import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import {useDispatch} from 'react-redux';
import {emitName} from '../store/TodoActions';
import {Colors, buttonSize} from '../constants/Const';

const loginScreen = (props) => {
  const imageUrl = '../assets/Login/logo.png';

  const dispatch = useDispatch();

  const [name, setName] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior="padding"
        style={styles.screen}>
        <View style={styles.imageContainer}>
          <Image source={require(imageUrl)} style={styles.image} />
          <Text style={styles.logoTitle}> Todo </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            color={Colors.button}
            title="Login"
            style={styles.button}
            onPress={() => {
              if (name !== '') {
                props.navigation.navigate('tabNav');
                dispatch(emitName(name));
              }
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

loginScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: '',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '75%',
  },
  image: {
    width: 88,
    height: 96,
  },
  inputContainer: {
    alignItems: 'center',
    margin: 10,
  },
  input: {
    borderColor: Colors.textArea,
    borderWidth: 1,
    width: 328,
    height: 48,
    borderRadius: 5,
    padding: 15,
  },
  button: {width: buttonSize.width, height: buttonSize.height},
  buttonContainer: {margin: 10},
  logoTitle: {fontSize: 24, fontWeight: '500'},
});

export default loginScreen;
