import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const LeftSwipe = (props) => {
  return (
    <TouchableOpacity
      style={styles.screen}
      onPress={() => {
        props.navigationData.navigation.navigate('add');
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
