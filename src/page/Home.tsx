import React from "react";
import Header from "../components/HomeComponents/Header";
import Benefits from "../components/HomeComponents/Benefits";
import Support from "../components/HomeComponents/Support";
import Blog from "../components/HomeComponents/Blog";
import Testimonials from "../components/HomeComponents/Testimonials";
import Counsellors from "../components/HomeComponents/Counsellors";
import Supporters from "../components/HomeComponents/Supporters";
import SubscriptionForm from "../components/common/SubscriptionForm";
import ShareComponent from "../components/common/ShareComponent";

const Home = () => (
  <>
    <Header />
    <Benefits />
    <Blog />
    <Support />
    <Testimonials />
    <Counsellors />
    <Supporters />
    <SubscriptionForm />
    <ShareComponent />
  </>
);

export default Home;
