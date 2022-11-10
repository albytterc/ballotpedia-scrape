import { View, Text } from "react-native";
import React from "react";
import { SectionList, Box } from "native-base";

const Measures = ({ route, navigation }) => {
  let listItems = route.params.listItems;
  return (
    <SectionList
      background={"white"}
      ListFooterComponent={
        <>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            flexWrap={"wrap"}
          >
            {listItems}
          </Box>
        </>
      }
      sections={[]}
    />
  );
};

export default Measures;
