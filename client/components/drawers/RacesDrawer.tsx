import "react-native-gesture-handler";
import Races from "../../src/pages/Races/Races";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const RacesDrawer = ({ route }) => {
  let params = route.params;
  return (
    <Drawer.Navigator
      initialRouteName="Races"
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              label="Events"
              onPress={() => props.navigation.navigate("Events", params)}
            />
            <DrawerItem
              label="Ballot Items"
              onPress={() => props.navigation.navigate("Ballot Items", params)}
            />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen
        name="Races"
        options={{ title: "" }}
        initialParams={params}
        component={Races}
      />
    </Drawer.Navigator>
  );
};

export default RacesDrawer;