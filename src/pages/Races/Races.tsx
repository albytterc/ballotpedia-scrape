import { Box, FlatList, Heading, VStack, SectionList } from "native-base";
import React, { useState, useEffect } from "react";
import RacesBox from "../../../components/RacesBox";
import config from "../../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "https://www.googleapis.com/civicinfo/v2";
const endpoint = "/voterinfo";
const electionId = "8000";

const Races = ({ route, navigation }) => {
  let listItems = route.params.listItems;

  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     BASE_URL +
  //       endpoint +
  //       "?address=" +
  //       userAddress +
  //       "&electionId=" +
  //       electionId +
  //       "&key=" +
  //       config.API_KEY
  //   )
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => alert(error))
  //     .finally(() => setLoading(false));
  // }, []);
  // const listItems = [];

  // if (data.contests != undefined) {
  //   console.log(data);
  //   try {
  //     console.log(data.pollingLocations[0].address);
  //     AsyncStorage.setItem(
  //       "poll_location_",
  //       JSON.stringify(data.pollingLocations[0].address)
  //     );
  //   } catch (e) {
  //     alert("Failed to save the data to the storage");
  //   }

  //   for (var i = 0; i < data.contests.length; i++) {
  //     listItems.push(
  //       <RacesBox
  //         key={String(i)}
  //         text={
  //           data.contests[i].ballotTitle
  //             ? data.contests[i].ballotTitle
  //             : data.contests[i].office
  //         } // ballot title is office in georgia
  //         navigation={navigation}
  //         data={data.contests[i]}
  //       />
  //     );
  //   }
  // }

  return (
    <>
      <SectionList
        background={"white"}
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
      {/* <FlatList
        data={listItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => item}
        // renderItem={({item}) => {item} />}
      /> */}
    </>
  );
};

export default Races;
