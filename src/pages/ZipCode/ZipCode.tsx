import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react';
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
  } from "native-base";

  import * as Location from 'expo-location';


const ZipCode = ({navigation}) => {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [location, setLocation] = React.useState({});


  const validate =  () => {
    var re = new RegExp('.*,.*,.?[A-Za-z]{2} \\d{5}')
    
    if (formData.address === undefined) {
      setErrors({ ...errors,
        name: 'Please enter an address'
      });
      return false
    } else if (re.test(formData.address)) {
      // if ('name' in errors ) { delete errors.name } THIS DOES NOT REMOVE THE ERROR MESSAGE FROM THE FORM
      return true
    } else {
      setErrors({ ...errors,
        name: 'Please enter a proper address'
      });
    }
  }

  const useEffect = () => {
    let text = '';
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrors({...errors,
          permission: 'Permission to access location was denied'});
        return;
      }

      let apiKey = 'AIzaSyD8yO4iSqHH7ZhrYlmugsA7nNrGGvIMVCc'
      Location.setGoogleApiKey(apiKey) //<== THIS IS DEFINITELY NEEDED FOR WEB

      let curr_location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = curr_location['coords'];
      let address_loc = await Location.reverseGeocodeAsync({
        latitude,
        longitude}, {useGoogleMaps: false}); //DOESN'T WORK WITH WEB COZ WEB USES GOOGLE MAPS AND NEEDS API KEY

      console.log(address_loc)

      //THIS FUNCTION DOESN'T WORK -- FIGURE OUT WHY!!!!!
      // setLocation({ ...location, location: address_loc[0]});
      // console.log(location.location)

      let address_string = `${address_loc[0].streetNumber} ${address_loc[0].street}, ${address_loc[0]["city"]}, ${address_loc[0]["region"]} ${address_loc[0]["postalCode"]}`
      console.log(address_string)

      //THIS DOESN'T WORK EITHER -- FIGURE OUT WHY!!!!! 
      // setData({...formData, address: address_string})
      // console.log(formData.address)

      //I'M USING NO STATE VAR BUT THE STRING ITSELF FOR NOW
      navigation.navigate('Events', {
        // itemId: 1,
        userAddress: address_string
      })

    })();


  }

    const onSubmit = () => {

      if (validate()) {
        navigation.navigate('Events', {
          // itemId: 1,
          userAddress: formData.address
        })
      } else {
        console.log('Validation Failed')
      }
    }

  return (
    <>
      <Center
          _dark={{ bg: "blueGray.900" }}
          _light={{ bg: "blueGray.50" }}
          px={4}
          flex={1}
        >
    <VStack space={5} w="55%" alignItems="center">
      <FormControl isRequired isInvalid={'name' in errors}>
        <Input size="sm"  variant="underlined" placeholder="55 Vote St, Votetown, NC 55555" 
          onChangeText={value => setData({ ...formData, address: value })}/>
          {'name' in errors ? 
          <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage> 
          : <></>}
        <Button onPress={onSubmit}> Search by address</Button>
      </FormControl>
  <HStack space={5} alignItems="center" >
    <Divider w="50%" bg="#000"/>
    <Heading size="md">or</Heading>
    <Divider  w="50%" bg="#000"/>
  </HStack>
  <Button w="100%" onPress={useEffect}> Use my current location 
  </Button>
</VStack>
</Center>
</>
  )
}

export default ZipCode