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
      borderColor={partyColor}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      flexDirection={"row"}
      marginBottom={"10px"}
      onPress={() =>
        navigation.navigate("Candidate Profile", {
          candidate_name: candidateData.name,
        })
      }
      mt="8"
    >
      <Box display={"flex"} justifyContent={"center"} textAlign={"center"}>
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
          color="#5c5a5b"
          fontWeight={"400"}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
        >
          {candidateData.party}
        </Text>
      </Box>
    </Link>
  );
};

export default CandidateBox;
