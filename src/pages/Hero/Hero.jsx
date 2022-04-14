import { ArrowRightAlt } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Hero() {
  return (
    <section style={{ minHeight: "100vh" }}>
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: "15px",
            fontWeight: 400,
            margin: "0 0 20px 4px",
            lineHeight: 1.1,
            wordSpacing: "5px",
            textTransform: "capitalize",
          }}
          color="primary.main"
        >
          Hi, my name is
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 400,
            wordSpacing: "5px",
            textTransform: "capitalize",
          }}
          color="text.primary"
        >
          Venkateswararo Garlapati.
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 400,
            wordSpacing: "3px",
            marginTop: "10px",
            fontSize: "clamp(40px, 8vw, 80px)",
          }}
          color="text.secondary"
        >
          I build things for the web.
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h6"
          sx={{
            marginTop: "25px",
            maxWidth: "540px",
            // fontSize: "26px",
            wordSpacing: "3px",

            fontWeight: 400,
          }}
          color="text.secondary"
        >
          I’m a software engineer Intern specializing in building exceptional
          <br />
          digital experiences. Currently, I’m focused on building accessible,
          <br />
          human-centered products at SleekSky.
        </Typography>
      </Box>
      <Button
        color="primary"
        sx={{
          mt: 3,
          padding: "15px 10px 10px 10px !important",
          "&:hover": {
            "& svg": {
              transform: "rotate(90deg)",
              transition: "all 0.5s ease",
            },
          },
        }}
        variant="outlined"
      >
        Checkout More About Me{" "}
        <ArrowRightAlt
          sx={{ marginTop: "-3px", transition: "all 0.5s ease", ml: 0.5 }}
        />
      </Button>
    </section>
  );
}

export default Hero;
