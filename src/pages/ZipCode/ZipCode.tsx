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
    FormControl,
    VStack,
    Image,
    Input,
    Box,
  } from "native-base";

const ZipCode = ({navigation}) => {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const validate =  () => {
    var re = new RegExp('\\d{5}')

    console.log()
    if (formData.zip === undefined) {
      setErrors({ ...errors,
        name: 'Please enter a zipcode'
      });
      return false
    } else if (re.test(formData.zip)) {
      // if ('name' in errors ) { delete errors.name } THIS DOES NOT REMOVE THE ERROR MESSAGE FROM THE FORM
      return true
    } else {
      setErrors({ ...errors,
        name: 'Please enter a 5-digit zipcode'
      });
    }
  }

    const onSubmit = () => {

      if (validate()) {
        console.log('Validation Worked');
        navigation.navigate('Events')
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
    <VStack space={5} maxW="200px" alignItems="center">
      <FormControl isRequired isInvalid={'name' in errors}>
        <Input size="sm"  variant="underlined" placeholder="Enter Zipcode" 
          onChangeText={value => setData({ ...formData, zip: value })}/>
          {'name' in errors ? 
          <FormControl.ErrorMessage>Please enter a 5-digit Zipcode</FormControl.ErrorMessage> 
          : <></>}
        <Button onPress={onSubmit}> Search by Zipcode</Button>
      </FormControl>
  <HStack space={5} alignItems="center" >
    <Divider maxW="110px" bg="#000"/>
    <Heading size="md">or</Heading>
    <Divider maxW="110px" bg="#000"/>
  </HStack>
  <Button onPress={() => navigation.navigate('Events')}> Use my current location </Button>
</VStack>
</Center>
</>
  )
}

export default ZipCode