import React from "react";
import {
    Box, Heading, Text
} from "@chakra-ui/react";

type Props = {
    headerBg: string,
    headerTitle: string,
}

const Header = ({headerBg, headerTitle}: Props) => {
  return (
    
    <Box 
    display="flex" 
    alignItems="center" 
    justifyContent="center" 
    bgImage={headerBg}
    bgRepeat="no-repeat"
    bgSize="cover"
    bgPosition="center"
    w="100%"
    height="300px"
    >
        <Box>
            <Heading color="pryClr" fontWeight={700} fontSize="5xl">
                Zero
                <span style={{ color: "#02073E", fontWeight: 400}}>Depression</span>
            </Heading>
            <Text fontSize="2xl" color="#fff" fontWeight={700} textAlign="center">{headerTitle}</Text>
        </Box>

    </Box>
  )
}

export default Header