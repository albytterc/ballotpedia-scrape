import {View, Text, ActivityIndicator} from "react-native";
import React, {useState, useEffect, Dispatch} from "react";

import {Box, Heading, Image, Button, ScrollView, SectionList, FlatList} from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface ProfileData {
    summary: string;
    bio: string;
    picture: string;
    contactInfo: string[];
}

const CandidateProfile = ({route, navigation}) => {
    console.log(route);
    let candidate_name = route.params.candidate.name;
    let candidate_name_split = candidate_name.split(" ");
    let first = candidate_name_split[0].toLowerCase();
    let last = candidate_name_split[candidate_name_split.length - 1].toLowerCase();
    let name_voting_record =
        first[0].toUpperCase() +
        first.substring(1) +
        " " +
        last[0].toUpperCase() +
        last.substring(1);

    const BASE_URL = "https://ballotpedia-api.cyclic.app/api/";
    const regex = /\b\w\b /;
    candidate_name = candidate_name.replace(regex, "");

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({
        summary: "",
        bio: "",
        picture: "",
        contactInfo: [],
    });

    const fetchData = () => {
        fetch(BASE_URL + candidate_name)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const renderItem = (item: ProfileData) => {
        return (
            <Box
                key={candidate_name + "candidate"}
                display={"flex"}
                alignItems={"center"}
            >
                {!isLoading && !item.picture ? (<Icon name={"account"} size={90}/>)
                    : (
                        <Image
                            // borderRadius={"100px"}
                            // borderColor={"black"}
                            // borderWidth={"2px"}
                            source={{
                                uri: item.picture
                            }}
                            alt={`Image of ${candidate_name}`}
                            size="xl"
                            resizeMode={"contain"}
                        />

                    )}
                <Heading
                    size={"md"}
                    marginLeft="1.5rem"
                    marginRight="1.5rem"
                    marginTop="2rem"
                    textAlign={"left"}
                >
                    {item.summary}
                </Heading>
            </Box>
        )
    }

    return (
        <View>
            <ScrollView
                background={"#eee"}
                flexGrow={1}>
                <Box key={candidate_name}>
                    <Heading
                        size={"2xl"}
                        textAlign={"center"}
                        marginTop={"1rem"}
                        marginBottom={"1rem"}
                    >
                        {candidate_name}
                    </Heading>
                    {isLoading && <ActivityIndicator size="large"/>}
                    {data && renderItem(data)}
                    {/*<Button bg={"black"} width={"50%"} marginLeft={"25%"}*/}
                    {/*  onPress={() => navigation.navigate("Candidate Voting Record",{candidateName: name_voting_record})}>*/}
                    {/*  Voting Record*/}
                    {/*</Button>*/}
                    <Button
                        // display={"flex"}
                        width={"80%"}
                        alignSelf={"center"}
                        marginTop={"50px"}
                        borderRadius={"50px"}
                        borderWidth={".3px"}
                        bg={"black"}
                        onPress={() => navigation.navigate("Polling Location")}
                    >
                        <Heading size={"sm"} color={"white"}>
                            VOTE
                        </Heading>
                        <Icon color={"white"} name={"arrow-right-bold"} size={45}></Icon>
                    </Button>
                </Box>
            </ScrollView>
        </View>
    );
};

export default CandidateProfile;
