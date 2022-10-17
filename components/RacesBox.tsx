import { View } from "react-native";
import { Box, Heading, VStack, Text } from "native-base";
import React from "react";

const RacesBox = ({ text }) => {
  return (
    <Box
      style={{ width: "45%", aspectRatio: 1 }}
      height="100px"
      bg="#E8E8E8"
      p="4"
      shadow={2}
      borderRadius={20}
      borderWidth="2px"
      borderColor={"rgba(162,156,244,255)"}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      flexDirection={"row"}
      marginBottom={"10px"}
    >
      <Box display={"flex"} justifyContent={"center"} textAlign={"center"}>
        <Text
          color="#5c5a5b"
          fontWeight={"600"}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
        >
          {text}
        </Text>
      </Box>
    </Box>
  );
};

export default RacesBox;
