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
      <TouchableOpacity onPress={handleMenuOpen}>
        <View style={{ marginRight: 10, marginTop: 25 }}>
          <Icon name="tune" type="MaterialCommunityIcons" />
        </View>
      </TouchableOpacity>
      {isMenuOpen && <FilterMenu/>}
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
