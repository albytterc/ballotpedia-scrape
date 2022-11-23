import "react-native-gesture-handler";
import Measures from "../../src/pages/Measures/Measures";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const MeasuresDrawer = ({ route }) => {
  let params = route.params;
  return (
    <Drawer.Navigator
      initialRouteName="Measures"
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
        name="Measures"
        options={{ title: "" }}
        initialParams={params}
        component={Measures}
      />
    </Drawer.Navigator>
  );
};

export default MeasuresDrawer;
