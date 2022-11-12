import React from "react";
import { View } from "react-native";
import { Link, Heading, Box, Text } from "native-base";

const MeasuresBox = ({ text, navigation, measuresData }) => {
  console.log(measuresData);
  return (
    <Link
      style={{ width: "45%", aspectRatio: 1 }}
      height="100px"
      bg={"#8B4000"}
      p="4"
      shadow={2}
      borderRadius={50}
      // borderWidth="1px"
      borderColor={"black"}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      flexDirection={"row"}
      marginBottom={"10px"}
      onPress={() =>
        navigation.navigate("Measure Info", {
          data: measuresData,
        })
      }
      mt="8"
    >
      <Box
      // display={"flex"}
      // justifyContent={"center"}
      // alignItems={"center"}
      // textAlign={"center"}
      >
        <Heading
          size={"sm"}
          color="#FFFFFF"
          fontWeight={"600"}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
        >
          {/* I AM MODIFYING THIS TO WORK WITH THE TEST DATA ON THE API!!!!!!!!!! */}
          {/* {measuresData.ballotTitle} */}
          {measuresData.referendumTitle}
        </Heading>
      </Box>
    </Link>
  );
};

export default MeasuresBox;
