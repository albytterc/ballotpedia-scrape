
import { StyleSheet, FlatList, Alert } from "react-native";
import React, {Component,  useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import EventBox from "../../../components/EventBox";

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

import fetch from "node-fetch";
import { useEffect } from "react";
var APIKey = "AIzaSyCVdgz-mQ4wpNn3-4CNrQ9MQqaKpNEp1rs";

const Events = ({ route, navigation }) => {
  const {itemId, userZip} = route.params
  const [events, setEvents] = useState([]);

  useEffect(()=>{
    var queryURL = "https://www.googleapis.com/civicinfo/v2/elections?key=" + APIKey;
    fetch(queryURL)
    .then(
    (response) => response.json()
    )
    .then(
    (data) => setEvents(data)
    )
    .catch((error) => alert(error));
  },[]);

  console.log(events)
  
  const listItems = [];
  if (events.elections != undefined) {
    console.log(events.elections);
    console.log(events.elections.length);
    for (var i = 0; i < events.elections.length; i++) {
      listItems.push(<EventBox event={events.elections[i]} />);
      console.log(events.elections[i])
    }
  }

  console.log(listItems);

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
              marginLeft={"30%"}
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
            {listItems}
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
