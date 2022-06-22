import React from "react";
import { Box, Image, Text, Heading, SimpleGrid } from "@chakra-ui/react";
import Header from "../components/common/Header";
import img from "../assets/counsellorImg.png";
import SpacedContainer from "../components/common/SpacedContainer";
import CounsellorCard from "../components/common/CounsellorCard";
import { getAllAvailableCounsellors } from "../data/counsellorData";
import Supporters from "../components/HomeComponents/Supporters";
import ShareComponent from "../components/common/ShareComponent";

const Counsellors = () => {
    const allCounsellors = getAllAvailableCounsellors();
  return (
    <>
    <Header headerBg={img} headerTitle="Meet Our Counsellors"/>
    <SpacedContainer>
        <SimpleGrid columns={[1, 1, 3]} gap={6} mt={10} mb={16}>
            {
                allCounsellors.map((counsellor) => (
                    <CounsellorCard 
                    img={counsellor.img} 
                    bio={counsellor.bio}
                    job_title={counsellor.job_title}
                    name={counsellor.name}
                    id={counsellor.id}
                    key={counsellor.id} 
                     />
                ))

            }
        </SimpleGrid>
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
    <ShareComponent buttonIsVisible={true} />
    </>
  )
}

export default Counsellors;