import { Box, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" flexDirection="column">
      <Heading color="accent" mb={2}>404 Not Found</Heading>
      <Box>
        <Button
          color="pryClr"
          fontSize="md"
          bgColor="transparent"
          border="1px"
          p={4}
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
