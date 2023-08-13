import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import ShareableComponent from "../../Common/Star/ShareableComponent";

export default function AppreciateHeader() {
  return (
    <View>
      <View style={styles.header}>
        <View style={{ display: "flex", flexDirection: "row", gap: 16 }}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="white"
            style={{ marginTop: 3 }}
          />
          <Text style={styles.headerText}>Peer Appreciate</Text>
        </View>
        <View style={styles.iconsContainer}>
          <ShareableComponent />
          <Ionicons
            name="ios-menu"
            size={24}
            color="white"
            style={styles.icon}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#299647",
    height: 80,

    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 12,
    marginTop: 17,
  },
});
