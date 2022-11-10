import { View, Text } from "react-native";
import { SectionList, Box } from "native-base";
import React, { useState, useEffect } from "react";
import BallotItemBox from "../../../components/BallotItemBox";
import config from "../../../config";
import RacesBox from "../../../components/RacesBox";
import MeasuresBox from "../../../components/MeasuresBox";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "https://www.googleapis.com/civicinfo/v2";
const endpoint = "/voterinfo";
const electionId = "8000";

const BallotItems = ({ route, navigation }) => {
  // const { data } = route.params;
  // api call
  let userAddress = route.params.userAddress;

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
  const RacesList = [];
  const MeasuresList = [];
  // {type: 'General', ballotTitle: 'DeKalb County Commissioner', office: 'DeKalb County Commissioner (District 2)', level: Array(1), roles: Array(1), …}
  // 13
  // :
  // {type: 'Referendum

  if (data.contests != undefined) {
    try {
      AsyncStorage.setItem(
        "poll_location_",
        JSON.stringify(data.pollingLocations[0].address)
      );
    } catch (e) {
      alert("Failed to save the data to the storage");
    }

    for (var i = 0; i < data.contests.length; i++) {
      if (data.contests[i].type === "General") {
        RacesList.push(
          <RacesBox
            key={String(i)}
            text={
              data.contests[i].ballotTitle
                ? data.contests[i].ballotTitle
                : data.contests[i].office
            } // ballot title is office in georgia
            navigation={navigation}
            data={data.contests[i]}
          />
        );
      } else if (data.contests[i].type === "Referendum") {
        MeasuresList.push(
          <MeasuresBox
            key={String(i)}
            text={
              data.contests[i].ballotTitle
                ? data.contests[i].ballotTitle
                : data.contests[i].office
            } // ballot title is office in georgia
            navigation={navigation}
            measuresData={data.contests[i]}
          />
        );
      }
    }
  }

  return (
    <SectionList
      background={"white"}
      ListFooterComponent={
        <>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            flexWrap={"wrap"}
          >
            <BallotItemBox
              title={"Races"}
              navigation={navigation}
              data={data}
              navigateTo={"Races"}
              colorHex={"#562349"}
              listItems={RacesList}
            />
            <BallotItemBox
              title={"Measures"}
              navigation={navigation}
              data={data}
              navigateTo={"Measures"}
              colorHex={"#8B4000"}
              listItems={MeasuresList}
            />
          </Box>
        </>
      }
      sections={[]}
    />
  );
};

export default BallotItems;
