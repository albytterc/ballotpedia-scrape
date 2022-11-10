import React from "react";
import { Box, Heading, VStack, Link } from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface EventBoxProps {
  event: {
    id: string;
    ocdDivisionID: string;
    name: string;
    electionDate: string;
  };
}

export default function EventBox({ event, navigation, vars }) {
  return (
    <Link
      width={"95%"}
      height={"150px"}
      bg="#383E56"
      p="4"
      shadow={2}
      borderRadius={20}
      borderWidth="2px"
      alignItems={"center"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent="space-around"
      margin={"auto"}
      marginBottom={"3"}
      onPress={() =>
        navigation.navigate("Ballot Items", {
          userAddress: vars.userAddress,
          navigation: { navigation },
        })
      }
      mt="8"
    >
      <Icon name="vote-outline" size={70} color="white"></Icon>

      <Box
        width={"auto"}
        alignItems={"center"}
        bg={{
          linearGradient: {
            colors: ["red", "blue"],
            start: [0, 0],
            end: [1, 0],
          },
        }}
      >
        <VStack>
          <Heading size="md" color="white">
            {event.name}
          </Heading>
          <Heading
            size="xs"
            alignSelf={"flex-end"}
            marginTop="1rem"
            color="#FFFFFF"
          >
            {event.electionDay}
          </Heading>
        </VStack>
      </Box>
    </Link>
  );
}
