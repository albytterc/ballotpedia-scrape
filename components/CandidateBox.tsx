import { View } from "react-native";
import React from "react";
import { Box, Heading, Link, Text } from "native-base";
import { border } from "native-base/lib/typescript/theme/styled-system";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faRepublican } from "@fortawesome/free-solid-svg-icons/faRepublican";
import { faDemocrat } from "@fortawesome/free-solid-svg-icons/faDemocrat";
import { faFireFlameSimple } from "@fortawesome/free-solid-svg-icons/faFireFlameSimple";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons/faEarthAmericas";

const CandidateBox = ({
  navigation,
  candidateData,
  userAddress,
  electionId,
}) => {
  let partyColor = "black";
  let logo = <></>;
  if (candidateData.party) {
    if (candidateData.party.toUpperCase().match("REPUBLICAN")) {
      partyColor = "#580000";
      logo = <FontAwesomeIcon color="white" size={50} icon={faRepublican} />;
    } else if (candidateData.party.toUpperCase().match("DEMOCRATIC")) {
      partyColor = "#000072";
      logo = <FontAwesomeIcon color="white" size={50} icon={faDemocrat} />;
    } else if (candidateData.party.toUpperCase().match("LIBERTARIAN")) {
      partyColor = "#898900";
      logo = (
        <FontAwesomeIcon color="white" size={50} icon={faFireFlameSimple} />
      );
    } else if (candidateData.party.toUpperCase().match("GREEN")) {
      partyColor = "#013220";
      logo = <FontAwesomeIcon color="white" size={50} icon={faEarthAmericas} />;
    }
  }
  return (
    <Link
      style={{ width: "45%", aspectRatio: 1 }}
      height="100px"
      bg={partyColor}
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
        navigation.navigate("Candidate Info", {
          candidate: candidateData,
        })
      }
      mt="8"
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Heading
          size={"md"}
          color="#FFFFFF"
          fontWeight={"600"}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
        >
          {candidateData.name}
        </Heading>
        {logo}
        {/* <FontAwesomeIcon icon={faMugSaucer} /> */}
        <Text
          color="#FFFFFF"
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
