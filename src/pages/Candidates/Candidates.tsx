import { View } from "react-native";
import React from "react";
import { Box, Heading, VStack, Text, Pressable, Link } from "native-base";
import CandidateBox from "../../../components/CandidateBox";

const Candidates = ({ route, navigation }) => {
  const { data } = route.params;
  console.log("in Candidates");
  console.log(data);
  return (
    <Box>
      <Text>These are the candidates running for office:</Text>
      {data.ballotTitle}
      <Text></Text>

      {data.candidates.map((map) => (
        <Text>
          {map.name} is running as a {map.party}
        </Text>
      ))}
    </Box>
  );
};

export default Candidates;
