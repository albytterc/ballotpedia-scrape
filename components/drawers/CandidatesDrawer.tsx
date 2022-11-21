import "react-native-gesture-handler";
import Candidates from "../../src/pages/Candidates/Candidates";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const CandidatesDrawer = ({ route, navigation }) => {
  let params = route.params;
  return (
    <Drawer.Navigator
      initialRouteName="Races"
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
              label="Races"
              onPress={() => props.navigation.navigate("Races", params)}
            />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen
        name="Candidates"
        options={{ title: "" }}
        initialParams={params}
        component={Candidates}
      />
    </Drawer.Navigator>
  );
};

export default CandidatesDrawer;
