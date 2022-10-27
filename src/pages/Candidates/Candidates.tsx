import { View } from "react-native";
import React from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  Pressable,
  Link,
  SectionList,
} from "native-base";
import CandidateBox from "../../../components/CandidateBox";

const Candidates = ({ route, navigation }) => {
  const { data } = route.params;
  console.log(data);
  return data.candidates ? (
    <>
      <SectionList
        background={"#e4e3f1"}
        ListFooterComponent={
          <>
            {/* <Heading>Candidates</Heading> */}
            {/* <Text>These are the candidates running for:</Text> */}
            <Heading size="sm" textAlign={"center"} marginTop={"1rem"}>
              {data.ballotTitle}
            </Heading>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-evenly"}
              flexWrap={"wrap"}
            >
              {data.candidates.map((map) => (
                // <Text>
                <CandidateBox navigation={navigation} candidateData={map} />
              ))}
            </Box>
          </>
        }
        sections={[]}
      />
    </>
  ) : (
    <>
      <Text>No Candidates for this position Sowwy</Text>
    </>
  );
};

export default Candidates;
