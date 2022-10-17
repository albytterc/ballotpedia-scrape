
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

// // Google Civic Info API
// function FindAllElection() {
//     var queryURL = "https://www.googleapis.com/civicinfo/v2/elections?key=" + APIKey;
//     fetch(queryURL)
//     .then(
//     (response) => response.json()
//     )
//     .then(
//     (data) => console.log(data)
//     );
// }

// function FindLocalElection(location:string) {
//     var queryURL = "https://www.googleapis.com/civicinfo/v2/voterinfo?key=" + APIKey + "&address=" + location + "&electionId=8000";
//     fetch(queryURL)
//     .then(
//     (response) => response.json()
//     )
//     .then(
//     (data) => console.log(data)
//     );
// }

// FindAllElection();
// var location = "2532 North Decatur Road, Decatur, GA, 30033";
// FindLocalElection(location);

const Events = ({ route, navigation }) => {
  const {itemId, userZip} = route.params
  const [elections, setElections] = useState([]);

  useEffect(()=>{
    var queryURL = "https://www.googleapis.com/civicinfo/v2/elections?key=" + APIKey;
    fetch(queryURL)
    .then(
    (response) => response.json()
    )
    .then(
    (data) => setElections(data)
    )
    .catch((error) => alert(error));
  },[]);

  console.log(elections)
  
  const listItems = [];
  if (elections.contests != undefined) {
    console.log(data.contests);
    console.log(data.contests.length);
    for (var i = 0; i < data.contests.length; i++) {
      listItems.push(<RacesBox text={data.contests[i].ballotTitle} />);
    }

//    if (data != undefined) {
//             console.log(data.elections)
//             for ( const election of data.elections) {
//                         if (election != undefined) {
//                             setElections([
//                                 {
//                                     electionDay: election.electionDay,
//                                     id: election.id,
//                                     name: election.name,
//                                     ocdDivisionID: election.ocdDivisionID
//                                 }
//                             ])
//                         }   
//             }
//         }
//     }



  return (
    <Box>
    <Text>electionDay: {elections.electionDay}</Text>
    <Text>id: {elections.id}</Text>
    <Text>name: {elections.name}</Text>
    <Text>ocdDivisionID: {elections.ocdDivisionID}</Text>
    {/* <Box
      flexGrow={1}
      flexDirection="column"
      justifyContent="space-between"
      height={"100%"}
      marginY="2"
      padding={2}
    >
      <SectionList
        marginY={2}
        sections={elections}
        renderItem={renderItem}
        renderSectionHeader={({ section: { type } }) => (
          <Heading>{type}</Heading>
        )}
        ListFooterComponent={
          <Button
            alignSelf={"center"}
            size="lg"
            onPress={() => navigation.navigate("Home")}
          >
            Unlock the Vault
          </Button>
        }
      />
    </Box> */}
    </Box>
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
