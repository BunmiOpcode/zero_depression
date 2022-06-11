import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Heading,
  Tabs,
  TabPanel,
  TabPanels,
  Tab,
  TabList,
  Flex,
  Avatar,
  VStack,
} from "@chakra-ui/react";
import SpacedContainer from "../common/SpacedContainer";
import avatarMan from "../../assets/avatar man.svg";
import avatarFe from "../../assets/avatar fe.svg";

const testimonials = [
  {
    name: "Ahmed Bello",
    job: "Student",
    pics: avatarMan,
    story:
      "I'm glad that I was able to bare out my mind without feeling like a bad person",
  },
  {
    name: "Yetunde Ajayi",
    job: "Civil servant",
    pics: avatarFe,
    story:
      "I came to the platform with a heavy heart, but the councellors are caring and loving, i dismissed my suicide though at once, Thank you ZeroDepression Team",
  },
  {
    name: "Okeke Amara",
    job: "House Wife",
    pics: avatarFe,
    story:
      "Giving birth to new child was sort of overwhelming for me but talking to a counsellor here gave me a bit of relief.",
  },
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setIndex(index + 1)
        }, 500)
    }, [index]);

  return (
    <SpacedContainer>
      <Box textAlign="center" py={10} w={["100%", "100%", "70%"]} mx="auto">
        <Text color="pryClr" fontSize={["lg", "lg", "xl"]}>
          Happy Users
        </Text>
        <Heading as="h4" color="accent" fontSize={["2xl", "2xl", "4xl"]} my={2}>
          What our users say about the platform
        </Heading>
        <Tabs variant="unstyled" defaultIndex={index}>
          <TabPanels>
            {testimonials.map((testimonial) => (
              <TabPanel key={testimonial.name}>
                <Text
                  color="accent"
                  fontFamily="Playfair Display"
                  fontSize={["xl", "xl", "2xl"]}
                  mb={4}
                  lineHeight="45px"
                >
                  {testimonial.story}
                </Text>
              </TabPanel>
            ))}
          </TabPanels>

          <TabList
            w="100%"
            justifyContent="space-around"
            alignItems="center"
            my={6}
          >
            {testimonials.map((test) => (
              <Tab
                _selected={{
                  borderTop: "2px",
                  borderColor: "#FFA500",
                  outline: "none",
                }}
                _focus={{ outline: "none" }}
                px={[1, 1, 4]}
              >
                <Flex align="center" justify="space-between" direction={["column", "column", "row"]}>
                  <Avatar src={test.pics} size={["md", "md", "lg"]} name={test.name} mr={[2, 2, 4]} />
                  <VStack>
                    <Text fontSize="md" fontWeight="600" color="accent" my={0}>
                      {test.name}
                    </Text>
                    <Text fontSize="md" fontWeight="400" color="accent">
                      {test.job}
                    </Text>
                  </VStack>
                </Flex>
              </Tab>
            ))}
          </TabList>
        </Tabs>
      </Box>
    </SpacedContainer>
  );
};

export default Testimonials;
