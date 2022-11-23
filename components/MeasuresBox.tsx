import React from "react";
import { Link, Heading, Box, Text } from "native-base";

const MeasuresBox = ({
  text,
  navigation,
  measuresData,
  userAddress,
  electionId,
}) => {
  console.log(measuresData);
  return (
    <Link
      style={{ width: "45%", aspectRatio: 1 }}
      height="100px"
      bg={"#56941e"}
      p="4"
      shadow={2}
      borderRadius={50}
      borderColor={"black"}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      flexDirection={"row"}
      marginBottom={"10px"}
      onPress={() =>
        navigation.navigate("Measure Info", {
          data: measuresData,
          userAddress: userAddress,
          electionId: electionId,
        })
      }
      mt="8"
    >
      <Box>
        <Heading
          size={"sm"}
          color="#FFFFFF"
          fontWeight={"600"}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
        >
          {measuresData.referendumTitle}
        </Heading>
      </Box>
    </Link>
  );
};

export default MeasuresBox;
