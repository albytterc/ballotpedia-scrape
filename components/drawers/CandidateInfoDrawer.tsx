import 'react-native-gesture-handler';
import CandidateTabsNavigator from '../CandidateTabsNavigator';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from  '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const CandidateInfoDrawer = ({route, navigation}) => {
    let params = route.params
    return(
        <Drawer.Navigator initialRouteName="Candidate Info" drawerContent={props => {
            return (
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                    <DrawerItem label="Address" onPress={() => props.navigation.navigate("Address")} />
                    <DrawerItem label="Events" onPress={() => props.navigation.navigate("Events", params)} />
                    <DrawerItem label="Ballot Items" onPress={() => props.navigation.navigate("Ballot Items", params)} />
                    <DrawerItem label="Races" onPress={() => props.navigation.navigate("Races", params)} />
                    <DrawerItem label="Candidates" onPress={() => props.navigation.navigate("Candidates", params)} />
                </DrawerContentScrollView>
            )
          }} >
            <Drawer.Screen name="Candidate Info" initialParams={params} component={CandidateTabsNavigator}/>
          </Drawer.Navigator>
    )
}

export default CandidateInfoDrawer;

