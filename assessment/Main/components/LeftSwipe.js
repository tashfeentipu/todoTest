import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {useDispatch} from 'react-redux';
import {todoCompleted} from '../store/TodoActions';

const LeftSwipe = (props) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.screen}
      onPress={() => {
        dispatch(todoCompleted(props.id));
      }}>
      <Text>Finish</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '20%',
    padding: 10,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LeftSwipe;
