import React from "react";
import { Box, Image } from "@chakra-ui/react";
import dribble from "../../assets/dribble.png";
import google from "../../assets/google.png";
import microsoft from "../../assets/microsoft.png";
import paypal from "../../assets/paypal.png";
import uber from "../../assets/uber.png";
import "./styles/scrollSlider.css";


const Supporters = () => {
  return (
    <Box width={["100%", "100%", "50%"]} mx="auto" overflowX="hidden" mb={4} position="relative" h="100px">
            <Box display="flex" alignItems="center" justifyContent="space-between" className="scroll-slider" h="100%" w="100%">
                <Image src={uber} alt="uber logo" w="18%" h={["20%", "20%", "30%"]}/>
                <Image src={google} alt="google logo" w="18%" h={["20%", "20%", "42%"]}/>
                <Image src={paypal} alt="paypal logo" w="18%" h={["20%", "20%", "42%"]}/>
                <Image src={microsoft} alt="microsoft logo" w="18%" h={["20%", "20%", "42%"]}/>
                <Image src={dribble} alt="dribble logo" w="18%" h={["20%", "20%", "30%"]}/>
            </Box>
    </Box>
  )
}

export default Supporters