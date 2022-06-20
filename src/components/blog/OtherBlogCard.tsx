import React from "react";
import { Box, HStack, Image, Text, Heading} from "@chakra-ui/react";


type Props = {
    date: string,
    content: string,
    title: string,
    author: string,
    img: string,
}

const OtherBlogCard = ({date, content, title, author, img}: Props) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" flexDirection={["column", "column", "row"]}>
        <Box color="accent" w={["100%", "100%", "58%"]}>
            <Heading as="h2" fontSize="lg">{title}</Heading>
            <Text my={2} fontSize="sm">{content}</Text>
            <HStack justifyContent="space-between">
                <Text fontWeight={700} fontSize="md">{author}</Text>
                <Text fontWeight={700} fontSize="md">{date.slice(0, 9)}</Text>
            </HStack>
        </Box>
        <Box w={["100%", "100%", "25%"]} h="100%" borderRadius="10px" border="1px">
            <Image src={img} alt="blog image"  fit="cover"/>
        </Box>
    </Box>
  )
}

export default OtherBlogCard