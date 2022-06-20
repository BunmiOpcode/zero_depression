import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  IconButton,
  HStack,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Link,
  Textarea,
} from "@chakra-ui/react";
import { BiLike, BiComment } from "react-icons/bi";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import SpacedContainer from "../components/common/SpacedContainer";
import header from "../assets/blog/blogHeader.png";
import OtherBlogCard from "../components/blog/OtherBlogCard";
import ShareComponent from "../components/common/ShareComponent";

type FormValue = {
  comment: string;
  like: number;
};

const BlogDetails = () => {
  const { id } = useParams();
  //   const date = new Date();
  //   console.log(date.toTimeString())
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formVal, setFormVal] = useState<FormValue>({ comment: "", like: 0 });
  //   adds to likes tally
  const handleLikeTally = () => {};

  // adds to comments tally
  //  const handleComment = (e) => {

  //  }
  return (
    <>
      <Box bgColor="#F6F8FB" py={4} mb={4}>
        <SpacedContainer>
          <Image src={header} alt="blog header image" />
          <Box my={4}>
            <Heading as="h3" color="accent" fontSize="lg">
              heading for blog {id}
            </Heading>
            <Text color="accent" fontWeight={400} fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magni
              perspiciatis illum quia est sunt possimus odit esse voluptatum
              molestiae.
            </Text>
          </Box>
          <Flex>
            <HStack>
              <IconButton
                bgColor="transparent"
                fontSize="20px"
                _hover={{
                  bgColor: "transparent",
                  color: "accent",
                }}
                _focus={{
                  bgColor: "transparent",
                  color: "accent",
                }}
                _active={{
                  bgColor: "transparent",
                  color: "accent",
                }}
                aria-label="like icon"
                icon={<BiLike color="#000" />}
              />
              <Text color="#000" fontSize="md" fontWeight={500} ml={1}>
                0 likes
              </Text>
            </HStack>
            <HStack ml={4}>
              <IconButton
                bgColor="transparent"
                fontSize="20px"
                _hover={{
                  bgColor: "transparent",
                  color: "accent",
                }}
                _focus={{
                  bgColor: "transparent",
                  color: "accent",
                }}
                _active={{
                  bgColor: "transparent",
                  color: "accent",
                }}
                aria-label="like icon"
                icon={<BiComment color="#000" />}
                onClick={onOpen}
              />
              <Text color="#000" fontSize="md" fontWeight={500} ml={1}>
                0 Comments
              </Text>
            </HStack>
          </Flex>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <form style={{ marginTop: "20px" }}>
                  <FormControl>
                    <FormLabel htmlFor="comment">Add Comment</FormLabel>
                    <Textarea
                      id="comment"
                      value={formVal.comment}
                      onChange={(e) =>
                        setFormVal({ ...formVal, comment: e.target.value })
                      }
                      placeholder="Add Comment"
                      size="md"
                    />
                  </FormControl>
                </form>
              </ModalBody>
            </ModalContent>
          </Modal>
          <Box mt={4}>
            <Text color="#000000" fontSize="lg" mb={2}>
              Share:
            </Text>
            <HStack>
              <Link
                href="https://facebook.com"
                sx={{
                  display: "block",
                  textDecoration: "none",
                }}
                _hover={{
                  textDecoration: "none",
                }}
              >
                <FaFacebookSquare color="#395185" size="30px" />
              </Link>
              <Link
                href="https://linkedin.com"
                sx={{
                  display: "block",
                  textDecoration: "none",
                  margnLeft: "10px",
                }}
                _hover={{
                  textDecoration: "none",
                }}
              >
                <FaLinkedin color="#0A66C2" size="30px" />
              </Link>
              <Link
                href="https://twitter.com"
                sx={{
                  display: "block",
                  textDecoration: "none",
                  margnLeft: "10px",
                }}
                _hover={{
                  textDecoration: "none",
                }}
              >
                <FaTwitterSquare color="#55ACEE" size="30px" />
              </Link>
              <Link
                href="https://whatsapp.com"
                sx={{
                  display: "block",
                  textDecoration: "none",
                  margnLeft: "10px",
                }}
                _hover={{
                  textDecoration: "none",
                }}
              >
                <FaWhatsappSquare color="#00E676" size="30px" />
              </Link>
            </HStack>
          </Box>
          <Box mt={4}>
            <Text color="pryClr" fontSize={["lg", "xl"]} fontWeight={500}>
              Other Related Posts
            </Text>
            <Flex direction="column" mt={4}>
              {/* <Box>
                    <Heading as="h3" fontSize="md">First Blog</Heading>
                    <Text>Content</Text>
                </Box>
                <Box>
                    <Heading as="h3" fontSize="md">Second Blog</Heading>
                    <Text>Content</Text>
                </Box>
                <Box>
                    <Heading as="h3" fontSize="md">Third Blog</Heading>
                    <Text>Content</Text>
                </Box> */}
              <OtherBlogCard
                author="Admin"
                date={new Date().toLocaleString()}
                title="Other Blog"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magni
            perspiciatis illum quia est sunt possimus odit esse voluptatum
            molestiae."
                img=""
              />
            </Flex>
          </Box>
        </SpacedContainer>
      </Box>
      <ShareComponent  buttonIsVisible={true} iconsIsVisible={false} />
    </>
  );
};

export default BlogDetails;
