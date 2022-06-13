import {
  Box,
  Link,
  Flex,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";
import TalkButton from "./TalkButton";
import SpacedContainer from "./SpacedContainer";

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box position="static" py={4} zIndex="2">
      <SpacedContainer>
        <Flex justify="space-between" align="center" w="100%">
          <Link textDecor="none" href="/" _hover={{ textDecoration: "none"}}>
            <Logo />
          </Link>
          <Flex
            display={["none", "none", "flex"]}
            align="center"
            justify="space-between"
            width="30%"
          >
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  display: "block",
                  fontSize: "sm",
                  color: isActive ? "#FFA500" : "#0F2137",
                  fontWeight: isActive ? 600 : 400,
                  paddingBottom: isActive ? "2px" : "none",
                  borderBottom: isActive ? "2px solid #FFA500" : "none",
                };
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => {
                return {
                  display: "block",
                  fontSize: "sm",
                  color: isActive ? "#FFA500" : "#0F2137",
                  fontWeight: isActive ? 600 : 400,
                  paddingBottom: isActive ? "2px" : "none",
                  borderBottom: isActive ? "2px solid #FFA500" : "none",
                };
              }}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => {
                return {
                  display: "block",
                  fontSize: "sm",
                  color: isActive ? "#FFA500" : "#0F2137",
                  fontWeight: isActive ? 600 : 400,
                  paddingBottom: isActive ? "2px" : "none",
                  borderBottom: isActive ? "2px solid #FFA500" : "none",
                };
              }}
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/blog"
              style={({ isActive }) => {
                return {
                  display: "block",
                  fontSize: "sm",
                  color: isActive ? "#FFA500" : "#0F2137",
                  fontWeight: isActive ? 600 : 400,
                  paddingBottom: isActive ? "2px" : "none",
                  borderBottom: isActive ? "2px solid #FFA500" : "none",
                };
              }}
            >
              Blog
            </NavLink>
          </Flex>
          <Box display={["none", "none", "flex"]}>
            <TalkButton path="/talk" />
          </Box>
          <Box onClick={onOpen} display={["block", "block", "none"]}>
            <GiHamburgerMenu color="#0F2137" size="30px" />
          </Box>
        </Flex>
      </SpacedContainer>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay onClick={onClose} />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody sx={{ marginTop: "10vh" }}>
            <NavLink
              to="/"
              onClick={onClose}
              style={({ isActive }) => {
                return {
                  display: "block",
                  fontSize: "sm",
                  color: isActive ? "#FFA500" : "#0F2137",
                  fontWeight: isActive ? 600 : 400,
                  paddingBottom: isActive ? "2px" : "none",
                  borderBottom: isActive ? "2px solid #FFA500" : "none",
                  textAlign: "center",
                  marginBottom: "10px",
                };
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={onClose}
              style={({ isActive }) => {
                return {
                  display: "block",
                  fontSize: "sm",
                  color: isActive ? "#FFA500" : "#0F2137",
                  fontWeight: isActive ? 600 : 400,
                  paddingBottom: isActive ? "2px" : "none",
                  borderBottom: isActive ? "2px solid #FFA500" : "none",
                  textAlign: "center",
                  marginBottom: "10px",
                };
              }}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              onClick={onClose}
              style={({ isActive }) => {
                return {
                  display: "block",
                  fontSize: "sm",
                  color: isActive ? "#FFA500" : "#0F2137",
                  fontWeight: isActive ? 600 : 400,
                  paddingBottom: isActive ? "2px" : "none",
                  borderBottom: isActive ? "2px solid #FFA500" : "none",
                  textAlign: "center",
                  marginBottom: "10px",
                };
              }}
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/blog"
              onClick={onClose}
              style={({ isActive }) => {
                return {
                  display: "block",
                  fontSize: "sm",
                  color: isActive ? "#FFA500" : "#0F2137",
                  fontWeight: isActive ? 600 : 400,
                  paddingBottom: isActive ? "2px" : "none",
                  borderBottom: isActive ? "2px solid #FFA500" : "none",
                  textAlign: "center",
                  marginBottom: "10px",
                };
              }}
            >
              Blog
            </NavLink>
            <Box mt={4}>
              <TalkButton path="/talk" />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Nav;
