import React, {useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {useSelector} from 'react-redux';

import {Colors} from '../constants/Const';

const profileScreen = (props) => {
  const headerTitle = useSelector((state) => state.todoReducer.headerName);

  useEffect(() => {
    props.navigation.setParams({headerTitle: headerTitle});
  }, []);

  return (
    <TouchableOpacity
      style={styles.screen}
      onPress={() => {
        props.navigation.pop();
      }}>
      <View style={styles.main}>
        <Text style={styles.text}>Logout</Text>
      </View>
    </TouchableOpacity>
  );
};

profileScreen.navigationOptions = (navigationData) => {
  const title = navigationData.navigation.getParam('headerTitle');
  return {
    headerTitle: `Hello, ${title}`,
    headerLeft: null,
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  main: {
    width: 328,
    height: 48,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: 'rgba(255,59,48,0.25)',
    borderWidth: 1,
    borderRadius: 4,
  },
  text: {
    color: Colors.logoutButton,
  },
});

export default profileScreen;
