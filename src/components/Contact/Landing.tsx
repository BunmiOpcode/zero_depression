import React, { useState, useRef } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Textarea,
  Heading,
  FormControl,
  FormLabel,
  useToast,
  Image,
} from "@chakra-ui/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import contactBg from "../../assets/contact/contactBg.png";
import SpacedContainer from "../common/SpacedContainer";
import { getAllTeamMemebers, IMembers } from "../../data/teamsData";
import TeamCard from "./TeamCard";
import "./styles/team.css";
import Supporters from "../HomeComponents/Supporters";

type Form = {
  name: string;
  email: string;
  contribution: string;
};

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  // adaptiveHeight: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
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

const Landing = () => {
  const [formState, setFormState] = useState<Form>({
    name: "",
    email: "",
    contribution: "",
  });
  const toast = useToast();
  const members = getAllTeamMemebers();
  // const slider = useRef<any>();
  const navigate = useNavigate();

  // const next = () => {
  //   slider.current.slickNext();
  // };
  // const previous = () => {
  //   slider.current.slickPrev();
  // };

  return (
    <>
    <Box bgColor="#F6F8FB" pb={4}>
      <SpacedContainer>
        <Heading
          color="pryClr"
          textAlign="center"
          fontSize={["4xl", "4xl", "5xl"]}
          fontWeight={700}
          py={["4", "4", "10"]}
        >
          Zero
          <span style={{ color: "#0F2137", fontWeight: 500 }}>Depression</span>
        </Heading>
        <Box mt={[8, 8, 16]}>
          <Text color="pryClr" fontWeight={500} fontSize="lg">
            you can be our
            <span style={{ color: "red" }}> Super Hero</span>
          </Text>
          <Heading
            as="h3"
            color="#0F2137"
            fontWeight={700}
            fontSize="xl"
            mt={3}
          >
            Drop your contributions/offers below
          </Heading>
          <Flex align="flex-start">
            <Box width={["100%", "100%", "50%"]}>
              <form style={{ width: "100%", marginTop: "30px" }}>
                <FormControl my={3}>
                  <FormLabel
                    htmlFor="name"
                    color="accent"
                    fontWeight={400}
                    fontSize="lg"
                  >
                    Your Name
                  </FormLabel>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    bgColor="rgba(255, 165, 0, 0.5)"
                    boxShadow="inset 4px 4px 12px 4px rgba(0, 0, 0, 0.25);"
                    rounded="lg"
                    borderWidth="5px"
                    borderColor="#fff"
                    fontSize="lg"
                    color="white"
                    p={5}
                    placeholder="Type here"
                    _placeholder={{
                      color: "white",
                    }}
                    value={formState.name}
                    _focus={{
                      border: "5px solid white",
                    }}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl my={3}>
                  <FormLabel
                    htmlFor="email"
                    color="accent"
                    fontWeight={400}
                    fontSize="lg"
                  >
                    Your Email
                  </FormLabel>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    bgColor="rgba(255, 165, 0, 0.5)"
                    boxShadow="inset 4px 4px 12px 4px rgba(0, 0, 0, 0.25);"
                    rounded="lg"
                    borderWidth="5px"
                    borderColor="#fff"
                    fontSize="lg"
                    color="white"
                    p={5}
                    placeholder="Type here"
                    _placeholder={{
                      color: "white",
                    }}
                    value={formState.email}
                    _focus={{
                      border: "5px solid white",
                    }}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl my={3}>
                  <FormLabel
                    htmlFor="contribution"
                    color="accent"
                    fontWeight={400}
                    fontSize="lg"
                  >
                    Your Contribution
                  </FormLabel>
                  <Textarea
                    name="contribution"
                    id="contribution"
                    bgColor="rgba(255, 165, 0, 0.5)"
                    boxShadow="inset 4px 4px 12px 4px rgba(0, 0, 0, 0.25);"
                    rounded="lg"
                    borderWidth="5px"
                    borderColor="#fff"
                    fontSize="lg"
                    color="white"
                    p={5}
                    size="xl"
                    placeholder="Type here"
                    _placeholder={{
                      color: "white",
                    }}
                    value={formState.contribution}
                    _focus={{
                      border: "5px solid white",
                    }}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        contribution: e.target.value,
                      })
                    }
                  ></Textarea>
                </FormControl>
                <Button
                  bgColor="pryClr"
                  color="white"
                  fontWeight={500}
                  mt={4}
                  _hover={{
                    bgColor: "#FFA500",
                    color: "white",
                  }}
                  _active={{
                    bgColor: "#FFA500",
                    color: "white",
                  }}
                  _focus={{
                    bgColor: "#FFA500",
                    color: "white",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    if (
                      formState.name &&
                      formState.email &&
                      formState.contribution
                    ) {
                      toast({
                        description: "contribution sent successfully",
                        status: "success",
                        duration: 800,
                        isClosable: true,
                      });
                      console.log(formState);
                      setFormState({ name: "", email: "", contribution: "" });
                    } else {
                      toast({
                        title: "Form Error",
                        description: "A form Field is missing input",
                        status: "error",
                        duration: 800,
                        isClosable: true,
                      });
                    }
                  }}
                >
                  Send us a message
                </Button>
              </form>
            </Box>
            <Box
              display={["none", "none", "block"]}
              width="50%"
              height="50%"
              mt={-52}
            >
              <Image src={contactBg} alt="header image" fit="contain" />
            </Box>
          </Flex>
        </Box>
        <Box mt={[8, 8, 16]}>
          <Text
            color="pryClr"
            fontWeight={700}
            fontSize={["md", "md", "lg"]}
            textAlign="center"
          >
            Meet Our joy facilitators
          </Text>
          <Text
            color="accent"
            fontWeight={700}
            fontSize={["xl", "xl", "2xl"]}
            textAlign="center"
          >
            Meet Our Team Members
          </Text>
          <Box mt={4}>
            <Slider
            //  ref={(c) => (slider.current = c)}
              {...settings}>
              {members.map((member: IMembers) => (
                <TeamCard
                  key={member.id}
                  img={member.img}
                  pos={member.pos}
                  name={member.name}
                  fLink={member.fLink}
                  tLink={member.tLink}
                  inLink={member.inLink}
                />
              ))}
            </Slider>
          </Box>
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
            onClick={() => navigate("/gallery")}
          >
            View Gallery
          </Button>
        </Box>
      </SpacedContainer>
    </Box>
    <SpacedContainer>
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
        <Supporters />
    </SpacedContainer>
    </>
  );
};

export default Landing;
