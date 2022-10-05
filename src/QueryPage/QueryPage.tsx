import React, { Component } from "react";
import {
  Text,
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
import NativeBaseIcon from "../../components/NativeBaseIcon";

export default class QueryPage extends Component {
    render () {
        return (
            <VStack space={5} maxW="200px" alignItems="center">
          <Input size="sm"  variant="underlined" placeholder="Enter Zipcode"/>
          <Button> Search by Zipcode</Button>

          <HStack space={5} alignItems="center" >  
            <Divider maxW="110px" bg="#000"/>
            <Heading size="md">or</Heading>  
            <Divider maxW="110px" bg="#000"/>       
          </HStack>

          <Button onPress={dummyFunc}> Use my current location </Button>
        </VStack>
        );
    }
}

//TODO: implement use my location 
function dummyFunc() {
    return (null);
  }