import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

const circle = (props) => {
  let circleOpacity = 0.8;
  return (
    <View
      style={{
        ...styles.circle,
        ...{ backgroundColor: `${props.color}`, opacity: props.circleOpacity },
      }}
    ></View>
  );
};

const styles = StyleSheet.create({
  container: { margin: 5 },
  circle: { height: 48, width: 48, borderRadius: 24 },
});

export default circle;
