import React from "react";
import { Box, Text, Heading, Image } from "@chakra-ui/react";

type Props = {
  img: string;
  name: string;
  bio: string;
};

const CounsellorCard = ({ img, name, bio }: Props) => {
  return (
    <Box w={["95%", "95%", "88%"]} boxShadow="4px 4px 4px rgba(0, 0, 0, 0.2)" rounded="lg">
      <Image src={img} fit="contain" borderTopRadius="lg" w="100%" h="30%" />
      <Box w="90%" mx="auto" my={4}>
        <Heading as="h3" color="accent" fontSize="lg" mb={2}>
          {name}
        </Heading>
        <Text fontSize="sm" color="#343D48" opacity="0.8">
          {bio}
        </Text>
      </Box>
    </Box>
  );
};

export default CounsellorCard;
