import React from "react";
import { Box, Circle, Text } from "@chakra-ui/react";

// type Props = {}

const Logo = () => {
  return (
    <Box display="flex" alignItems="center">
        <Circle size="45px" bgColor="pryClr"></Circle>
        <Text color="white" fontWeight={400} zIndex="1" ml={-9}>Zero<span style={{marginLeft:"3px", color: "#02073E"}}>Depresssion</span></Text>
    </Box>
  )
}

export default Logo;