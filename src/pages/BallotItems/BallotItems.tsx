import { View, Text, DrawerLayoutAndroid } from "react-native";
import { SectionList, Box } from "native-base";
import React, { useState, useEffect } from "react";
import BallotItemBox from "../../../components/BallotItemBox";
import config from "../../../config";
import RacesBox from "../../../components/RacesBox";
import MeasuresBox from "../../../components/MeasuresBox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import historicalPollingLocation from "../../../assets/api-data/ga/athens-ga.json";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faRepublican } from "@fortawesome/free-solid-svg-icons/faRepublican";

const BASE_URL = "https://www.googleapis.com/civicinfo/v2";
const endpoint = "/voterinfo";

const BallotItems = ({ route, navigation }) => {
  let userAddress = route.params.userAddress;
  const electionId = route.params.electionId;

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
  console.log(data);
  const RacesList = [];
  const MeasuresList = [];

  if (data.contests != undefined) {
    try {
      AsyncStorage.setItem(
        "poll_location_",
        JSON.stringify(historicalPollingLocation.pollingLocations[0].address)
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
            userAddress={userAddress}
            electionId={electionId}
          />
        );
      } else if (data.contests[i].type === "Referendum") {
        MeasuresList.push(
          <MeasuresBox
            key={String(i)}
            text={
              data.contests[i].ballotTitle
                ? data.contests[i].ballotTitle
                : // : data.contests[i].office
                  data.contests[i].referendumTitle
            } // ballot title is office in georgia -- I AM MODIFYING THIS TO WORK WITH THE TEST DATA ON THE API!!!!!!!!!!
            navigation={navigation}
            measuresData={data.contests[i]}
            userAddress={userAddress}
            electionId={electionId}
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
              userAddress={userAddress}
              electionId={electionId}
            />
            <BallotItemBox
              title={"Measures"}
              navigation={navigation}
              data={data}
              navigateTo={"Measures"}
              colorHex={"#8B4000"}
              listItems={MeasuresList}
              userAddress={userAddress}
              electionId={electionId}
            />
          </Box>
        </>
      }
      sections={[]}
    />
  );
};

export default BallotItems;
