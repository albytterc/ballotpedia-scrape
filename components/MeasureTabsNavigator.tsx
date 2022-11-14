import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MeasureInfo from '../src/pages/MeasureInfo/MeasureInfo';
import PollLocation from "../src/pages/PollLocation/PollLocation";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const MeasureTabsNavigator = ({route, navigation}) => {
    let params = route.params
    return(
        <Tab.Navigator initialRouteName="Measure Info" screenOptions={{
          headerShown: false
        }}>
            <Tab.Screen name="Measure Info" initialParams={params} component={MeasureInfo} 
            options={{
                tabBarLabel: 'Measure Info',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="file-document-outline" color={color} size={size} />
                ),
              }}/>
            <Tab.Screen name="Polling Location" initialParams={params} component={PollLocation} 
            options={{
                tabBarLabel: "Polling Location",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name= "map-marker-outline" color={color} size={size} />
                ),
              }}/>
        </Tab.Navigator>
    )
}

export default MeasureTabsNavigator;