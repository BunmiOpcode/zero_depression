import React from "react";
import { Box, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="pryClr"
        size="xl"
      />
    </Box>
  );
};

export default Loading;
