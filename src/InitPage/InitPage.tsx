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
import NativeBaseIcon from "../../components/NativeBaseIcon";
import QueryPage from "../pages/QueryPage/QueryPage"; 
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const navigation = useNavigation()

export default class InitPage extends React.Component {
    render () {
        return (
            <VStack space={5} alignItems="center">
          <Image source={require("../../assets/votevaultlogo.png")} alt = {"vote vault logo"}></Image>
          <Heading size="lg">Vote Vault.. Coming Soon</Heading>
          <HStack space={2} alignItems="center">            
          </HStack>
          <Button onPress={() => null}> Unlock the Vault</Button>
          <ToggleDarkMode />
        </VStack>
        );
    }
}

//TODO: implement moving to the other page
function dummyFunc() {
  return (null);
}

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

