import React from "react";
import { TouchableOpacity, Text, Alert, StyleSheet } from "react-native";

import { useDispatch } from "react-redux";
import { todoDelete } from "../store/TodoActions";

const RightSwipe = (props) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={styles.screen}
      onPress={() => {
        Alert.alert(
          "Confirmation",
          "Are You sure you want to delete this Todo?",
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            { text: "OK", onPress: () => dispatch(todoDelete(props.id)) },
          ]
        );
      }}
    >
      <Text>Delete</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "20%",
    padding: 10,
    backgroundColor: "red",
    justifyContent: "center",
  },
});

export default RightSwipe;
