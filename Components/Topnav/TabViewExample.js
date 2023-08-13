// import React, { useState } from "react";
// import { View, Text, StyleSheet, Dimensions } from "react-native";
// import { TabView, SceneMap, TabBar } from "react-native-tab-view";
// import { Colors } from "react-native/Libraries/NewAppScreen";

// const FirstRoute = () => (
//   <View style={[styles.scene, { backgroundColor: "#fff" }]}>
//     <Text>First Tab</Text>
//   </View>
// );

// const SecondRoute = () => (
//   <View style={[styles.scene, { backgroundColor: "#fff" }]}>
//     <Text>Second Tab</Text>
//   </View>
// );
// const ThirdRoute = () => (
//   <View style={[styles.scene, { backgroundColor: "#fff" }]}>
//     <Text>Third Tab</Text>
//   </View>
// );
// const FourthRoute = () => (
//   <View style={[styles.scene, { backgroundColor: "#fff" }]}>
//     <Text>Fourth Tab</Text>
//   </View>
// );

// const initialLayout = { width: Dimensions.get("window").width };

// const TabViewExample = () => {
//   const [index, setIndex] = useState(0);
//   const [routes] = useState([
//     { key: "appreciate", title: "Appreciate" },
//     { key: "employee", title: "Employee" },
//     { key: "third", title: "Third" },
//     { key: "fourth", title: "Fourth" },
//   ]);

//   const renderScene = SceneMap({
//     appreciate: FirstRoute,
//     employee: SecondRoute,
//     third: ThirdRoute,
//     fourth: FourthRoute,
//   });

//   const renderTabBar = (props) => (
//     <TabBar
//       {...props}
//       indicatorStyle={styles.indicator}
//       style={styles.tabBar}
//     />
//   );

//   return (
//     <TabView
//       navigationState={{ index, routes }}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       initialLayout={initialLayout}
//       renderTabBar={renderTabBar}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   scene: {
//     backgroundColor: Colors.primary,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     height: 35,
//     alignContent: "center",
//     paddingHorizontal: 14,
//   },
//   tabBar: {
//     backgroundColor: "#299647",
//   },
//   indicator: {
//     backgroundColor: "#fff",
//   },
// });

// export default TabViewExample;
