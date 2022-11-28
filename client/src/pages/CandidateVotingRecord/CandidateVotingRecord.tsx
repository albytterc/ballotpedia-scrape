import {View} from "react-native";
import React from "react";
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

const CandidateVotingRecord = ({ route, navigation }) => {
    const candidate_name = route.params.candidate.name;
    const heading = "View " + candidate_name + "'s voting record on Vote Smart";
    const instruction = "1. Search for the candidate " + candidate_name + "\n2. Choose the category 'VOTES'\n3. Scroll down to see " + candidate_name + "'s previous voting record";

    const url = "https://justfacts.votesmart.org/";

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
            <View style={{width: "90%", height: "90%", marginLeft: "5%"}}>
                <WebView
                    source={{uri: url}}
                    onLoad={console.log('Loaded!')}
                />
            </View>

        </Box>
    );
};

export default CandidateVotingRecord;
