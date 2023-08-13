//TOP TABS

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Appreciate from "../PeerAppreciate/Appreciate";
import Employee from "../PeerAppreciate/Employee";
import Good from "../PeerAppreciate/Good";
import Thankyou from "../PeerAppreciate/Thankyou";

const TopTabs = createMaterialTopTabNavigator();

export default function TopTabGroup() {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
          
        },
        tabBarStyle: {
          backgroundColor: "#299647",
        },
        tabBarPressColor: "#299647",
        tabBarActiveTintColor: "#FFF",
        tabBarIndicatorStyle: {
          backgroundColor: "#fff",
          height: 3,
        },
        tabBarInactiveTintColor: "#D3D3D3",
      }}
    >
      <TopTabs.Screen name="Appreciate" component={Appreciate} />
      <TopTabs.Screen name="Employee" component={Employee} />
      <TopTabs.Screen name="Thankyou" component={Thankyou} />
      <TopTabs.Screen name="Good" component={Good} />
    </TopTabs.Navigator>
  );
}
