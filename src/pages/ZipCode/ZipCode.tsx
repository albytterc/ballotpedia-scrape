import { View } from "react-native";
import React, { useState, useEffect } from "react";
import {
  Link,
  Divider,
  Button,
  HStack,
  Center,
  Heading,
  FormControl,
  VStack,
  Input,
  Text,
  Spinner,
} from "native-base";

import * as Location from "expo-location";
import config from "../../../config";

const ZipCode = ({ navigation }) => {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [location, setLocation] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    var re = new RegExp(".*,.*,.?[A-Za-z]{2} \\d{5}");
    if (formData.address === undefined) {
      setErrors({ ...errors, name: "Please enter an address" });
      return false;
    } else if (re.test(formData.address)) {
      // if ('name' in errors ) { delete errors.name } THIS DOES NOT REMOVE THE ERROR MESSAGE FROM THE FORM
      return true;
    } else {
      setErrors({ ...errors, name: "Please enter a proper address" });
    }
  };

  const useEffect = () => {
    let text = "";
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrors({
          ...errors,
          permission: "Permission to access location was denied",
        });
        return;
      }

      let apiKey = config.MAPS_API_KEY;
      Location.setGoogleApiKey(apiKey); //<== THIS IS DEFINITELY NEEDED FOR WEB

      setLoading(true);
      let curr_location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = curr_location["coords"];
      let address_loc = await Location.reverseGeocodeAsync(
        {
          latitude,
          longitude,
        },
        { useGoogleMaps: false }
      ); //DOESN'T WORK WITH WEB COZ WEB USES GOOGLE MAPS AND NEEDS API KEY
      //THIS FUNCTION DOESN'T WORK -- FIGURE OUT WHY!!!!!
      // setLocation({ ...location, location: address_loc[0]});
      // console.log(location.location)

      let address_string = `${address_loc[0].streetNumber} ${address_loc[0].street}, ${address_loc[0]["city"]}, ${address_loc[0]["region"]} ${address_loc[0]["postalCode"]}`;

      //THIS DOESN'T WORK EITHER -- FIGURE OUT WHY!!!!!
      // setData({...formData, address: address_string})
      // console.log(formData.address)

      setLoading(false);
      //I'M USING NO STATE VAR BUT THE STRING ITSELF FOR NOW
      navigation.navigate("Events", {
        userAddress: address_string,
      });
    })();
  };

  const onSubmit = () => {
    if (validate()) {
      navigation.navigate("Events", {
        userAddress: formData.address,
      });
    }
  };

  return (
    <>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} w="55%" alignItems="center">
          <FormControl isRequired isInvalid={"name" in errors}>
            {/* {loading ? <Spinner size="sm"/> : <></>} */}
            <Input
              size="sm"
              variant="underlined"
              placeholder="55 Vote St, Votetown, NC 55555"
              onChangeText={(value) => setData({ ...formData, address: value })}
            />
            {"name" in errors ? (
              <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage>
            ) : (
              <></>
            )}
            <Button bg={"black"} onPress={onSubmit}>
              <Text color={"white"}>Search by address</Text>
            </Button>
          </FormControl>
          <HStack space={5} alignItems="center">
            <Divider w="50%" bg="#000" />
            <Heading size="md">or</Heading>
            <Divider w="50%" bg="#000" />
          </HStack>
          {loading ? <Spinner size="sm" /> : <></>}
          <Button w="100%" bg={"black"} onPress={useEffect}>
            {" "}
            Use my current location
          </Button>
        </VStack>
      </Center>
    </>
  );
};

export default ZipCode;
