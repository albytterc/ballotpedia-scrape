import { Box, Text, Link } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons/faBuildingColumns";

const RacesBox = ({ text, navigation, data, userAddress, electionId }) => {
  return (
    <Link
      style={{ width: "45%", aspectRatio: 1 }}
      height="100%"
      p="4"
      bg={"#6749A1"}
      shadow={2}
      borderRadius={30}
      borderColor={"white"}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      flexDirection={"row"}
      marginBottom={"10px"}
      onPress={() =>
        navigation.navigate("Candidates", {
          data: data,
          userAddress: userAddress,
          electionId: electionId,
        })
      }
      mt="8"
    >
      <Icon
        name={"information-outline"}
        size={25}
        color={"white"}
        style={{
          position: "absolute",
          right: "8%",
          top: "8%",
        }}
        onPress={() => navigation.navigate("Learn More", { title: text })}
      ></Icon>
      <Box>
        <Box display={"flex"} justifyContent={"center"} textAlign={"center"}>
          <Text
            color="#FFFFFF"
            fontWeight={"600"}
            fontSize={"15px"}
            textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
          >
            {text}
          </Text>
        </Box>
      </Box>
      <FontAwesomeIcon
        size={20}
        style={{
          position: "absolute",
          left: "10%",
          top: "10%",
        }}
        color={"#FFFFFF"}
        icon={faBuildingColumns}
      />
    </Link>
  );
};

export default RacesBox;
