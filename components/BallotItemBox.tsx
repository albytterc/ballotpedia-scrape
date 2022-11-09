import { View, Text } from "react-native";
import React from "react";
import { Link, Icon, VStack, Heading, Box } from "native-base";

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
            {title}
          </Heading>
          <Heading
            size="xs"
            alignSelf={"flex-end"}
            marginTop="1rem"
            color="#FFFFFF"
          >
            {title}
          </Heading>
        </VStack>
      </Box>
    </Link>
  );
};

export default BallotItemBox;
