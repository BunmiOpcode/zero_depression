import React from "react";
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import frame1 from "../../assets/Frame1.png";
import frame2 from "../../assets/Frame2.png";
import frame3 from "../../assets/Frame3.png";
import frame4 from "../../assets/Frame4.png";
import SpacedContainer from "../common/SpacedContainer";

const BenefitsMessage = [
  {
    id: 0,
    img: frame1,
    title: "Guidance",
    desc: "At Zero depression we guide you towards the direction of attaining a healthy mental life.",
  },
  {
    id: 1,
    img: frame2,
    title: "Councelling",
    desc: "Our counsellors are on ground to listen to everything you have to say with an open minds while you remain anonymous.",
  },
  {
    id: 2,
    img: frame3,
    title: "Follow Up",
    desc: "Our counsellors will follow you through your mental health journey ensuring you become the best version of yourself.",
  },
  {
    id: 3,
    img: frame4,
    title: "Assistance",
    desc: "We are here to assist you in difficult times and help you make the best decision. Initiate a chat with us.",
  },
];

const Benefits = () => {
  return (
    <SpacedContainer>
      <Box textAlign="center" py={10}>
        <Text color="pryClr" fontSize={["lg", "lg", "xl"]}>
          Bringing Smile to your face
        </Text>
        <Heading as="h4" color="accent" fontSize={["2xl", "2xl", "4xl"]} my={2}>
          What we have in-stock for you
        </Heading>
        <Flex align="center" justify="space-between" mt={8} direction={["column", "column", "row"]}>
          {BenefitsMessage.map((b) => (
            <Box
              key={b.id}
              w={["100%", "100%", "25%"]}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Box w="80px" h="fit-content">
                <Image src={b.img} alt={`${b.title} image`} fit="cover" />
              </Box>
              <Heading
                as="h4"
                fontSize={["lg", "lg", "xl"]}
                fontWeight={700}
                color="#0F2137"
                my={4}
              >
                {b.title}
              </Heading>
              <Text
                color="#343D48"
                fontWeight="400"
                fontSize={["sm", "sm", "md"]}
                w={["100%", "100%", "85%"]}
              >
                {b.desc}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </SpacedContainer>
  );
};

export default Benefits;
