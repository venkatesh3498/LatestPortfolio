import { ArrowRightAlt } from "@mui/icons-material";
import { Button, Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

function Hero() {
  const [reveal, setReveal] = useState(true);

  return (
    <section style={{ minHeight: "100vh" }}>
      <Box>
        <Slide
          in={reveal}
          direction="up"
          {...(reveal ? { timeout: 1400 } : {})}
        >
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
        </Slide>
      </Box>
      <Box>
        <Slide
          in={reveal}
          direction="up"
          {...(reveal ? { timeout: 1600 } : {})}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: {
                xs: '40px',
                sm: '40px',
                md: '60px',
                lg: '60px'
              },
              fontWeight: 400,
              wordSpacing: "5px",
              textTransform: "capitalize",
            }}
            color="text.primary"
          >
            Venkateswararo Garlapati.
          </Typography>
        </Slide>
      </Box>
      <Box>
        <Slide
          in={reveal}
          direction="up"
          {...(reveal ? { timeout: 1800 } : {})}
        >
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
        </Slide>
      </Box>
      <Box>
        <Slide
          in={reveal}
          direction="up"
          {...(reveal ? { timeout: 2000 } : {})}
        >
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
        </Slide>
      </Box>
      <Slide in={reveal} direction="up" {...(reveal ? { timeout: 2200 } : {})}>
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
      </Slide>
    </section>
  );
}

export default Hero;
