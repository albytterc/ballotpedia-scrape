import {Box, Text, Link, Modal, Center, Tooltip, Popover, IconButton, extendTheme} from "native-base";
import React, {useState} from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons/faBuildingColumns";
import {Pressable} from "react-native";
import learnMore from "../src/pages/LearnMore/LearnMore";
import LearnMore from "../src/pages/LearnMore/LearnMore";
import {PopoverContent} from "native-base/lib/typescript/components/composites/Popover/PopoverContent";

const RacesBox = ({text, navigation, data, userAddress, electionId}) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <Pressable
            style={{
                width: "45%", aspectRatio: 1,
                height: "100%",
                padding: 4,
                backgroundColor: "#6749A1",
                // shadow: 2,
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "column",
                marginBottom: 10,
                marginTop: 8,
            }}
            onPress={() =>
                navigation.navigate("Candidates", {
                    data: data,
                    userAddress: userAddress,
                    electionId: electionId,
                })
            }
            onLongPress={() => {
                setModalOpen(true);
            }}>

            <Box marginTop={"10%"} width={"90%"} position={"absolute"} flexDirection={"row"} justifyContent={"space-between"}>
                <FontAwesomeIcon
                    size={20}
                    // style={{
                    //     position: "absolute",
                    //     left: "10%",
                    //     top: "10%",
                    // }}
                    color={"#FFFFFF"}
                    icon={faBuildingColumns}
                />
                <Icon
                    name={"information-outline"}
                    size={25}
                    color={"white"}
                    // style={{
                    //     position: "absolute",
                    //     top: "10%",
                    //     right: "10%"
                    // }}
                    onPress={() => navigation.navigate("Learn More", {title: text})}
                />
            </Box>

            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton/>
                    <Modal.Body>
                        <LearnMore route={null} raceTitle={text}></LearnMore>
                    </Modal.Body>
                </Modal.Content>
            </Modal>

            <Box width={"90%"} flex={1} justifyContent={"center"} alignItems={"center"}>
                <Text
                    color="#FFFFFF"
                    fontWeight={"600"}
                    fontSize={"15px"}
                    textAlign={"center"}
                >
                    {text}
                </Text>
            </Box>

        </Pressable>

    );
};

export default RacesBox;
