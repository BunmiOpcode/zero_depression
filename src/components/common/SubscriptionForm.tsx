import React, { useState } from "react";
import { Flex, Input, Box, Button, Text } from "@chakra-ui/react";
import SpacedContainer from "./SpacedContainer";

type Form = {
  name: string;
  email: string;
};

const SubscriptionForm = () => {
  const [formState, setFormState] = useState<Form>({
    name: "",
    email: "",
  });
  return (
    <Flex
      direction={["column", "column", "row"]}
      align="center"
      justify="space-between"
      width={["90%", "90%", "60%"]}
      mx="auto"
      my={4}
    >
      <Text color="#000000" fontSize="md" fontWeight="500" mb={[4, 4, 0]}>
        Subscribe to our mailing list for updates.
      </Text>
      <form style={{ width: "100%" }}>
        <Flex
          direction={["column", "column", "row"]}
          align="center"
          justify="space-between"
        >
          <Input
            type="text"
            value={formState.name}
            placeholder="Your Name"
            border="2px"
            borderColor="pryClr"
            color="#02073E"
            fontSize="md"
            bgColor="#F8FAFC"
            rounded="xl"
            fontWeight="400"
            w={["100%", "100%", "38%"]}
            mb={[4, 4, 0]}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
          />
          <Box w={["100%", "100%", "60%"]} position="relative">
            <Input
              type="email"
              value={formState.email}
              placeholder="Your Email"
              border="2px"
              borderColor="pryClr"
              color="#02073E"
              fontSize="md"
              fontWeight="400"
              bgColor="#F8FAFC"
              rounded="xl"
              _focus={{
                bgColor: "transparent",
                border: "2px",
                borderColor: "#FFA500",
              }}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
            />
            <Button
            position="absolute"
            right="0"

              sx={{
                bgColor: "#FFA500",
                color: "white",
                fontSize: "md",
                fontWeight: "700",
                rounded: "xl",
              }}
              _focus={{
                bgColor: "#FFA500",
                color: "white",
                border: "2px",
                borderColor: "#FFA500",
              }}
              _active={{
                bgColor: "#FFA500",
                color: "white",
                border: "2px",
                borderColor: "#FFA500",
              }}
              _hover={{
                bgColor: "#FFA500",
                color: "white",
                border: "2px",
                borderColor: "#FFA500",
              }}
              onClick={(e) => {
                e.preventDefault();
                console.log("form Submitted", formState);
                setFormState({ name: "", email: "" });
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Flex>
      </form>
    </Flex>
  );
};

export default SubscriptionForm;
