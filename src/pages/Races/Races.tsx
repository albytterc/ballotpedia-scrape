import { View, Text } from "react-native";
import { Box, Heading, VStack } from "native-base";
import React from "react";
import RacesBox from "../../../components/RacesBox";

const Races = () => {
  return (
    <>
      <Heading>Races</Heading>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        flexWrap={"wrap"}
      >
        <RacesBox text={"Hello"} />
        <RacesBox text={"Hello"} />
        <RacesBox text={"Hello"} />
        <RacesBox text={"Hello"} />
        <RacesBox text={"Hello"} />
        <RacesBox text={"Hello"} />
        <RacesBox text={"Hello"} />
        <RacesBox text={"Hello"} />
        <RacesBox text={"Hello"} />
        <RacesBox text={"Hello"} />
      </Box>
    </>
  );
};

export default Races;
