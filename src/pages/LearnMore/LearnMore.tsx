import { View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Heading, Text } from "native-base";
import InfoData from "../../InfoData/InfoData";

const LearnMore = ({ route, navigation }) => {
  const props = route.params;
  console.log(props.title);
  let key = "empty";
  console.log(
    props.title.toLowerCase().includes("us house of representatives")
  );
  if (props.title.toLowerCase().includes("us senate")) {
    key = "US SENATE";
  } else if (
    props.title.toLowerCase().includes("us house of representatives")
  ) {
    key = "US House of Representatives";
  } else if (props.title.toLowerCase().includes("state senate")) {
    key = "STATE SENATE";
  } else if (props.title.toLowerCase().includes("county sheriff")) {
    key = "X County Sheriff";
  }

  return (
    <View>
      <Heading
        size={"lg"}
        textAlign="center"
        marginTop={"1rem"}
        marginBottom={"1rem"}
      >
        What is the
      </Heading>
      <Heading size={"md"} textAlign="center" marginBottom={"1rem"}>
        {props.title}?
      </Heading>
      <Text marginLeft={"2rem"} marginRight={"2rem"}>
        {InfoData[key]}
      </Text>
    </View>
  );
};

export default LearnMore;
