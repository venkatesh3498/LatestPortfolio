import { TouchApp } from "@mui/icons-material";
import { styled } from "@mui/material";

const StyledLink = styled(`a`)(({ theme }) => ({
  all: "unset",
  color: theme.palette.primary.main,
  cursor: "pointer",
  position: "relative",
  "&::after": {
    content: `""`,
    width: "100%",
    height: "1px",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "4px",
    position: "absolute",
    left: 0,
    bottom: 0,
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform .25s ease",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
  },
}));

const LinkText = ({ to, text }) => {
  return (
    <StyledLink target="_blank" href={to}>
      {text}
    </StyledLink>
  );
};

export default LinkText;
