import React from "react";
import { Box, Heading, VStack } from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface EventBoxProps {
  event: {
    id: number;
    type: string;
    title: string;
    date: string;
  };
}

export default function EventBox({ event }: EventBoxProps) {
  return (
    <Box
      width={"95%"}
      height={"150px"}
      bg="#2708A0"
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
    >
      <Icon name="vote-outline" size={70} color="teal"></Icon>

      <Box width={"auto"} alignItems={"center"}>
        <VStack>
          <Heading size="xl" color="#FFFFFF">
            {event.title}
          </Heading>
          <Heading
            size="sm"
            alignSelf={"flex-end"}
            marginTop="1rem"
            color="#FFFFFF"
          >
            {event.date}
          </Heading>
        </VStack>
      </Box>
    </Box>
  );
}
