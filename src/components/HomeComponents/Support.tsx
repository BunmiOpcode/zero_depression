import React from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  Flex,
  Button,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { MdCheckCircle } from "react-icons/md";
import fone from "../../assets/fone.png";

const Support = () => {
  const navigate = useNavigate();
  return (
    <Box
      position="relative"
      left="20%"
      w="80%"
      pt={10}
      borderLeftRadius={["90px", "90px", "112px"]}
      borderBottomLeftRadius={["90px", "90px", "112px"]}
      bgColor="#FFA50070"
      my={24}
    >
      <Flex
        direction={["column", "column", "row"]}
        mr={["auto", "auto", "3%", "8%"]}
        align="center"
        justify="space-between"
      >
        <Box
          textAlign="left"
          w={["85%", "85%", "50%"]}
          ml={["1%", "1%", "3%", "8%"]}
        >
          <Text color="pryClr" fontWeight="700" fontSize={["sm", "sm", "md"]}>
            We Need Your Support
          </Text>
          <Heading
            color="accent"
            fontWeight={700}
            fontSize={["md", "md", "lg"]}
            my={2}
          >
            Support Us
          </Heading>
          <Text
            color="#02073E"
            opacity="0.6"
            fontWeight={500}
            fontSize={["sm", "sm", "md"]}
            w={["100%", "100%", "85%"]}
          >
            Do you love what Zero depression stands for and want to be a
            contributor to the global force that is working earnestly to zero
            down the rate of depression? Then join us today, we are delighted to
            have you come onboard.
          </Text>
          <Heading
            color="accent"
            fontWeight={700}
            fontSize={["md", "md", "lg"]}
            my={2}
          >
            Support By
          </Heading>
          <List mt={3} spacing={3} fontWeight="700" fontSize={["sm", "sm", "md"]}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="#0BDD2D" />
              Becoming a counsellor
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="#0BDD2D" />
              Volunteering as a team member
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="#0BDD2D" />
              Sponsorship/Funding/Partnership
            </ListItem>
          </List>

          <Button
            rightIcon={<AiOutlineRight color="#FFA500" />}
            color="pryClr"
            bgColor="transparent"
            fontWeight={700}
            fontSize="md"
            border="none"
            _hover={{
              bgColor: "transparent",
              color: "#FFA500",
              border: "none",
            }}
            _focus={{
              bgColor: "transparent",
              color: "#FFA500",
              border: "none",
            }}
            _active={{
              bgColor: "transparent",
              color: "#FFA500",
              border: "none",
            }}
            px={0}
            mt={4}
            onClick={() => navigate("/contact")}
          >
            Send Us A Message
          </Button>
        </Box>
        <Box w={["70%", "70%", "30%"]} h={["50%", "50%", "90%"]} mt={10}>
          <Image src={fone} fit="cover" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Support;
