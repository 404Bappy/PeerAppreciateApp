import { View, Text, ScrollView } from "react-native";
import React from "react";
import Search from "../Search/Search";
import Divider from "../../Common/Devider/Devider";
import PeoplePoint from "../PeoplePoint/PeoplePoint";

export default function Employee() {
  return (
    <ScrollView>
      <View>
        <Search />
        <Divider />
        <PeoplePoint />
      </View>
    </ScrollView>
  );
}
