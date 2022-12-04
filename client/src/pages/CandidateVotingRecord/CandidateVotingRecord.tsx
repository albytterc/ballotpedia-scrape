import { View } from "react-native";
import React, {useState, useEffect} from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  Pressable,
  Link,
  SectionList,
  Spinner,
} from "native-base";
import {WebView} from 'react-native-webview';

const CandidateVotingRecord= ({ route, navigation }) => {
    let candidate_name = route.params.candidate.name;

    const heading = "View " + candidate_name + "'s voting record on Vote Smart";

    // const BASE_URL = "https://ballotpedia-api.cyclic.app/votesmart-api/";
    const BASE_URL = "http://localhost:3000/votesmart-api/";

    const [isLoading, setLoading] = useState(true);
    const [candidateURL, setCandidateURL] = useState({
        url: "",
    });


    const fetchData = () => {
            fetch(BASE_URL + candidate_name)
            .then((response) => response.json())
            .then(async (json) => setCandidateURL(json))
            .catch((error) => console.error(error))
            .then(() => console.log(candidateURL))
            .finally(() => setLoading(false));
        }

    useEffect(() => {
        fetchData();
    }, []);


    const renderItem = (item: any) => {
        return (
            <Box>
                 {!isLoading ? 
                 (
                    <View>
                        <Heading
                        size={"lg"}
                        textAlign={"center"}
                        marginTop={"1rem"}
                        marginBottom={"1rem"}
                        >
                        {heading}
                        </Heading>
                        <View style={{width: "90%", height:"90%", marginLeft:"5%"}}>
                            <WebView
                                source={{uri: item.url}}
                                // onLoad={console.log('Loaded!')}
                            />
                        </View> 
                    </View>
                 )
                : (
                    <View>
                        <Heading
                        size={"lg"}
                        textAlign={"center"}
                        marginTop={"1rem"}
                        marginBottom={"1rem"}
                        >
                            {heading}
                        </Heading>
                        <Spinner size="sm" />
                    </View>
                    
                )}           
            </Box>   
        )
    }



  return (
    <View>
        {renderItem(candidateURL)}
    </View>
  );
};

export default CandidateVotingRecord;
