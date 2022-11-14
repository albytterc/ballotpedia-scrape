import { StyleSheet, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Heading, Box, Text, Link, SectionList } from "native-base";  
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer"; 
import MapView, {Marker} from "react-native-maps";
import Geocoder from 'react-native-geocoding';
import config from "../../../config";


let value: JSON | null = "undefined";

const PollLocation = ({ route, navigation }) => {
  // console.log("PARAMS!!", route.params)
  const [input, setInput] = useState("");
  const [PollGeoCode, setPollGeoCode] = useState({});

  const styles = StyleSheet.create({map: {
    width: Dimensions.get('window').width*0.8,
    height: Dimensions.get('window').height/2,
  },});
  
  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem("poll_location_");

      if (value != null) {
        console.log(JSON.parse(value));
        setInput(JSON.parse(value)); 
      }
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };

  const getGeoCode = async() => {
    // readData();
    
      const searchAddress = input.line1 + ", " + input.city + ", " + input.state + " " + input.zip
      Geocoder.init(config.MAPS_API_KEY); // use a valid API key
      Geocoder.from(searchAddress)
        .then(json => {
        var location = json.results[0].geometry.location;
        console.log(location);
        setPollGeoCode(location);
      }).catch(error => console.warn(error));
    
  }

  useEffect(  () => {
     readData();
     getGeoCode();
    // const intRegion = {
    //   latitude: PollGeoCode.lat,
    //   longitude: PollGeoCode.lng,
    //   latitudeDelta: 0.01,
    //   longitudeDelta: 0.01,
    // };
    // const PollingLocMarkerRegion = {
    //   latitude: PollGeoCode.lat,
    //   longitude: PollGeoCode.lng,
    // };
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
            {/* <FaBeer />? */}
          </Heading>

          <Icon color={"green"} name={"map-marker-outline"} size={50}></Icon>
          {""}
          <Text fontSize={20} fontWeight={600}>
            {input.locationName}
          </Text>
          <Text fontSize={20}> {input.line1 + ","}</Text>
          <Text fontSize={20}> {input.city + ","}</Text>
          <Text fontSize={20}> {input.state + " " + input.zip}</Text>
          {""}
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
            }} />
          </MapView>
          <Heading
            size={"xl"}
            textAlign={"center"}
            marginTop={"1rem"}
            marginBottom={"1rem"}
          >
            Register Here{" "}
          </Heading>
          <Link href="https://registertovote.sos.ga.gov/">
            <Icon
              // onPress={"https://registertovote.sos.ga.gov/"}
              color={"black"}
              name={"file-document-edit"}
              size={50}
            ></Icon>
          </Link>
        </Box>
      }
      sections={[]}
    />
  );
};

export default PollLocation;
