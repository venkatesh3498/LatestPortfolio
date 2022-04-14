import { GitHub, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
import { Box, Divider, Icon } from "@mui/material";
import React from "react";

function LeftStyledStick() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        margin: "auto",
        width: "42px",
        borderRadius: 1,
        bgcolor: "background.deafualt",
        color: "text.secondary",
        alignItems: "center",
        "& hr": {
          bgcolor: "text.secondary",
          width: "2px",
          height: "80px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Icon
          sx={{
            width: "30px",
            height: "30px",
            mb: "20px",
            cursor: "pointer",
            transition: "all 0.7s ease",
            "&:hover": {
              color: "primary.main",
              transform: "translateY(-10px)",
              transition: "all 0.7s ease",
            },
          }}
        >
          <LinkedIn
            sx={{
              width: "30px",
              height: "30px",
            }}
          />
        </Icon>
        <Icon
          sx={{
            width: "30px",
            height: "30px",
            mb: "20px",
            cursor: "pointer",
            transition: "all 0.7s ease",
            "&:hover": {
              color: "primary.main",
              transform: "translateY(-10px)",
              transition: "all 0.7s ease",
            },
          }}
        >
          <GitHub
            sx={{
              width: "30px",
              height: "30px",
            }}
          />
        </Icon>
        <Icon
          sx={{
            width: "30px",
            height: "30px",
            mb: "20px",
            cursor: "pointer",
            transition: "all 0.7s ease",
            "&:hover": {
              color: "primary.main",
              transform: "translateY(-10px)",
              transition: "all 0.7s ease",
            },
          }}
        >
          <WhatsApp
            sx={{
              width: "30px",
              height: "30px",
            }}
          />
        </Icon>
        <Icon
          sx={{
            width: "30px",
            height: "30px",
            mb: "20px",
            cursor: "pointer",
            transition: "all 0.7s ease",
            "&:hover": {
              color: "primary.main",
              transform: "translateY(-10px)",
              transition: "all 0.7s ease",
            },
          }}
        >
          <Instagram
            sx={{
              width: "30px",
              height: "30px",
            }}
          />
        </Icon>
      </Box>
      <Divider orientation="vertical" color="primary.main" />
    </Box>
  );
}

export default LeftStyledStick;
