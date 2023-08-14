
import {
  Menu,
  MenuOptions,
  showMenu,
  MenuOption,
  hideMenu,
  MenuTrigger,
  MenuItem,
  visible,
  MenuDivider,
} from "react-native-popup-menu";
import { View } from "react-native";
import { Text } from "react-native-elements";

export const FilterMenu = () => (
  <View style={{ backgroundColor: "#5456" }}>
    <Text>Hello world!</Text>
    <Menu
      visible={visible}
      anchor={<Text onPress={showMenu}>Show menu</Text>}
      onRequestClose={hideMenu}
    >
      <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
      <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
      <MenuItem disabled>Disabled item</MenuItem>
     
      <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
    </Menu>
  </View>
);
