import 'react-native-gesture-handler';
import BallotItems from "../../src/pages/BallotItems/BallotItems";
import ZipCode from "../../src/pages/ZipCode/ZipCode";
import Events from '../../src/pages/Events/Events';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from  '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const BallotItemsDrawer = ({route, navigation}) => {
    let params = route.params
    return(
        <Drawer.Navigator initialRouteName="Ballot Items" drawerContent={props => {
            return (
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                    <DrawerItem label="Address" onPress={() => props.navigation.navigate("Address")} />
                    <DrawerItem label="Events" onPress={() => props.navigation.navigate("Events", params)} />
                </DrawerContentScrollView>
            )
          }} >
            <Drawer.Screen name="Ballot Items" initialParams={params} component={BallotItems}/>
          </Drawer.Navigator>
    )
}

export default BallotItemsDrawer;

