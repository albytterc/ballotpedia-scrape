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
} from "native-base";
import {WebView} from 'react-native-webview';

const CandidateVotingRecord= ({ route, navigation }) => {
  const candidate_name = route.params.candidateName;
  console.log(candidate_name);
  const heading = "View " + candidate_name + "'s voting record on Vote Smart";
  const instruction = "1. Search for the candidate " + candidate_name + "\n2. Choose the category 'VOTES'\n3. Scroll down to see " + candidate_name + "'s previous voting record";


  const BASE_URL = "https://ballotpedia-api.cyclic.app`/votesmart-api/";

  const [isLoading, setLoading] = useState(true);
  const [candidateID, setCandidateID] = useState({
    id: ""
  });

  const fetchData = () => {
        fetch(BASE_URL + candidate_name)
        .then((response) => response.json())
        .then((json) => setCandidateID(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }

    useEffect(() => {
        fetchData();
    }, []);

  const url = "https://justfacts.votesmart.org/candidate/key-votes/" + candidateID.id + "/" + "";





  return (
    <Box>
        <Heading
            size={"lg"}
            textAlign={"center"}
            marginTop={"1rem"}
        >
            {heading}
        </Heading>
        <Heading
            size={"sm"}
            textAlign={"center"}
            marginTop={"1rem"}
            marginBottom={"1rem"}
        >
            {instruction}
        </Heading>
        <View style={{width: "90%", height:"90%", marginLeft:"5%"}}>
            <WebView
                source={{uri: url}}
                onLoad={console.log('Loaded!')}
            />
        </View>
        
    </Box>
  );
};

export default CandidateVotingRecord;
