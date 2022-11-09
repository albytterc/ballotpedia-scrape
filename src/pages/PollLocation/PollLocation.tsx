import { View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Heading, Box, Text, Link, SectionList } from "native-base";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";

let value: JSON | null = "undefined";
const PollLocation = () => {
  const [input, setInput] = useState("");

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem("poll_location_");

      if (value != null) {
        console.log(JSON.parse(value));
        setInput(JSON.parse(value));
      }
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };

  useEffect(() => {
    readData();
  }, []);
  return (
    <SectionList
      background={"white"}
      ListFooterComponent={
        <Box
          background={"white"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Heading
            size={"xl"}
            textAlign={"center"}
            marginTop={"1rem"}
            marginBottom={"1rem"}
          >
            Vote Here
            {/* <FaBeer />? */}
          </Heading>

          <Icon color={"green"} name={"pin-outline"} size={50}></Icon>
          {""}
          <Text fontSize={20} fontWeight={600}>
            {input.locationName}
          </Text>
          <Text fontSize={20}> {input.line1 + ","}</Text>
          <Text fontSize={20}> {input.city + ","}</Text>
          <Text fontSize={20}> {input.state + " " + input.zip}</Text>
          <Heading
            size={"xl"}
            textAlign={"center"}
            marginTop={"1rem"}
            marginBottom={"1rem"}
          >
            Register Here{" "}
          </Heading>
          <Link href="https://registertovote.sos.ga.gov/">
            <Icon
              // onPress={"https://registertovote.sos.ga.gov/"}
              color={"black"}
              name={"file-document-edit"}
              size={50}
            ></Icon>
          </Link>
        </Box>
      }
      sections={[]}
    />
  );
};

export default PollLocation;
