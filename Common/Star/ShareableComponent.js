import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import React from "react";

export default function ShareableComponent() {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginRight: 15,
        }}
      >
        <View style={styles.employee}>
          <View ew style={styles.ic}></View>
          <View style={{ display: "flex", flexDirection: "row", gap: -120 }}>
            <View
              style={{
                width: 50,
                height: 24,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 99,
                backgroundColor: "#FEFBE8",
                marginTop: -2,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 7,
                  padding: 1,
                }}
              >
                <View
                  style={{
                    height: 16,
                    marginTop: 4,

                    alignItems: "center",
                    borderRadius: 99,
                    backgroundColor: "#EAAA08",
                  }}
                >
                  <MaterialCommunityIcons
                    name="star-outline"
                    size={16}
                    color="white"
                  />
                </View>
                <View style={{ marginBottom: 4 }}>
                  <Text style={{ marginTop: 1, fontWeight: "500" }}>700</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Pic: {
    height: 40,
    width: 40,
    borderRadius: 99,
    borderColor: "#FFF",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    width: 48,
    height: 48,
    borderRadius: 99,
  },
  employee: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  txtContainer: {
    marginLeft: 6,
  },
  Icon: {
    height: 24,
    width: 24,
    marginLeft: 100,
    marginTop: 30,
    position: "fixed",
  },
  badge: {
    right: 91,
    top: 0,
    backgroundColor: "#D92D20",
    padding: 0,
    paddingHorizontal: 4,
    borderRadius: 100,
    marginLeft: 100,
  },
  text: {
    color: "white",
  },
});
