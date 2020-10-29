import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import TodoComponent from "../components/TodoComponent";

import { useSelector } from "react-redux";

const feedScreen = (props) => {
  const todoArray = useSelector((state) => state.todoReducer.TodoList);

  const renderGridItem = (itemData) => {
    return (
      <TodoComponent payload={itemData.item} navigation={props.navigation} />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList data={todoArray} renderItem={renderGridItem} />
    </View>
  );
};

feedScreen.navigationOptions = (navigationData) => {
  return {
    title: "Todo",
    headerLeft: null,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});

export default feedScreen;
