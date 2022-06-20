import React from "react";
import ShareComponent from "../components/common/ShareComponent";
import Landing from "../components/Contact/Landing"
const Contact = () => {
  return (
    <>
    <Landing />
    <ShareComponent iconsIsVisible={false} buttonIsVisible={true} />
    </>
  )
}

export default Contact;