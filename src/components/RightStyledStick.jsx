import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const RightStyledStick = () => {
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
      <Typography
        component='a'
        href="mailto:venkatesh.g3498@gmail.com"
        sx={{
          all:"unset",
          color:"text.secondary",
          writingMode: "vertical-rl",
          mb:"20px",
          transition: "all 0.7s ease",
          cursor:"pointer",
          "&:hover": {
            color: "primary.main",
            transform: "translateY(-10px)",
            transition: "all 0.7s ease",
          },
        }}
      >
        venkatesh.g3498@gmail.com
      </Typography>
      <Divider orientation="vertical" color="primary.main" />
    </Box>
  );
};

export default RightStyledStick;
