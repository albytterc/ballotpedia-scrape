import "react-native-gesture-handler";
import MeasureTabsNavigator from "../MeasureTabsNavigator";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const MeasureInfoDrawer = ({ route }) => {
  let params = route.params;
  return (
    <Drawer.Navigator
      initialRouteName="Measures"
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            {/* <DrawerItem label="Address" onPress={() => props.navigation.navigate("Address")} /> */}
            <DrawerItem
              label="Events"
              onPress={() => props.navigation.navigate("Events", params)}
            />
            <DrawerItem
              label="Ballot Items"
              onPress={() => props.navigation.navigate("Ballot Items", params)}
            />
            <DrawerItem
              label="Measures"
              onPress={() => props.navigation.navigate("Measures", params)}
            />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen
        name="Measure Info"
        initialParams={params}
        options={{ title: "" }}
        component={MeasureTabsNavigator}
      />
    </Drawer.Navigator>
  );
};

export default MeasureInfoDrawer;
