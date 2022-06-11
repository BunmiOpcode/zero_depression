import React from "react";
import { Flex, HStack, Text, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import SpacedContainer from "./SpacedContainer";
import "./styles/share.css"

const ShareComponent = () => {
  return (
    <SpacedContainer>
      <Flex
        bgColor="pryClr"
        rounded="xl"
        direction={["column", "column", "row"]}
        align="center"
        justify="space-around"
        height="200px"
        className="share-container"
        py={4}
        my={8}
      >
        <Text
          w={["100%, 100%", "42%"]}
          color="white"
          fontSize={["xl", "xl", "2xl"]}
          fontWeight={700}
        >
          Share ZeroDepression With Your Friends And Family
        </Text>
        <HStack 
        className="share-logos" 
        position="relative"
         w={["100%, 100%", "15%"]}
        >
          <IconButton
            aria-label="twitter-share-button"
            bgColor="transparent"
            fontSize="40px"
            _hover={{
              bgColor: "transparent",
            }}
            _active={{
              bgColor: "transparent",
            }}
            _focus={{
              bgColor: "transparent",
            }}
            icon={<FaTwitter color="#55ACEE" />}
          />
          <IconButton
            aria-label="facebook-share-button"
            bgColor="transparent"
            fontSize="40px"
            _hover={{
              bgColor: "transparent",
            }}
            _active={{
              bgColor: "transparent",
            }}
            _focus={{
              bgColor: "transparent",
            }}
            icon={<FaFacebookMessenger color="#1542DF" />}
          />
          <IconButton
            aria-label="twitter-share-button"
            bgColor="transparent"
            fontSize="40px"
            _hover={{
              bgColor: "transparent",
            }}
            _active={{
              bgColor: "transparent",
            }}
            _focus={{
              bgColor: "transparent",
            }}
            icon={<FaWhatsapp color="#00E676" />}
          />
        </HStack>
      </Flex>
    </SpacedContainer>
  );
};

export default ShareComponent;
