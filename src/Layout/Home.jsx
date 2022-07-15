import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import LeftStyledStick from "../components/LeftStyledStick";
import Contact from "../pages/contact/Contact";
import Experience from "../pages/experience/Experience";
import Hero from "../pages/Hero/Hero";
import Projects from "../pages/projects/Projects";
import RightStyledStick from "./../components/RightStyledStick";
import About from "./../pages/about/About";
import FeauturedProjects from "./../pages/projects/FeauturedProjects";
const LeftStyledWrapper = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: "0px",
  width: "150px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
    width: "0px",
  },
}));
const RightStyledWrapper = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: "0px",
  right: "0px",
  width: "150px",
  color: theme.palette.primary.main,
  [theme.breakpoints.down("sm")]: {
    display: "none",
    width: "0px",
  },
}));
const PageCeneterWrapper = styled(Box)(({ theme }) => ({
  padding: "30px 150px 0px 150px",
  width: "100%",
  // overflow: "hidden",
  flexGrow: 1,
  [theme.breakpoints.down("sm")]: {
    padding: "30px 10px 0px 10px",
  },
}));

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
      }}
    >
      <LeftStyledWrapper>
        <LeftStyledStick />
      </LeftStyledWrapper>
      <PageCeneterWrapper>
        <Hero />
        <About />
        <Experience />
        <FeauturedProjects />
        <Projects />
        <Contact />
      </PageCeneterWrapper>
      <RightStyledWrapper>
        <RightStyledStick />
      </RightStyledWrapper>
    </Box>
  );
}

export default Home;
