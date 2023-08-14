// import { MenuProvider } from "react-native-popup-menu";
// import {
//   Menu,
//   MenuOptions,
//   MenuOption,
//   MenuTrigger,
// } from "react-native-popup-menu";
// import { View } from "react-native";
// import { Text } from "react-native-elements";

// export const FilterMenu = () => (
//   <View style={{ backgroundColor: "#5456" }}>
//     <Text>Hello world!</Text>
//     <Menu>
//       <MenuTrigger text="Select action" />
//       <MenuOptions>
//         <MenuOption onSelect={() => alert(`Save`)} text="HI There" />
//         <MenuOption onSelect={() => alert(`Delete`)}>
//           <Text style={{ color: "red" }}>Delete</Text>
//         </MenuOption>
//         <MenuOption
//           onSelect={() => alert(`Not called`)}
//           disabled={true}
//           text="Disabled"
//         />
//       </MenuOptions>
//     </Menu>
//   </View>
// );

import { TouchableOpacity, View, Text } from "react-native";
import React, { useState } from "react";

export default function FilterMenu() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <TouchableOpacity>
        <Icon name="tune" type="MaterialCommunityIcons" />
      </TouchableOpacity>
      <Modal trans={visible}>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: "red" }}
          
        ></SafeAreaView>
      </Modal>
    </>
  );
}
