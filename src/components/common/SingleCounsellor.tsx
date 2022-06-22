import React from "react";
import { Box, Image, Text, Heading, IconButton } from "@chakra-ui/react";
import img from "../../assets/counsellorImg.png";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import { getsingleCounsellor } from "../../data/counsellorData";
import SpacedContainer from "./SpacedContainer";
import ShareComponent from "./ShareComponent";
import Supporters from "../HomeComponents/Supporters";
import { BiArrowBack } from "react-icons/bi";

const SingleCounsellor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const singleCounsellor = getsingleCounsellor(Number(id));
  return (
    <Box>
      <Header headerBg={img} headerTitle="Meet Our Counsellors" />
      <SpacedContainer>
        <IconButton
          aria-label="back button"
          bgColor="transparent"
          color="pryClr"
          fontSize="30px"
          mb={8}
          _hover={{
            bgColor: "transparent",
            color: "pryClr",
          }}
          _focus={{
            bgColor: "transparent",
            color: "pryClr",
          }}
          _active={{
            bgColor: "transparent",
            color: "pryClr",
          }}
          icon={<BiArrowBack />}
          onClick={() => navigate(-1)}
        />
        <Image src={singleCounsellor.img} />
        <Heading color="accent" fontSize={["xl", "xl", "2xl"]} my={4}>
          {singleCounsellor.name}
        </Heading>
        <Text color="accent" fontSize={["md", "md", "lg"]}>
          {singleCounsellor.job_title}
        </Text>
        <Text color="#343D48" fontSize={["md", "md", "lg"]}>
          {singleCounsellor.bio}
        </Text>
        <Box mt={10}>
          <Text
            color="pryClr"
            fontWeight={700}
            fontSize="lg"
            textAlign="center"
          >
            Our Amazing Supporters
          </Text>
          <Heading
            color="accent"
            fontWeight={400}
            fontSize="xl"
            textAlign="center"
            w={["100%", "100%", "40%"]}
            mx="auto"
          >
            The following brands has been putting smiles on the faces of users
            across the world
          </Heading>
        </Box>
      </SpacedContainer>
      <Supporters />
      <ShareComponent buttonIsVisible={true}/>
    </Box>
  );
};

export default SingleCounsellor;
