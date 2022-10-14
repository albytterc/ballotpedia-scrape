import {View, Text} from 'react-native'
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

const Home = ({navigation}) => {
  return (
    <>
    <Center
          _dark={{ bg: "blueGray.900" }}
          _light={{ bg: "blueGray.50" }}
          px={4}
          flex={1}
        >
    <VStack space={5} alignItems="center">
  {/* <Image source={require("./assets/votevaultlogo.png")} alt = {"vote vault logo"}></Image> */}
  <Heading size="lg">Vote Vault.. Coming Soon</Heading>
  <Text>Vote Vault.. Coming Soon</Text>
  <HStack space={2} alignItems="center">            
  </HStack>
  <Button onPress={() => navigation.navigate('ZipCode')}> Unlock the Vault</Button>
  {/* <ToggleDarkMode /> */}
</VStack>
</Center>
</>

    
  )
}

export default Home