// // your entry point
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
//   <View>
//     <Text>Hello world!</Text>
//     <Menu>
//       <MenuTrigger text="Select action" />
//       <MenuOptions>
//         <MenuOption onSelect={() => alert(`Save`)} text="Save" />
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

import React from "react";
import { View, Text } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

const FilterMenu = () => {
  return (
    <View>
      <Menu>
        <MenuTrigger text="Open Menu" />
        <MenuOptions>
          <MenuOption onSelect={() => alert("Option 1")}>
            <Text>Option 1</Text>
          </MenuOption>
          <MenuOption onSelect={() => alert("Option 2")}>
            <Text>Option 2</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default FilterMenu;
