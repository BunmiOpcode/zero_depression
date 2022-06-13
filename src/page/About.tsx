import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import AboutHeader from "../components/About/AboutHeader";
import TeamsCarousel from "../components/common/TeamsCarousel";
import Supporters from "../components/HomeComponents/Supporters";
import ShareComponent from "../components/common/ShareComponent";
import SpacedContainer from "../components/common/SpacedContainer";

const About = () => {
  return (
    <>
      <AboutHeader />
      <TeamsCarousel />
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
        <Supporters />
      </SpacedContainer>
      <ShareComponent />
    </>
  );
};

export default About;
