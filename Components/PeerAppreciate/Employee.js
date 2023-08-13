import { View, Text, ScrollView } from "react-native";
import React from "react";
import Search from "../Search/Search";
import Divider from "../../Common/Devider/Devider";
import PeoplePoint from "../PeoplePoint/PeoplePoint";
import { MenuProvider } from "react-native-popup-menu";

export default function Employee() {
  return (
    <ScrollView>
      <MenuProvider>
        <View>
          <Search />
          <Divider />
          <PeoplePoint />
        </View>
      </MenuProvider>
    </ScrollView>
  );
}
