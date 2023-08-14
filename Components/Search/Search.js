import { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { FilterMenu } from "../FilterMenu/FilterMenu";

const Search = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
      }}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search Peers"
          value={0}
          onChangeText={""}
          onSubmitEditing={""}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 6,
          alignItems: "flex-start",
        }}
      >
        <View style={{ marginRight: 10, marginTop: 15 }}>
          <TouchableOpacity onPress={handleMenuOpen}>
            <Icon name="tune" type="MaterialCommunityIcons" />
          </TouchableOpacity>
        </View>

        {isMenuOpen && <FilterMenu />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    marginTop: 15,
    padding: 5,
  },
});

export default Search;
