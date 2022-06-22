import React from "react";
import {
  Box,
  Flex,
  Text,
  HStack,
  Tooltip,
  IconButton,
  Link as ChakraLink,
} from "@chakra-ui/react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link as Router } from "react-router-dom";
import SpacedContainer from "./SpacedContainer";

const socials = [
  {
    id: 0,
    name: "Facebook",
    link: "https://facebook.com",
    icon: FaFacebookSquare,
  },
  {
    id: 1,
    name: "Twitter",
    link: "https://twitter.com",
    icon: FaTwitterSquare,
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://linkedin.com",
    icon: FaLinkedin,
  },
  {
    id: 4,
    name: "Instagram",
    link: "https://instagram.com",
    icon: FaInstagram,
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <SpacedContainer>
      <Flex
        mt={4}
        py={4}
        direction={["column", "column", "column", "row"]}
        align="center"
        justify="space-between"
      >
        <Box display="flex" alignItems="center" flexDirection={["column", "column", "row"]}>
          <Text color="pryClr" fontSize="md" fontWeight="400">
            Zero
            <span style={{ color: "#0F2137" }}>Depression</span>
          </Text>
          <Text
            color="accent"
            fontSize="md"
            fontWeight="400"
            opacity="0.6"
            ml={3}
          >
            Copyright by {year} ZeroDepression
          </Text>
        </Box>
        <HStack>
          {socials.map((s) => (
            <Tooltip key={s.id} label={`${s.name} icon`}>
              <IconButton
                aria-label={`${s.name} logo`}
                bgColor="transparent"
                fontSize="30px"
                _hover={{
                  bgColor: "transparent",
                }}
                _active={{
                  bgColor: "transparent",
                }}
                _focus={{
                  bgColor: "transparent",
                }}
                icon={<s.icon color="rgba(2, 7, 62, 0.74)" />}
              />
            </Tooltip>
          ))}
        </HStack>
        <HStack flexDirection={["column", "column", "row"]}>
          <ChakraLink
            as={Router}
            color="accent"
            fontSize={["md", "md", "sm", "md"]}
            to="/home"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Text>Home</Text>
          </ChakraLink>
          <ChakraLink
            as={Router}
            color="accent"
            fontSize={["md", "md", "sm", "md"]}
            to="/about"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Text>About Us</Text>
          </ChakraLink>
          <ChakraLink
            as={Router}
            color="accent"
            fontSize={["md", "md", "sm", "md"]}
            to="/contact"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Text>Contact Us</Text>
          </ChakraLink>
          <ChakraLink
            as={Router}
            color="accent"
            fontSize={["md", "md", "sm", "md"]}
            to="terms-and-policies"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Text>Terms of use</Text>
          </ChakraLink>
          <ChakraLink
            as={Router}
            color="accent"
            fontSize={["md", "md", "sm", "md"]}
            to="terms-and-policies"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Text>Privacy Policies</Text>
          </ChakraLink>
        </HStack>
      </Flex>
    </SpacedContainer>
  );
};

export default Footer;
