import {
  Box,
  Button,
  Flex,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <Box position="sticky" py={2}>
      <Flex justify="space-between" align="center" w="100%">
        <Logo />
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
            About
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
            Contact
          </NavLink>
        </Flex>
        <Box display={["none", "none", "flex"]}>
          <Button
            color="pryClr"
            border="2px"
            borderColor="pryClr"
            fontWeight={400}
            fontSize="sm"
            bgColor= "transparent" 
            py={2}
            px={4}
            w="100%"
            _focus={{ bgColor: "transparent" }}
            _hover={{ bgColor: "transparent" }}
            onClick={() => navigate("/talk")}
          >
            Talk with a Councillor
          </Button>
        </Box>
        <Box onClick={onOpen} display={["block", "block", "none"]}>
          <GiHamburgerMenu color="#0F2137" />
        </Box>
      </Flex>
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
                };
              }}
            >
              About
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
                };
              }}
            >
              Contact
            </NavLink>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Nav;
