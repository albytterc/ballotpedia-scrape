import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
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

const Home = ({ navigation }) => {
  return (
    <>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          {/* <Image source={require("./assets/votevaultlogo.png")} alt = {"vote vault logo"}></Image> */}

          <Icon name={"safe-square-outline"} size={80}></Icon>
          <Heading size="3xl">Vote Vault</Heading>
          <HStack space={2} alignItems="center"></HStack>
          <Button bg={"black"} onPress={() => navigation.navigate("Address")}>
            Unlock the Vault
          </Button>
          {/* <ToggleDarkMode /> */}
        </VStack>
      </Center>
    </>
  );
};

export default Home;
