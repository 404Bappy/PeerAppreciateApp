import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AppreciateHeader from "./Components/Header/AppreciateHeader";
import { NavigationContainer } from "@react-navigation/native";
import TopTabGroup from "./Components/Topnav/Topnav";
import Search from "./Components/Search/Search";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AppreciateHeader />
        <TopTabGroup />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
