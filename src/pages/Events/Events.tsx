
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

const Events = ({ route, navigation }) => {
  const {itemId, userZip} = route.params
  const [events, setEvents] = useState([
    {
      type: "Elections",
      data: [
        {
          id: 1,
          type: "Elections",
          title: "General Election",
          date: "November 8th, 2022",
        },
        {
          id: 2,
          type: "Elections",
          title: "General Election",
          date: "November 8th, 2022",
        },
      ],
    },
    {
      type: "Rallies",
      data: [
        {
          id: 3,
          type: "Rallies",
          title: "Candidate #1 Rally",
          date: "November 8th, 2022",
        },
        {
          id: 4,
          type: "Elections",
          title: "Candidate #2 Rally",
          date: "November 8th, 2022",
        },
      ],
    },
  ]);

  return (
    <Box
      flexGrow={1}
      flexDirection="column"
      justifyContent="space-between"
      height={"100%"}
      marginY="2"
      padding={2}
    >
      <SectionList
        marginY={2}
        sections={events}
        renderItem={({ item }) => <EventBox event={item} />}
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
