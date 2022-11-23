import React, { useState } from "react";
import EventBox from "../../../components/EventBox";
import config from "../../../config";

import { Box, SectionList } from "native-base";
import { useEffect } from "react";

const Events = ({ route, navigation }) => {
  const routeVars = route.params;

  const [events, setEvents] = useState([]);

  useEffect(() => {
    var queryURL =
      "https://www.googleapis.com/civicinfo/v2/elections?key=" + config.API_KEY;
    fetch(queryURL)
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => alert(error));
  }, []);

  var listItems;
  var sorted_listItems;
  if (events.elections == undefined) {
    console.log("no election found");
  } else {
    listItems = events.elections.map((election) => (
      <EventBox
        key={election.id}
        event={election}
        navigation={navigation}
        vars={routeVars}
      />
    ));
    sorted_listItems = listItems.sort((e1, e2) => {
      if (e1.props.event.electionDay > e2.props.event.electionDay) {
        return 1;
      }
      return -1;
    });
  }

  return (
    <>
      <SectionList
        background={"white"}
        ListFooterComponent={
          <>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              flexWrap={"wrap"}
            >
              {sorted_listItems}
            </Box>
          </>
        }
        sections={[]}
      />
    </>
  );
};

export default Events;
