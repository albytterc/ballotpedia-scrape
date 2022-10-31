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
      bg="#A29CF4"
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
      onPress={() => navigation.navigate("Races", { userAddress: vars })}
      mt="8"
    >
      <Icon name="vote-outline" size={70} color="black"></Icon>

      <Box width={"auto"} alignItems={"center"}>
        <VStack>
          <Heading size="sm" color="#FFFFFF">
            {event.name}
          </Heading>
          <Heading
            size="sm"
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
