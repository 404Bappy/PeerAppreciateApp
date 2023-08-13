import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
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
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
        />
      </View>
      <TouchableOpacity>
        <View style={{ marginRight: 10, marginTop: 25 }}>
          <Icon name="tune" type="MaterialCommunityIcons" />
        </View>
      </TouchableOpacity>
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
