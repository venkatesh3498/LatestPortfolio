import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import LeftStyledStick from "../components/LeftStyledStick";
import Experience from "../pages/experience/Experience";
import Hero from "../pages/Hero/Hero";
import RightStyledStick from "./../components/RightStyledStick";
import About from './../pages/about/About';
import FeauturedProjects from './../pages/projects/FeauturedProjects';
const LeftStyledWrapper = styled(Box)(({ theme }) => ({
  display: theme.breakpoints.xs ? "none" : "block",
  position: "fixed",
  bottom: "0px",
  width: "150px",
}));
const RightStyledWrapper = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: "0px",
  right: "0px",
  width: "150px",
  color: theme.palette.primary.main,
}));
const PageCeneterWrapper = styled(Box)(({ theme }) => ({
  padding: "30px 150px 0px 150px",
  flexGrow: 1,
}));

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
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
      </PageCeneterWrapper>
      <RightStyledWrapper>
        <RightStyledStick />
      </RightStyledWrapper>
    </Box>
  );
}

export default Home;
