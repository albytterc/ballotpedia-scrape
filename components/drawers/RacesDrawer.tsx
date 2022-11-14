import 'react-native-gesture-handler';
import BallotItems from "../../src/pages/BallotItems/BallotItems";
import Races from '../../src/pages/Races/Races';
import Measures from '../../src/pages/Measures/Measures';
import ZipCode from "../../src/pages/ZipCode/ZipCode";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from  '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const RacesDrawer = ({route, navigation}) => {
    let params = route.params
    return(
        <Drawer.Navigator initialRouteName="Races" drawerContent={props => {
            return (
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                    <DrawerItem label="Address" onPress={() => props.navigation.navigate("Address")} />
                    <DrawerItem label="Events" onPress={() => props.navigation.navigate("Events", params)} />
                    <DrawerItem label="Ballot Items" onPress={() => props.navigation.navigate("Ballot Items", params)} />
                </DrawerContentScrollView>
            )
          }} >
            <Drawer.Screen name="Races" initialParams={params} component={Races}/>
          </Drawer.Navigator>
    )
}

export default RacesDrawer;

