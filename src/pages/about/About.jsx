import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Body from "./components/Body";
function About() {
  return (
    <Box>
      <Box
        sx={{ display: "flex" }}
        alignItems="center"
        mb={2}
        data-name="Header"
      >
        <Typography
          variant="h1"
          id="about"
          sx={{
            margin: "8px",
            textDecoration: "none",
            color: "text.primary",
            textTransform: "capitalize",
            transition: "all 0.5s ease",
            display: "flex",
            alignItems: "center",
            fontSize: "clamp(26px,5vw,32px)",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "clamp(16px,3vw,20px)",
            }}
            mr={1}
            color={"primary.main"}
          >
            01 .
          </Typography>
          About Me
        </Typography>
        <Divider
          sx={{
            height: "1px",
            width: "300px",
            borderColor: "unset",
            bgcolor: "primary.secondary",
          }}
        />
      </Box>
      <Box>
        <Body />
      </Box>
    </Box>
  );
}

export default About;
