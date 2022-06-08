import { Box, Heading, Flex, Text, Image } from "@chakra-ui/react";
import HeaderImg from "../../assets/zeroPageHeader.png";
import SpacedContainer from "../common/SpacedContainer";
import TalkButton from "../common/TalkButton";

const Header = () => {
  return (
    <Box bgColor="#F6F8FB">
      <SpacedContainer>
        <Flex
          direction={["column", "column", "row"]}
          w="100%"
          py={[4, 4, 24]}
          justify="space-between"
          align="center"
          bgColor="#F6F8FB"
        >
          <Box mb={[4, 4, 0]} w={["100%", "100%", "40%"]}>
            <Heading color="pryClr" fontSize={["3xl", "3xl", "6xl"]}>
              Zero
              <span style={{ color: "#0F2137", display: "block" }}>
                Depression
              </span>
            </Heading>
            <Text
              color="#343D48"
              fontSize="md"
              fontWeight={400}
              lineHeight="32px"
              my={4}
            >
              Welcome to the safest anonymous place to restore your wellness and
              calm at no financial cost, We help guide your path away from
              depression and lead you to the path of happiness.
            </Text>
            <TalkButton
              path="/talk"
              color="white"
              bgColor="pryClr"
              size={["100%", "100%", "40%"]}
            />
          </Box>
          <Box h={["100%", "100%", "50%"]} w={["100%", "100%", "50%", "40%"]} mt={[2, 2, 10]}>
            <Image src={HeaderImg} alt="header image" fit="cover" />
          </Box>
        </Flex>
      </SpacedContainer>
    </Box>
  );
};

export default Header;
