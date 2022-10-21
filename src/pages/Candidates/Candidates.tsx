import { View, Text } from "react-native";
import React from "react";
import CandidateBox from "../../../components/CandidateBox";

const Candidates = ({ route, navigation }) => {
  const { data } = route.params;
  console.log("in Candidates");
  console.log(data);
  return (
    <View>
      <Text>These are the candidates running for office:</Text>
      {/* <CandidateBox /> */}
    </View>
  );
};

export default Candidates;
