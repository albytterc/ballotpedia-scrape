import { View, Text } from "react-native";
import { Box, FlatList, Heading, VStack, SectionList } from "native-base";
import React, { useState, useEffect } from "react";
import RacesBox from "../../../components/RacesBox";

const BASE_URL = "https://www.googleapis.com/civicinfo/v2";
const endpoint = "/voterinfo";
const API_KEY = "AIzaSyDjmpk9KkK8jE1MUQLbxXRohVDnnlA2r8Y";
const address = "5019 Lonnie D Aldridge Rd Monroe, NC 28112";
const electionId = "8000";

const Races = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //   const data: string[] = ["hello ", "bitch"];
  //   const [data, setData] = useState(["hello ", "bitch"]);

  useEffect(() => {
    fetch(
      BASE_URL +
        endpoint +
        "?address=" +
        address +
        "&electionId=" +
        electionId +
        "&key=" +
        API_KEY
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
    console.log(typeof data);
    console.log(data);
  }, []);
  const listItems = [];
  if (data.contests != undefined) {
    console.log(data.contests);
    console.log(data.contests.length);
    for (var i = 0; i < data.contests.length; i++) {
      listItems.push(<RacesBox text={data.contests[i].ballotTitle} />);
    }
    console.log("Loading is " + isLoading);
  } else {
    console.log("Undefined data");
    console.log("Loading is " + isLoading);
  }

  return (
    <>
      <SectionList
        background={"#e4e3f1"}
        marginY={2}
        ListFooterComponent={
          <>
            <Heading
              marginBottom={"0.5rem"}
              marginTop={"0.5rem"}
              marginLeft={"0.5rem"}
              color={"black"}
            >
              Races
            </Heading>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-evenly"}
              flexWrap={"wrap"}
            >
              {listItems}
            </Box>
          </>
        }
        sections={[]}
      />
    </>
  );
};

export default Races;
