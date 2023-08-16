import { MenuProvider } from "react-native-popup-menu";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { View } from "react-native";
import { Text } from "react-native-elements";

import Icon from "react-native-vector-icons/AntDesign";

export const FilterMenu = () => (
  <View
    style={{
      backgroundColor: "#fff",
      height: 196,
      width: 200,
      shadowColor: "gray",
      shadowOffset: { width: 0, height: 0 },
      padding: 10,
      elevation: 10,
      shadowRadius: 4,
      overflow: "visible",
      marginRight: 10,
    }}
  >
    <Menu style={{ overflow: "scroll" }}>
      <MenuTrigger>
        <Text>Show Menu</Text>
      </MenuTrigger>
      <View>
        <Text style={{ color: "gray", marginBottom: 10 }}>Filter By</Text>
        <MenuOption
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 16,
            width: 200,
            height: 40,
          }}
        >
          <View>
            <Icon name="user" type="AntDesign" size={24} />
          </View>
          <Text style={{ fontWeight: "400", fontSize: 16 }}>Name</Text>
        </MenuOption>
        <MenuOption
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 16,
            gap: 16,
            width: 200,
            height: 40,
          }}
        >
          <View>
            <Icon name="clockcircleo" type="AntDesign" size={24} />
          </View>
          <Text style={{ fontWeight: "400", fontSize: 16 }}>Last Seen</Text>
        </MenuOption>
        <MenuOption
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 16,
            gap: 16,
            width: 200,
            height: 40,
          }}
        >
          <View>
            <Icon name="staro" type="AntDesign" size={24} />
          </View>
          <Text style={{ fontWeight: "400", fontSize: 16 }}>Low Point</Text>
        </MenuOption>
        <MenuOption
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 16,
            gap: 16,
            width: 200,
            height: 40,
          }}
        >
          <View>
            <Icon name="staro" type="AntDesign" size={24} />
          </View>
          <Text style={{ fontWeight: "400", fontSize: 16 }}>High Point</Text>
        </MenuOption>
      </View>
    </Menu>
  </View>
);
