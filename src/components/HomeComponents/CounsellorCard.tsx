import React from "react";
import { Box, Text, Heading, Image } from "@chakra-ui/react";

type Props = {
    img: string,
    name: string,
    story: string,
}

const CounsellorCard = ({img, name, story}: Props) => {
  return (
    <Box w={["100%", "100%", "50%"]} boxShadow="2px 2px rgba(0, 0, 0, 0.3)">
        <Box w="100%" h="50%">
            <Image src={img} fit="cover" />
        </Box>
        <Box w="80%" mx="auto">
            <Heading as="h3" color="accent" fontSize="lg">{name}</Heading>
            <Text fontSize="sm" color="#343D48" opacity="0.8">{story}</Text>
        </Box>
    </Box>
  )
}

export default CounsellorCard;