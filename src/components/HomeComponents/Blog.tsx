import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import blogImg from "../../assets/blogImg.png";

const Blog = () => {
    const navigate = useNavigate();
  return (
    <Box
      w="80%"
      py={10}
      borderRightRadius={["90px", "90px", "112px"]}
      borderBottomRightRadius={["90px", "90px", "112px"]}
      bgColor="#FFA50070"
      my={8}
    >
      <Flex direction={["column", "column", "row"]} ml={["auto", "auto", "3%", "8%"]} align="center" justify="space-between">
        <Box w={["80%", "80%", "40%"]} h="100%" order={[1, 1, 0]}>
          <Image src={blogImg} fit="contain" />
        </Box>
        <Box textAlign="left" w={["75%", "75%", "50%"]} mt={[4, 4, 0]}>
          <Text color="pryClr" fontWeight="700" fontSize={["sm", "sm", "md"]}>
            Looking for inspiring posts
          </Text>
          <Heading
            color="accent"
            fontWeight={700}
            fontSize={["md", "md", "lg"]}
            my={2}
          >
            Our Blog and Stories
          </Heading>
          <Text color="#02073E" fontWeight={500} fontSize={["sm", "sm", "md"]} w={["100%", "100%", "85%"]}>
            Want to know more about depression and how to best fight it?
            <br />  
            Want to see how others fought and won against depression? 
            <br />
            Want to bounce back to cheerfulness and live a mentally healthy life? 
            <br />
            Want to hear inspiring stories and lift up your mood?
          </Text>

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
            mt={8}
            onClick={() => navigate("/blog")}
          >
            Go to our blog
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Blog;
