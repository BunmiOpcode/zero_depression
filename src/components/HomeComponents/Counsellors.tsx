import React, { useRef } from "react";
import { Box, Button, Text, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { getAllCounsellors, ICounsellor } from "../../data/counsellorData";
import CounsellorCard from "./CounsellorCard";
import SpacedContainer from "../common/SpacedContainer";
import "./styles/carousel.css";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  initialSlide: 0,
  autoplay: true,
  // adaptiveHeight: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Counsellors = () => {
  const allCounsellors = getAllCounsellors();
  const slider = useRef<any>();
  const navigate = useNavigate();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  return (
    <Box mt={10} bgColor="#F8FAFC" pt={12} pb={4}>
      <SpacedContainer>
        <Text color="pryClr" fontSize="lg" textAlign="center">
          Our Joy Givers
        </Text>
        <Heading color="accent" fontSize="2xl" textAlign="center" mb={8}>
          Meet Our Amazing Counsellors
        </Heading>
        <Box overflowX="hidden" w={["100%", "100%", "85%"]} mx="auto">
          <Slider ref={(c) => (slider.current = c)} {...settings}>
            {allCounsellors.map((c: ICounsellor) => (
              <CounsellorCard
                img={c.img}
                name={c.name}
                bio={c.bio}
                key={c.name}
              />
            ))}
          </Slider>
          {/* <Box w={["50%", "50%", "10%"]} mx="auto" display="flex" alignItems="center" justifyContent="space-between">
            <IconButton
              aria-label="arrow left"
              sx={{
                bgColor: "pryClr",
                color: "white",
              }}
              rounded="full"
              icon={<FaArrowLeft />}
              onClick={previous}
            />
            <IconButton
              aria-label="arrow left"
              sx={{
                bgColor: "pryClr",
                color: "white",
                ml: "4",
              }}
              rounded="full"
              icon={<FaArrowRight />}
              onClick={next}
            />
          </Box> */}
        </Box>
        <Box w={["50%", "50%", "20%"]} mt={10} mx="auto">
          <Button
            color="#000000"
            fontSize="lg"
            fontWeight="700"
            border="none"
            bgColor="transparent"
            width="100%"
            rightIcon={<FaArrowRight color="#FFA500" />}
            _focus={{
              bgColor: "transparent",
              color: "black",
            }}
            _active={{
              bgColor: "transparent",
              color: "black",
            }}
            _hover={{
              bgColor: "transparent",
              color: "black",
            }}
            onClick={() => navigate("/counsellors")}
          >
            View All Counsellor
          </Button>
        </Box>
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
    </Box>
  );
};

export default Counsellors;
