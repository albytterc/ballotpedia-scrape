import { View, Text } from "react-native";
import { Box, FlatList, Heading, VStack, SectionList } from "native-base";
import React, { useState, useEffect } from "react";
import RacesBox from "../../../components/RacesBox";
import config from "../../../config";

const BASE_URL = "https://www.googleapis.com/civicinfo/v2";
const endpoint = "/voterinfo";
const electionId = "8000";

const Races = ({ route, navigation }) => {

  let userAddress = route.params.userAddress
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      BASE_URL +
        endpoint +
        "?address=" +
        userAddress +
        "&electionId=" +
        electionId +
        "&key=" +
        config.API_KEY
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  }, []);
  const listItems = [];

  if (data.contests != undefined) {
    for (var i = 0; i < data.contests.length; i++) {
      
      listItems.push(
        <RacesBox
          key={"uniqueId1" + i}
          text={
            data.contests[i].ballotTitle
              ? data.contests[i].ballotTitle
              : data.contests[i].office
          } // ballot title is office in georgia
          navigation={navigation}
          data={data.contests[i]}
        />
      );
    }
  }

  return (
    <>
      <SectionList
        background={"#e4e3f1"}
        ListFooterComponent={
          <>
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
