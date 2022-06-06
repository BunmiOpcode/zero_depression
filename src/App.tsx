import React, {Suspense, lazy} from "react"
import {
  ChakraProvider,
  Heading,
} from "@chakra-ui/react"
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Routes, Route } from "react-router-dom";
import "@fontsource/dm-sans";
import theme from "./components/common/extendTheme";
import Loading from "./components/common/Loading";
const Layout = lazy(() => import("./components/common/Layout"));
const Home = lazy(() => import("./page/Home"));
const About = lazy(() => import("./page/About"));
const Contact = lazy(() => import("./page/Contact"));
const NotFound = lazy(() => import("./components/NotFound"));

export const App = () => (
  <ChakraProvider theme={theme}>
    <Suspense  fallback={ <Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  </ChakraProvider>
)
