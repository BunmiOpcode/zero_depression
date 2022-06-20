import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react"; 
import BlogHeader from "../components/blog/BlogHeader";
import ShareComponent from "../components/common/ShareComponent";
import Supporters from "../components/HomeComponents/Supporters";
import SpacedContainer from "../components/common/SpacedContainer";

const Blog = () => {
  return (
    <Box bgColor="#F6F8FB">
      <BlogHeader />
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
      <ShareComponent iconsIsVisible={false} buttonIsVisible={true} />
    </Box>
  )
}

export default Blog