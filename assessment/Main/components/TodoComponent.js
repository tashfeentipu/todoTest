import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import LeftSwipe from './LeftSwipe';
import RightSwipe from './RightSwipe';

const TodoComponent = (props) => {
  const {...navigationData} = props;
  return (
    <Swipeable
      renderLeftActions={() => (
        <LeftSwipe navigationData={navigationData} id={props.payload.id} />
      )}
      renderRightActions={() => (
        <RightSwipe navigationData={navigationData} id={props.payload.id} />
      )}>
      <View style={styles.screen}>
        <View
          style={{
            ...styles.circle,
            ...{backgroundColor: `${props.payload.color}`},
          }}
        />
        <View style={styles.contents}>
          <Text
            style={{
              ...styles.contentTitle,
              ...{
                textDecorationLine: props.payload.completed
                  ? 'line-through'
                  : null,
                color: props.payload.completed ? 'gray' : 'black',
              },
            }}>
            {props.payload.task}
          </Text>
          <Text
            style={{
              ...styles.contentDue,
              ...{color: props.payload.completed ? 'gray' : 'black'},
            }}>
            {props.payload.timeFrame}
          </Text>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  circle: {width: 16, height: 16, borderRadius: 8},
  contents: {paddingLeft: 15, flexDirection: 'column'},
  contentTitle: {
    fontSize: 18,
    paddingBottom: 10,
    // fontFamily: "S FPro Text",
  },
  contentDue: {width: 300, height: 14, fontSize: 12},
});

export default TodoComponent;
