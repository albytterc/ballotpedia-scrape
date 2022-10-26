import { StyleSheet, FlatList, Alert } from "react-native";
import React, { Component, useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import EventBox from "../../../components/EventBox";
import config from "../../../config";

import {
  View,
  Link,
  Button,
  HStack,
  VStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  Image,
  Input,
  Box,
  Divider,
  Flex,
  Text,
  // FlatList,
  ScrollView,
  SectionList,
} from "native-base";

// import fetch from "node-fetch";
import { useEffect } from "react";

const Events = ({ route, navigation }) => {
  
  const routeVars = route.params;
  
  const [events, setEvents] = useState([]);

  useEffect(() => {
    var queryURL =
      "https://www.googleapis.com/civicinfo/v2/elections?key=" + config.API_KEY;
    fetch(queryURL)
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => alert(error));
  }, []);

  //   console.log(events)

  // map all available elections into listItems.
  var listItems;
  var sorted_listItems;
  if (events.elections == undefined) {
    console.log("no election found");
  } else {
    listItems = events.elections.map((election) => (
      <EventBox key={election.id} event={election} navigation={navigation} vars={routeVars}/>
    ));
    sorted_listItems = listItems.sort((e1, e2) => {
      if (e1.props.event.electionDay > e2.props.event.electionDay) {
        return 1;
      }
      return -1;
    });
    console.log("original: \n");
    console.log(listItems);
    console.log("ordered: \n");
    console.log(sorted_listItems);
  }

  return (
    <>
      <SectionList
        background={"#e4e3f1"}
        marginY={2}
        ListFooterComponent={
          <>
            <Heading
              marginBottom={"5%"}
              marginTop={"5%"}
              marginLeft={"90px"}
              color={"black"}
            >
              Upcoming Events
            </Heading>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              flexWrap={"wrap"}
            >
              {sorted_listItems}
            </Box>
          </>
        }
        sections={[]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eeeeee",
  },
});

export default Events;
