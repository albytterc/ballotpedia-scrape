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
    <SectionList
      ListFooterComponent={
        <Box>
          <Heading size="sm" textAlign={"center"} marginTop={"1rem"}>
            {data.ballotTitle}
          </Heading>
          <Box
            key="hhh"
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            flexWrap={"wrap"}
          >
            {data.candidates.map((can: any, i: any) => (
              // <Text>
              <CandidateBox
                key={i}
                navigation={navigation}
                candidateData={can}
              />
            ))}
          </Box>
        </Box>
      }
      sections={[]}
    />
  ) : (
    //   sections={[]}
    // />
    //     </>
    //   }
    //   sections={[]}
    // />
    <Text>No Candidates for this position Sowwy</Text>
  );
};

export default Candidates;
