import { View, Text } from 'react-native'
import React from 'react'
import {
    Link,
    Divider,
    Button,
    HStack,
    Center,
    Heading,
    Switch,
    useColorMode,
    NativeBaseProvider,
    extendTheme,
    VStack,
    Image,
    Input,
    Box,
  } from "native-base";

const ZipCode = ({navigation}) => {
  return (
    <>
      <Center
          _dark={{ bg: "blueGray.900" }}
          _light={{ bg: "blueGray.50" }}
          px={4}
          flex={1}
        >
    <VStack space={5} maxW="200px" alignItems="center">
  <Input size="sm"  variant="underlined" placeholder="Enter Zipcode"/>
  <Button> Search by Zipcode</Button>
  <HStack space={5} alignItems="center" >
    <Divider maxW="110px" bg="#000"/>
    <Heading size="md">or</Heading>
    <Divider maxW="110px" bg="#000"/>
  </HStack>
  <Button onPress={() => navigation.navigate('Home')}> Use my current location </Button>
</VStack>
</Center>
</>
  )
}

export default ZipCode