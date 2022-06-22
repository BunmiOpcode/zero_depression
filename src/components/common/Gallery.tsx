import React from "react";
import { SimpleGrid, Box, Text, Heading } from "@chakra-ui/react";
import Header from "./Header";
import bgImg from "../../assets/blog/blogHeader.png";
import SpacedContainer from "./SpacedContainer";
import Supporters from "../HomeComponents/Supporters";
import ShareComponent from "./ShareComponent";

const Gallery = () => {
  return (
    <>
    <Header headerBg={bgImg} headerTitle="Our Gallery"/>
    <SpacedContainer>
         <Box mt={52}>
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
    <ShareComponent buttonIsVisible={true} />

    
    </>
  )
}

export default Gallery