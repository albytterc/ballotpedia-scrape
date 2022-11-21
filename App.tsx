import React, { Component } from "react";
import {
  Text,
  Link,
  Divider,
  Button,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Image,
  Input,
  Box,
} from "native-base";
import { LogBox } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NativeBaseIcon from "./components/NativeBaseIcon";
import Home from "./src/pages/Home/Home";
import ZipCode from "./src/pages/ZipCode/ZipCode";
import Events from "./src/pages/Events/Events";
// import BallotItems from "./src/pages/BallotItems/BallotItems";
import BallotItemsDrawer from "./components/drawers/BallotItemsDrawer";
// import Races from "./src/pages/Races/Races";
import RacesDrawer from "./components/drawers/RacesDrawer";
// import Measures from "./src/pages/Measures/Measures";
import MeasuresDrawer from "./components/drawers/MeasuresDrawer";
// import Candidates from "./src/pages/Candidates/Candidates";
import CandidatesDrawer from "./components/drawers/CandidatesDrawer";
import LearnMore from "./src/pages/LearnMore/LearnMore";
import CandidateProfile from "./src/pages/CandidateProfile/CandidateProfile";
import CandidateVotingRecord from "./src/pages/CandidateVotingRecord/CandidateVotingRecord";
import PollLocation from "./src/pages/PollLocation/PollLocation";
// import MeasureInfo from "./src/pages/MeasureInfo/MeasureInfo";
import MeasureInfoDrawer from "./components/drawers/MeasureInfoDrawer";
import CandidateTabsNavigator from "./components/CandidateTabsNavigator";
import CandidateInfoDrawer from "./components/drawers/CandidateInfoDrawer";



// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

const Stack = createNativeStackNavigator();

// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); 

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Address" component={ZipCode} />
          <Stack.Screen name="Events" component={Events} />
          <Stack.Screen name="Ballot Items" component={BallotItemsDrawer} options={{
            headerShown: false
          }}/>
          <Stack.Screen name="Races" component={RacesDrawer} options={{
            headerShown: false
          }}/>
          <Stack.Screen name="Measures" component={MeasuresDrawer} options={{
            headerShown: false
          }}/>
          
          <Stack.Screen name="Candidates" component={CandidatesDrawer} options={{
            headerShown: false
          }}/> 
          
          <Stack.Screen name="Learn More" component={LearnMore} />
          <Stack.Screen name="Candidate Info" component ={CandidateInfoDrawer} options={{
            headerShown: false
          }}/>
          {/* <Stack.Screen name="Candidate Profile" component={CandidateProfile} />
          <Stack.Screen name="Candidate Voting Record" component={CandidateVotingRecord} />*/}
          <Stack.Screen name="Polling Location" component={PollLocation} /> 
          <Stack.Screen name="Measure Info" component={MeasureInfoDrawer} options={{
            headerShown: false
          }}/>
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

// function InitPage ({navigation}) {
//    return (
//     <Center
//           _dark={{ bg: "blueGray.900" }}
//           _light={{ bg: "blueGray.50" }}
//           px={4}
//           flex={1}
//         >
//     <VStack space={5} alignItems="center">
//   <Image source={require("./assets/votevaultlogo.png")} alt = {"vote vault logo"}></Image>
//   <Heading size="lg">Vote Vault.. Coming Soon</Heading>
//   <HStack space={2} alignItems="center">
//   </HStack>
//   <Button onPress={() => navigation.navigate('QueryPage')}> Unlock the Vault</Button>
//   <ToggleDarkMode />
// </VStack>
// </Center>
// );
// }

// function QueryPage ({navigation}) {
//   return (
//     <Center
//           _dark={{ bg: "blueGray.900" }}
//           _light={{ bg: "blueGray.50" }}
//           px={4}
//           flex={1}
//         >
//     <VStack space={5} maxW="200px" alignItems="center">
//   <Input size="sm"  variant="underlined" placeholder="Enter Zipcode"/>
//   <Button> Search by Zipcode</Button>

//   <HStack space={5} alignItems="center" >
//     <Divider maxW="110px" bg="#000"/>
//     <Heading size="md">or</Heading>
//     <Divider maxW="110px" bg="#000"/>
//   </HStack>

//   <Button onPress={() => navigation.navigate('InitPage')}> Use my current location </Button>
// </VStack>
// </Center>
// );
// }

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
