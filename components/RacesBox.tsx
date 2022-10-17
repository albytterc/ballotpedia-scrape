import { View, Text } from "react-native";
import { Box, Heading, VStack } from "native-base";
import React from "react";

const RacesBox = ({ text }) => {
  return (
    <Box
      style={{ width: "40%", aspectRatio: 1 }}
      bg="#2708A0"
      p="4"
      shadow={2}
      borderRadius={20}
      borderWidth="2px"
      alignItems={"center"}
      display={"flex"}
      flexDirection={"row"}
      marginBottom={"10px"}
    >
      <Box width={"auto"} alignItems={"center"}>
        <VStack>
          <Heading size="xl" color="#FFFFFF">
            {text}
          </Heading>
          <Heading
            size="sm"
            alignSelf={"flex-end"}
            marginTop="1rem"
            color="#FFFFFF"
          >
            Date
          </Heading>
        </VStack>
      </Box>
    </Box>
  );
};

export default RacesBox;
