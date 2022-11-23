import { StyleSheet, View, Dimensions, Platform} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Heading, Box, Text, Link, SectionList } from "native-base";
import MapView, { Marker } from "react-native-maps";
import Geocoder from "react-native-geocoding";
import config from "../../../config";

const PollLocation = () => {
  const [input, setInput] = useState("");
  const [PollGeoCode, setPollGeoCode] = useState({});

  const styles = StyleSheet.create({
    map: {
      borderRadius: "30px",
      borderColor: "green",
      borderWidth: "1px",
      width: Dimensions.get("window").width * 0.98,
      height: Dimensions.get("window").height / 2,
    },
  });

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem("poll_location_");

      if (value != null) {
        console.log(JSON.parse(value));
        setInput(JSON.parse(value));
      }
    } catch (e) {
      // alert("Failed to fetch the input from storage");
    }
  };

  const getGeoCode = async () => {
    const searchAddress =
      input.line1 + ", " + input.city + ", " + input.state + " " + input.zip;
    Geocoder.init(config.MAPS_API_KEY);
    Geocoder.from(searchAddress)
      .then((json) => {
        var location = json.results[0].geometry.location;
        console.log(location);
        setPollGeoCode(location);
      })
      .catch((error) => console.warn(error));
  };

  useEffect(() => {
    readData();
    getGeoCode();
  }, []);

  return (
    <SectionList
      background={"white"}
      ListFooterComponent={
        <Box
          background={"white"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Heading
            size={"xl"}
            textAlign={"center"}
            marginTop={"1rem"}
            marginBottom={"1rem"}
          >
            Vote Here
          </Heading>

          <Icon color={"green"} name={"map-marker-outline"} size={50}></Icon>
          <Text fontSize={20} fontWeight={600}>
            {input.locationName}
          </Text>
          <Text fontSize={20}> {input.line1 + ","}</Text>
          <Text fontSize={20}> {input.city + ","}</Text>
          <Text fontSize={20}> {input.state + " " + input.zip}</Text>

          {Platform.OS === 'web' ? <></> : 
          <MapView style={styles.map} initialRegion={{
            latitude: PollGeoCode.lat,
            longitude: PollGeoCode.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
            <Marker coordinate={{
              latitude: PollGeoCode.lat,
              longitude: PollGeoCode.lng,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: PollGeoCode.lat,
                longitude: PollGeoCode.lng,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            />
          </MapView>
          }
          
          <Heading
            size={"xl"}
            textAlign={"center"}
            marginTop={"1rem"}
            marginBottom={"1rem"}
          >
            Register Here{" "}
          </Heading>
          <Link href="https://registertovote.sos.ga.gov/">
            <Icon color={"black"} name={"file-document-edit"} size={50}></Icon>
          </Link>
        </Box>
      }
      sections={[]}
    />
  );
};

export default PollLocation;
