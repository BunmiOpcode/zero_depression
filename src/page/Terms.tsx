import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import Header from "../components/common/Header";
import headerBg from "../assets/blog/blogHeader.png";
import SpacedContainer from "../components/common/SpacedContainer";
import Supporters from "../components/HomeComponents/Supporters";
import ShareComponent from "../components/common/ShareComponent";

const Terms = () => {
  return (
    <Box>
      <Header
        headerBg={headerBg}
        headerTitle="Term of Use and Privacy Policies"
      />
      <Box bgColor="#F6F8FB" py={4}>
        <SpacedContainer>
          <Text color="#000000" fontWeight={500} fontSize="md" mb="40vh">
            Term of use
          </Text>
          <Text color="#000000" fontWeight={500} fontSize="md" mb="40vh">
            Privacy Policies
          </Text>
        </SpacedContainer>
      </Box>
      <SpacedContainer>
        <Box mt={10}>
          <Text
            color="pryClr"
            fontWeight={700}
            fontSize="lg"
            textAlign="center"
          >
            Our Amazing Supporters
          </Text>
          <Heading
            color="accent"
            fontWeight={400}
            fontSize="xl"
            textAlign="center"
            w={["100%", "100%", "40%"]}
            mx="auto"
          >
            The following brands has been putting smiles on the faces of users
            across the world
          </Heading>
        </Box>
      </SpacedContainer>
      <Supporters />
      <ShareComponent buttonIsVisible={true} iconsIsVisible={false} />
    </Box>
  );
};

export default Terms;
