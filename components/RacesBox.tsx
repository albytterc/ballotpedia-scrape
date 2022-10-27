import { View } from "react-native";
import { Box, Heading, VStack, Text, Pressable, Link } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const RacesBox = ({ text, navigation, data }) => {
  return (
    <Link
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
      onPress={() =>
        navigation.navigate("Candidates", {
          data: data,
        })
      }
      mt="8"
    >
      <Icon
        name={"information"}
        size={25}
        style={{
          position: "absolute",
          right: "5%",
          top: "5%",
        }}
        onPress={() => navigation.navigate("Learn More", { title: text })}
      ></Icon>
      <Box>
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
    </Link>
  );
};

export default RacesBox;
