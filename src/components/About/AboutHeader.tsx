import React from "react";
import { Box, Image, Text, Heading, SimpleGrid } from "@chakra-ui/react";
import SpacedContainer from "../common/SpacedContainer";
import "./styles/aboutHeader.css";

const AboutHeader = () => {
  return (
    <Box
    height={["fit-content", "fit-content", "1080px"]}
    >
      <SpacedContainer>
        <Heading
          color="pryClr"
          textAlign="center"
          fontSize={["4xl", "4xl", "5xl"]}
          fontWeight={700}
          py={["4", "4", "10"]}
        >
          Zero
          <span style={{ color: "#0F2137", fontWeight: 500 }}>Depression</span>
        </Heading>
        <SimpleGrid
          columns={[1, 2]}
        >
          <Box>
            <Text color="accent" fontWeight={700} fontSize={["lg", "lg", "xl"]}>
              Our Mission
            </Text>
            <Text
              color="#02073E"
              fontWeight={400}
              fontSize={["sm", "sm", "lg"]}
              opacity="0.6"
            >
              Our mission is to reduce the rate of depression by providing free
              counselling in a safe anonymous space.
            </Text>
          </Box>
          <div className="left-img"></div>
          <div className="right-img"></div>
          <Box>
            <Text color="accent" fontWeight={700} fontSize={["lg", "lg", "xl"]}>
              Our Vision
            </Text>
            <Text
              color="#02073E"
              fontWeight={400}
              fontSize={["sm", "sm", "lg"]}
              opacity="0.6"
            >
              Our vision is to zero down depression across the globe in the long
              run.
            </Text>
          </Box>
        </SimpleGrid>
        <Text mt={4} color="#000000" transform={["transformY(0)", "transformY(0)", "translateY(-230px)"]}>
        Zero depression is an online platform which provides a neutral environment to help people 
        passing through mental health challenges speak out without fear. The Zero depression 
        project was created out of a desire to find a solution to the rising spate of depression 
        among young person, the project's idea is to connect users to counsellor who will provide 
        counselling and guidance for free. The issue of depression is becoming a menace and if not 
        quickly resolved might spiral to become an epidemic, this project is totally run by volunteers 
        who are passionate about realising a society with zero rate of depression cases. We are 
        contributing our quota to ensure that great mental health is recognized as important and 
        that the quality of human life is preserved.

        </Text>
      </SpacedContainer>
    </Box>
  );
};

export default AboutHeader;
