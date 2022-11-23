import React from "react";
import { Link, VStack, Heading, Box } from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const BallotItemBox = ({
  title,
  navigation,
  data,
  navigateTo,
  colorHex,
  listItems,
  userAddress,
  electionId,
}) => {
  return (
    <Link
      width={"95%"}
      height={"150px"}
      bg={colorHex}
      p="4"
      shadow={2}
      borderRadius={20}
      alignItems={"center"}
      margin={"auto"}
      marginBottom={"3"}
      onPress={() =>
        navigation.navigate(navigateTo, {
          data: data,
          listItems: listItems,
          userAddress: userAddress,
          electionId: electionId,
        })
      }
      mt="8"
    >
      <Icon
        style={{ position: "absolute", left: "10%" }}
        color={"white"}
        name={"checkbox-outline"}
        size={50}
      />
      <Box
        position={"absolute"}
        right={"20%"}
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
