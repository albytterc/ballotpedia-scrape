import React from "react";
import {
  Text,
  HStack,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
} from "native-base";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home/Home";
import ZipCode from "./src/pages/ZipCode/ZipCode";
import Events from "./src/pages/Events/Events";
import BallotItemsDrawer from "./components/drawers/BallotItemsDrawer";
import RacesDrawer from "./components/drawers/RacesDrawer";
import MeasuresDrawer from "./components/drawers/MeasuresDrawer";
import CandidatesDrawer from "./components/drawers/CandidatesDrawer";
import LearnMore from "./src/pages/LearnMore/LearnMore";
import PollLocation from "./src/pages/PollLocation/PollLocation";
import MeasureInfoDrawer from "./components/drawers/MeasureInfoDrawer";
import CandidateInfoDrawer from "./components/drawers/CandidateInfoDrawer";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

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
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Address" component={ZipCode} />
          <Stack.Screen name="Events" component={Events} />
          <Stack.Screen
            name="Ballot Items"
            component={BallotItemsDrawer}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="Races"
            component={RacesDrawer}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="Measures"
            component={MeasuresDrawer}
            options={{
              headerShown: true,
            }}
          />

          <Stack.Screen
            name="Candidates"
            component={CandidatesDrawer}
            options={{
              headerShown: true,
            }}
          />

          <Stack.Screen name="Learn More" component={LearnMore} />
          <Stack.Screen
            name="Candidate Info"
            component={CandidateInfoDrawer}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen name="Polling Location" component={PollLocation} />
          <Stack.Screen
            name="Measure Info"
            component={MeasureInfoDrawer}
            options={{
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

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
