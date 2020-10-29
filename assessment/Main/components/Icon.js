import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const icon = (props) => {
  return (
    <View style={{width: props.size, height: props.size}}>
      <Image source={require('../assets/Login/logo.png')} style={styles.main} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
  },
});

export default icon;
