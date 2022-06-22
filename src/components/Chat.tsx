import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Heading, Text, Image, Flex, Button } from "@chakra-ui/react";
import SpacedContainer from "./common/SpacedContainer";
import chatSmiley from "../assets/chatSmiley.png";
import "./HomeComponents/styles/chat.css";


const Chat = () => {
    const navigate = useNavigate();

  return (
    <Box bgColor="rgba(246, 248, 251, 0.5)" py={8}>
      <SpacedContainer>
        <Heading
          color="pryClr"
          fontWeight="700"
          fontSize={["2xl", "2xl", "5xl"]}
          textAlign="center"
          mb={8}
        >
          Zero
          <span style={{ color: "#0F2137", fontWeight: 500 }}>Depression</span>
        </Heading>
        <Box mb={8}>
          <Flex w={["100%", "100%", "50%"]} alignItems="flex-start">
            <Image
              src={chatSmiley}
              alt="smiley image"
              w={["10%", "10%", "8%"]}
              h={["10%", "10%", "8%"]}
              mr={6}
            />
            <Box mt={6}>
              <Text
                color="white"
                bgColor="pryClr"
                fontWeight={700}
                fontSize="lg"
                py={2}
                px={8}
                rounded="full"
                className="angle"
                position="relative"
              >
                Hello
              </Text>
              <Text
                color="white"
                bgColor="pryClr"
                fontWeight={700}
                fontSize="lg"
                py={2}
                px={8}
                rounded="full"
                className="angle"
                position="relative"
                mt={4}
              >
                You Are Welcome
              </Text>
            </Box>
          </Flex>
        </Box>
        <Text
          color="pryClr"
          fontSize={["md", "md", "lg"]}
          py={4}
          px={8}
          bgColor="white"
          width={["100%", "100%", "35%"]}
          boxShadow="4px 4px 10px rgba(0, 0, 0, 0.4)"
          fontWeight={700}
          mb={8}
        >
          “Depression is not a good way of living life, Say No to excess
          thinking that may lead you to suicide“
        </Text>
        <Box mb={8}>
          <Flex w={["100%", "100%", "50%"]} alignItems="flex-start">
            <Image
              src={chatSmiley}
              alt="smiley image"
              w={["10%", "10%", "8%"]}
              h={["10%", "10%", "8%"]}
              mr={6}
            />
            <Box mt={6}>
              <Text
                color="white"
                bgColor="pryClr"
                fontWeight={700}
                fontSize="lg"
                py={2}
                px={8}
                rounded="full"
                className="angle"
                position="relative"
                mt={4}
              >
                What is bodering you today ?
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box
          fontSize={["md", "md", "lg"]}
          width={["100%", "100%", "35%"]}
          boxShadow="4px 4px 10px rgba(0, 0, 0, 0.4)"
          fontWeight={700}
          textAlign="center"
          mb={8}
        >
          <Text color="pryClr" px={8} py={2}>
            Talk to us anonimously now
          </Text>
          <Text bgColor="pryClr" color="white" px={8} py={2} fontWeight={500}>
            Please note that we dont have acess to your identity, so feel free
          </Text>
        </Box>
        <Box w={["100%", "100%", "35%"]} my={8}>
            <Button
            bgColor="pryClr"
            color="white"
            fontWeight={700}
            fontSize={["md", "md", "lg"]}
            w="100%"
            px={4}
            h="120px"
            boxShadow="4px 4px 10px rgba(0, 0, 0, 0.4)"
            _hover={{
                bgColor:"pryClr",
                color:"white",
            }}
            _focus={{
                bgColor:"pryClr",
                color:"white",
            }}
            _active={{
                bgColor:"pryClr",
                color:"white",
            }}
            onClick={() => navigate("/chat-with-counsellor")}
            >
                Click Here To Chat With A Councillor
            </Button>
            <Text color="pryClr" fontSize="2xl" fontWeight={700} textAlign="center" my={6}>Or</Text>
            <Button
            bgColor="white"
            color="pryClr"
            fontWeight={700}
            fontSize={["md", "md", "lg"]}
            w="100%"
            px={4}
            h="120px"
            boxShadow="4px 4px 10px rgba(0, 0, 0, 0.4)"
            _hover={{
                bgColor: "white",
                color: "pryClr",
            }}
            _active={{
                bgColor: "white",
                color: "pryClr",
            }}
            _focus={{
                bgColor: "white",
                color: "pryClr",
            }}
            onClick={() => navigate("/call-a-counsellor")}
            >
                Click Here To Call A Councillor
            </Button>
        </Box>

        <Text color="pryClr" fontSize="xl" my={4}> <span style={{ fontWeight: 700 }}>Note: </span>All calls are free of charge</Text>
      </SpacedContainer>
    </Box>
  );
};

export default Chat;
