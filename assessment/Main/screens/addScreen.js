import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  StyleSheet,
  Keyboard,
} from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Circle from '../components/Circle';

import {useDispatch} from 'react-redux';
import {todoAdd} from '../store/TodoActions';

import {Colors, buttonSize} from '../constants/Const';

const addScreen = (props) => {
  const dispatch = useDispatch();

  const colorArray = ['#498fe1', '#acd280', '#f3bfc6', '#eec3f7', '#eed6af'];

  const [title, setTitle] = useState('');
  const [due, setDue] = useState('');
  const [tag, setTag] = useState('#498fe1');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    Keyboard.dismiss();
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDue(date.toString());
    hideDatePicker();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior="padding"
        style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="What do you want to do"
            multiline={true}
            value={title}
            onChangeText={(text) => {
              if (text !== '') {
                setTitle(text);
              }
            }}
            style={{...styles.input, ...styles.textArea}}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="When is it due?"
            value={due}
            onFocus={showDatePicker}
            style={{...styles.input, ...styles.textBox}}
          />
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <View style={styles.tagContainer}>
          {colorArray.map((element) => {
            return (
              <TouchableOpacity
                style={styles.container}
                onPress={() => setTag(element)}>
                <Circle
                  color={element}
                  key={element}
                  circleOpacity={element === tag ? 1 : 0.5}
                />
              </TouchableOpacity>
            );
          })}
        </View>

        <Button
          color={Colors.button}
          title="Add"
          style={styles.button}
          onPress={() => {
            dispatch(todoAdd({title: title, due: due, color: tag}));
            Keyboard.dismiss();
            setDue('');
            setTitle('');
          }}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

addScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'Add',
    headerLeft: null,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    alignItems: 'center',
    margin: 10,
  },
  textBox: {
    height: 48,
  },
  textArea: {
    height: 100,
  },
  input: {
    borderColor: Colors.textArea,
    borderWidth: 1,
    width: 328,
    borderRadius: 5,
    padding: 15,
  },
  tagContainer: {flexDirection: 'row'},
  container: {margin: 10},
  buttonContainer: {margin: 10},
  button: {width: buttonSize.width, height: buttonSize.height},
});

export default addScreen;
