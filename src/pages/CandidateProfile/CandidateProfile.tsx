import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";

import { Box, Heading, Image, Button, SectionList } from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CandidateProfile = ({ route, navigation }) => {
  let candidate_name = route.params.candidate_name;
  let candidate_name_split = candidate_name.split(" ");
  let first = candidate_name_split[0].toLowerCase();
  let last =
    candidate_name_split[candidate_name_split.length - 1].toLowerCase();
  // console.log(first);
  // console.log(last);

  const BASE_URL = "https://en.wikipedia.org/api/rest_v1/page/summary/";
  //   let endpoint = "Joe" + "_" + "Biden";
  let img_url: any = "";
  let endpoint =
    first[0].toUpperCase() +
    first.substring(1) +
    "_" +
    last[0].toUpperCase() +
    last.substring(1);
  // console.log(endpoint);
  //   string[0].toUpperCase() + string.substring(1)
  // name passed to voting record page
  let name_voting_record =
    first[0].toUpperCase() +
    first.substring(1) +
    " " +
    last[0].toUpperCase() +
    last.substring(1);
  console.log(name_voting_record);

  let redirect = false;

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(BASE_URL + endpoint + "?redirect=" + redirect)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
    // console.log(data);
  }, []);
  const imgItem = [];
  // console.log(data);
  if (data.originalimage != undefined) {
    imgItem.push(
      <Box
        key={candidate_name + "candidate"}
        display={"flex"}
        alignItems={"center"}
      >
        <Image
          borderRadius={"100px"}
          borderColor={"black"}
          borderWidth={"2px"}
          source={{
            uri: data.originalimage.source,
          }}
          alt="Alternate Text"
          size="xl"
        />
        <Heading
          size={"md"}
          marginLeft="1.5rem"
          marginRight="1.5rem"
          marginTop="2rem"
          textAlign={"center"}
        >
          {data.extract}
        </Heading>
      </Box>
    );
    // img_url = data.originalimage.source;
    // console.log(img_url);
  }

  return (
    <SectionList
      background={"#F69E7B"}
      ListFooterComponent={
        <Box key={candidate_name}>
          <Heading
            size={"2xl"}
            textAlign={"center"}
            marginTop={"1rem"}
            marginBottom={"1rem"}
          >
            {candidate_name}
          </Heading>
          {imgItem}
          {/* <Button bg={"black"} width={"50%"} marginLeft={"25%"}
            onPress={() => navigation.navigate("Candidate Voting Record",{candidateName: name_voting_record})}>
            Voting Record
          </Button>
          <Button
            // display={"flex"}
            width={"80%"}
            alignSelf={"center"}
            marginTop={"50px"}
            borderRadius={"50px"}
            borderWidth={".3px"}
            bg={"black"}
            onPress={() => navigation.navigate("Polling Location")}
          >
            <Heading size={"sm"} color={"white"}>
              VOTE
            </Heading>
            <Icon color={"white"} name={"arrow-right-bold"} size={45}></Icon>
          </Button> */}
        </Box>
      }
      sections={[]}
    />
  );
};

export default CandidateProfile;
