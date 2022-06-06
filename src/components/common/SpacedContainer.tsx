import React, { ReactNode } from "react";
import {Box} from "@chakra-ui/react";

type Props = {
    children: ReactNode;
}

const SpacedContainer = (props: Props) => {
  return (
   <Box mx={["20px", "20px", "3%", "8%"]}>
       {props.children}
   </Box>
  )
}

export default SpacedContainer;