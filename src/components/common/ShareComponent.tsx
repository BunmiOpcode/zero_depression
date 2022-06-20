import { Flex, HStack, Text, Link, Box } from "@chakra-ui/react";
import { FaTwitter, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import SpacedContainer from "./SpacedContainer";
import "./styles/share.css";
import TalkButton from "./TalkButton";

type Props = {
  buttonIsVisible?: boolean;
  iconsIsVisible?: boolean;
};

const ShareComponent = ({ buttonIsVisible, iconsIsVisible }: Props) => {
  return (
    <SpacedContainer>
      <Flex
        bgColor="pryClr"
        rounded="xl"
        direction={["column", "column", "row"]}
        align="center"
        justify="space-around"
        height="200px"
        className="share-container"
        py={4}
        px={[2, 2, 0]}
        my={8}
      >
        <Text
          w={["100%, 100%", "42%"]}
          color="white"
          fontSize={["xl", "xl", "2xl"]}
          fontWeight={700}
          textAlign={["center", "center", "left"]}
        >
          {buttonIsVisible
            ? "Connect with the most compassionate councillors for free"
            : " Share ZeroDepression With Your Friends And Family"}
        </Text>
        {iconsIsVisible && (
          <HStack
            className="share-logos"
            position="relative"
            w={["100%, 100%", "15%"]}
          >
            <Link
            href="https://twitter.com"
              textDecoration="none"
              fontSize="30px"
              _hover={{
                textDecoration: "none"
              }}
              _active={{
                textDecoration: "none",
              }}
              _focus={{
                textDecoration: "none",
              }}
            >
              <FaTwitter color="#55ACEE" />
            </Link>
            <Link
               href="https://facebook.com"
              textDecoration="none"
              _hover={{
                textDecoration: "none"
              }}
              fontSize="30px"
              _active={{
                textDecoration: "none",
              }}
              _focus={{
                textDecoration: "none",
              }}
            >
              <FaFacebookMessenger color="#1542DF" />
            </Link>
            <Link
               href="https://whatsapp.com"
              textDecoration="none"
              _hover={{
                textDecoration: "none"
              }}
              fontSize="30px"
              _active={{
                textDecoration: "none",
              }}
              _focus={{
                textDecoration: "none",
              }}
             
            >
              <FaWhatsapp color="#00E676" />
            </Link>
          </HStack>
        )}

        {buttonIsVisible && (
          <TalkButton
            path="/talk"
            bgColor="white"
            size={["60%", "60%", "20%"]}
          />
        )}
      </Flex>
    </SpacedContainer>
  );
};

ShareComponent.defaultProp = {
  buttonIsVisible: false,
  iconsIsVisible: true,
};

export default ShareComponent;
