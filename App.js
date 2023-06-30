import React, { Component } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

const SCREEN_WIDTH_THRESHOLD = 600;

const data = [
  require("./assets/splash.png"),
  require("./assets/splash.png"),
  require("./assets/splash.png"),
  require("./assets/splash.png"),
  require("./assets/splash.png"),
  require("./assets/splash.png"),
];

const screenWidth = Dimensions.get("window").width;
const columnCount = screenWidth > SCREEN_WIDTH_THRESHOLD ? 4 : 2;
const App = () => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <Image source={item} style={styles.item} key={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 5,
  },
  item: {
    width: `${100 / columnCount}%`,
    height: 100,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },
});

export default App;
