import { View } from "react-native";
import React from "react";
import { Box, Heading, Link, Text } from "native-base";
import { border } from "native-base/lib/typescript/theme/styled-system";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CandidateBox = ({ navigation, candidateData }) => {
  let partyColor = "black";
  if (candidateData.party) {
    if (candidateData.party.toUpperCase().match("REPUBLICAN")) {
      partyColor = "#FF0000";
    } else if (candidateData.party.toUpperCase().match("DEMOCRATIC")) {
      partyColor = "#0000FF";
    } else if (candidateData.party.toUpperCase().match("LIBERTARIAN")) {
      partyColor = "#FFD700";
    } else if (candidateData.party.toUpperCase().match("GREEN")) {
      partyColor = "#007500";
    }
  }
  return (
    <Link
      style={{ width: "45%", aspectRatio: 1 }}
      height="100px"
      bg="#E8E8E8"
      p="4"
      shadow={2}
      borderRadius={20}
      borderWidth="2px"
      // borderColor={"rgba(162,156,244,255)"}
      borderColor={partyColor}
      // borderColor={"#FFFFFF"}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      flexDirection={"row"}
      marginBottom={"10px"}
      onPress={() => navigation.navigate("Races")}
      mt="8"
    >
      <Box>
        <Box display={"flex"} justifyContent={"center"} textAlign={"center"}>
          {/* <Icon name="vote-outline" size={70} color="teal"></Icon> */}
          <Heading
            size={"md"}
            fontWeight={"600"}
            textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
          >
            {candidateData.name}
          </Heading>

          <Text
            // style={{ color: partyColor }}
            color="#5c5a5b"
            fontWeight={"400"}
            textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
          >
            {candidateData.party}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default CandidateBox;
