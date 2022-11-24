import React from "react";
import { SectionList, Box, Heading, Button, Text, Link } from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

const MeasureInfo = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SectionList
      background={"white"}
      ListFooterComponent={
        <Box key={"TODO"}>
          <Heading
            size={"lg"}
            textAlign={"center"}
            marginTop={"1rem"}
            marginX={"1.5rem"}
            marginBottom={"1rem"}
          >
            {/* {data.ballotTitle} */}
            {data.referendumTitle}
          </Heading>
          <Text marginX={"1.5rem"} textAlign={"left"}>
            {/* {data.referendumText} */}
            {data.referendumSubtitle}
          </Text>
          <Link
            marginTop={"5"}
            justifyContent={"center"}
            href={data.referendumUrl}
            borderWidth={"1px"}
          >
            <Box display={"flex"} alignItems={"center"}>
              <FontAwesomeIcon
                style={{ position: "absolute", right: "15%", top: "10%" }}
                size={20}
                icon={faMagnifyingGlass}
              />
              <Heading>Learn More </Heading>
              <Text color={"#0096FF"}>{data.referendumUrl}</Text>
            </Box>
          </Link>

          {/* <Button
            display={"flex"}
            width={"80%"}
            alignSelf={"center"}
            marginTop={"5"}
            borderRadius={"10px"}
            borderWidth={".3px"}
            bg={"black"}
            onPress={() => navigation.navigate("Polling Location")}
          >
            <Icon
              style={{ position: "absolute", right: "-50%", top: "-50%" }}
              color={"white"}
              name={"arrow-right-bold"}
              size={35}
            />
            <Heading alignSelf={"flex-start"} size={"xs"} color={"white"}>
              I'M READY TO VOTE
            </Heading>
          </Button> */}
        </Box>
      }
      sections={[]}
    />
  );
};

export default MeasureInfo;
