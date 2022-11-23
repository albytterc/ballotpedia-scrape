import React, { useState, useEffect } from "react";

import { Box, Link, Text, Heading, Image, SectionList } from "native-base";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CandidateProfile = ({ route }) => {
  let candidate = route.params.candidate;
  let candidate_name_split = candidate.name.split(" ");
  let first = candidate_name_split[0].toLowerCase();
  let last =
    candidate_name_split[candidate_name_split.length - 1].toLowerCase();

  const BASE_URL = "https://en.wikipedia.org/api/rest_v1/page/summary/";
  let endpoint =
    first[0].toUpperCase() +
    first.substring(1) +
    "_" +
    last[0].toUpperCase() +
    last.substring(1);
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
  }, []);
  const imgItem = [];
  if (data.originalimage != undefined) {
    imgItem.push(
      <Box
        key={candidate.name + "candidate"}
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
          fontWeight={1}
          textAlign={"center"}
        >
          {data.extract}
        </Heading>
      </Box>
    );
  }

  const contacts = [];
  console.log(candidate.candidateUrl);
  if (candidate.candidateUrl) {
    console.log("we have contacts");
    contacts.push(
      <Box marginX={5}>
        <Link href={candidate.candidateUrl}>
          <Icon
            style={{ padding: "0%" }}
            color={"black"}
            name={"web"}
            size={50}
          />
          <Text ml={5} lineHeight={50}>
            {" "}
            {candidate.candidateUrl}
          </Text>
        </Link>
      </Box>
    );
  }
  if (candidate.email) {
    console.log("we have email");
    console.log(candidate.email);
    contacts.push(
      <Box marginX={5}>
        <Link>
          <Icon
            style={{ padding: "0%" }}
            color={"#c71610"}
            name={"gmail"}
            size={50}
          />
          <Text ml={5} lineHeight={50}>
            {" "}
            {candidate.email}
          </Text>
        </Link>
      </Box>
    );
  }

  const socialChannels = [];
  if (candidate.channels != undefined) {
    let color = "black";
    let iconType = "link";
    candidate.channels.forEach((element) => {
      if (element.type.toLowerCase() === "youtube") {
        color = "#FF0000";
        iconType = "youtube";
      } else if (element.type.toLowerCase() === "twitter") {
        color = "#00acee";
        iconType = "twitter";
      } else if (element.type.toLowerCase() === "facebook") {
        color = "#3b5998";
        iconType = "facebook";
      } else if (element.type.toLowerCase() === "email") {
        color = "black";
        iconType = "email";
      }

      socialChannels.push(
        <Box width={"50px"}>
          <Link href={element.id}>
            <Icon
              style={{ padding: "0%" }}
              color={color}
              name={iconType}
              size={50}
            />
          </Link>
        </Box>
      );
    });
  }

  return (
    <SectionList
      background={"white"}
      ListFooterComponent={
        <Box key={candidate.name}>
          <Heading
            size={"2xl"}
            textAlign={"center"}
            marginTop={"1rem"}
            marginBottom={"1rem"}
          >
            {candidate.name}
          </Heading>
          {imgItem}
          <Heading ml={".5rem"} marginTop={"1rem"}>
            Contact me
          </Heading>
          <Box bg="dark.800" justifyContent={"space-around"}>
            {contacts}
          </Box>
          <Heading ml={".5rem"} marginTop={"1rem"}>
            Social Media
          </Heading>
          <Box
            bg="dark.800"
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-around"}
          >
            {socialChannels}
          </Box>
        </Box>
      }
      sections={[]}
    />
  );
};

export default CandidateProfile;
