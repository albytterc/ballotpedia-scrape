import { StyleSheet } from "react-native";
import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {
  View,
  Link,
  Button,
  HStack,
  VStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  Image,
  Input,
  Box,
  Divider,
  Flex,
  Text,
} from "native-base";

const Events = ({ navigation }) => {
  return (
    <>
      <VStack
        width={"100%"}
        height={"100%"}
        space={5}
        alignItems="center"
        background={"#007C77"}
      >
        <Heading size="lg" marginTop="1rem">
          Events
        </Heading>
        <Box
          width={"95%"}
          height={"150px"}
          bg="#2708A0"
          p="4"
          shadow={2}
          borderRadius={20}
          borderWidth="2px"
          alignItems={"center"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent="space-around"
        >
          <Icon name="vote-outline" size={70} color="teal"></Icon>

          <Box width={"auto"} alignItems={"center"}>
            <Heading size="xl" color="#FFFFFF">
              General Election
            </Heading>

            <Heading
              size="sm"
              alignSelf={"flex-end"}
              marginTop="1rem"
              color="#FFFFFF"
            >
              Nov 8, 2022
            </Heading>
          </Box>
        </Box>
        <Button onPress={() => navigation.navigate("Home")}>
          {" "}
          Unlock the Vault
        </Button>
      </VStack>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#374151",
  },
});

export default Events;
