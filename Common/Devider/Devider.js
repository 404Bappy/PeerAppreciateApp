import React from "react";
import { View, StyleSheet } from "react-native";

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    width: 574,
    height: 2,
    backgroundColor: "#EAECF0",

    marginTop: 5,
  },
});

export default Divider;
