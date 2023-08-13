// your entry point
import { MenuProvider } from "react-native-popup-menu";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

export const FilterMenu = () => (
  <View>
    <Text>Hello world!</Text>
    <Menu>
      <MenuTrigger text="Select action" />
      <MenuOptions>
        <MenuOption onSelect={() => alert(`Save`)} text="Save" />
        <MenuOption onSelect={() => alert(`Delete`)}>
          <Text style={{ color: "red" }}>Delete</Text>
        </MenuOption>
        <MenuOption
          onSelect={() => alert(`Not called`)}
          disabled={true}
          text="Disabled"
        />
      </MenuOptions>
    </Menu>
  </View>
);
