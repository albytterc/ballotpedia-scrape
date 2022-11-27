import {ActivityIndicator, ScrollView, View} from "react-native";
import React, {useEffect, useState} from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Heading, Text} from "native-base";
import InfoData from "../../InfoData/InfoData";

const LearnMore = ({raceTitle, route}) => {
    const title = raceTitle || route.params.title;
    const BASE_URL = "https://ballotpedia-api.cyclic.app/api/info/";
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        fetch(BASE_URL + title)
        .then((res) => res.json())
        .then((json) => setApiData(json.summary))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <ScrollView>
            <Heading
                size={"lg"}
                textAlign="center"
                marginTop={"1rem"}
                marginBottom={"1rem"}
            >
                What is the
            </Heading>
            <Heading size={"md"} textAlign="center" marginBottom={"1rem"}>
                {title}?
            </Heading>
            {loading ? <ActivityIndicator size={"large"}/> :
                (
                    <Text color={!apiData ? "#ff0000" : "black"} fontSize="24px"
                          paddingBottom={"1rem"} marginX={"0.25rem"}>
                        {apiData || "Oops! Couldn't find any info for " + title}
                    </Text>
                )
            }
        </ScrollView>
    );
};

export default LearnMore;
