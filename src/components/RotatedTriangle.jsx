import { styled, Typography } from "@mui/material";
import React from "react";
const StyledTraingle = styled(Typography)(({ theme }) => ({
  position: "relative",
  marginLeft: "20px",
  color:theme.palette.text.secondary,
  "&:before": {
    content: `"▹"`,
    position: "absolute",
    left: "-20px",
    color: theme.palette.primary.main,
  },
}));
const RotatedTriangle = ({ text, typoProps }) => {
  return <StyledTraingle {...typoProps}>{text}</StyledTraingle>;
};

export default RotatedTriangle;
