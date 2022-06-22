import React from "react";
import {
    Box, Image, Text, Heading, Link
} from "@chakra-ui/react";
import {Link as RouterLink } from "react-router-dom";

type Props = {
    img: string;
    job_title: string;
    bio: string;
    name: string;
    id: number;
}

const CounsellorCard = ({img, job_title, bio, name, id}: Props) => {
  return (
    <Box boxShadow="2px 2px 8px rgba(0, 0, 0, 0.2)" borderRadius="lg">
        <Image src={img} alt={`${name} photo`}  borderTopRadius="lg"/>
        <Box p={6} textAlign="center" border="1px" borderColor="gray.200" borderBottomRadius="lg">
            <Heading color="accent" fontSize="lg">{name}</Heading>
            <Text color="accent" fontSize="sm" opacity="0.8">{job_title}</Text>
            <Text color="accent" fontSize="sm" opacity="0.8">{bio}</Text>
            <Link as={RouterLink} to={`/counsellors/${id}`} fontSize="md" fontWeight={700} color="#1542DF">Read More</Link>

        </Box>
    </Box>
  )
}

export default CounsellorCard