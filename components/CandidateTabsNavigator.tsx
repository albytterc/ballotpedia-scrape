import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CandidateProfile from "../src/pages/CandidateProfile/CandidateProfile";
import CandidateVotingRecord from "../src/pages/CandidateVotingRecord/CandidateVotingRecord";
import PollLocation from "../src/pages/PollLocation/PollLocation";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const CandidateTabsNavigator = ({route, navigation}) => {
    let params = route.params
    return(
        <Tab.Navigator initialRouteName="Candidate Profile" screenOptions={{
          headerShown: false
        }}>
            <Tab.Screen name="Candidate Profile" initialParams={params} component={CandidateProfile} 
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
              }}/>
            <Tab.Screen name="Candidate Voting Record" initialParams={params} component={CandidateVotingRecord}
            options={{
                tabBarLabel: 'Voting Record',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="format-list-checks" color={color} size={size} />
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

export default CandidateTabsNavigator;