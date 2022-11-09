import { View, Text } from "react-native";
import React from "react";
import { Link, Icon, VStack, Heading, Box } from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
const BallotItemBox = ({
  title,
  navigation,
  data,
  navigateTo,
  colorHex,
  listItems,
}) => {
  return (
    <Link
      width={"95%"}
      height={"150px"}
      bg={colorHex}
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
        navigation.navigate(navigateTo, { data: data, listItems: listItems })
      }
      mt="8"
    >
      <FontAwesomeIcon color="white" size={30} icon={faCheck} />
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
            {title}
          </Heading>
        </VStack>
      </Box>
    </Link>
  );
};

export default BallotItemBox;
