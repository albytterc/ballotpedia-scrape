import { Text, SectionList, Box } from "native-base";
import React, { useState, useEffect } from "react";
import BallotItemBox from "../../../components/BallotItemBox";
import config from "../../../config";
import RacesBox from "../../../components/RacesBox";
import MeasuresBox from "../../../components/MeasuresBox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import historicalPollingLocation from "../../../assets/api-data/ga/athens-ga.json";

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
  // console.log(data);
  const RacesList = [];
  const MeasuresList = [];

  if (electionId == 8002){
    data.contests = config.contests
  }
  
  if (data.contests != undefined && data.normalizedInput != undefined) {
    // useEffect(() => {
    try {
      if (electionId == 2000) {
        AsyncStorage.setItem(
          "poll_location_",
          JSON.stringify(historicalPollingLocation.pollingLocations[0].address)
        );
        
      } else {
        // console.log(data.pollingLocations[0].address)
        // const pollingLocation0 = data.pollingLocations[0].address
        // console.log(typeof(data.pollingLocations[0].address))

          AsyncStorage.setItem(
            "poll_location_",
            JSON.stringify(data.pollingLocations[0].address)
          );
        
      }   
        
    } catch (e) {
      console.log(e.message)
      // alert("Failed to save the data to the storage");
    } 
  // }, []); 

    for (var i = 0; i < data.contests.length; i++) {
      if (data.contests[i].type === "General") {
        RacesList.push(
          <RacesBox
            key={String(i)}
            text={
              data.contests[i].ballotTitle
                ? data.contests[i].ballotTitle
                : data.contests[i].office
            }
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
                : data.contests[i].referendumTitle
            }
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
            {RacesList.length != 0 ?
            <BallotItemBox
              title={"Races"}
              navigation={navigation}
              data={data}
              navigateTo={"Races"}
              colorHex={"#6749A1"}
              listItems={RacesList}
              userAddress={userAddress}
              electionId={electionId}
            />: <></>
          }
            {MeasuresList.length != 0 ?
            <BallotItemBox
            title={"Measures"}
            navigation={navigation}
            data={data}
            navigateTo={"Measures"}
            colorHex={"#56941e"}
            listItems={MeasuresList}
            userAddress={userAddress}
            electionId={electionId}
          /> : <></>
            }
            
          </Box>
        </>
      }
      sections={[]}
    />
  );
};

export default BallotItems;


