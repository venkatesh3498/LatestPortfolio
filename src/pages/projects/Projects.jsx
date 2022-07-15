import React from "react";
import { styled } from "@mui/material";
import { FolderOpen, RocketLaunch } from "@mui/icons-material";
import data from "./pdata.json";
const StyledProjectSection = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  h2: { fontSize: "clamp(24px, 5vw, 32px)" },
  ".archive-link": {
    fontFamily: "var(--font-mono)",
    fontSize: "var(--fz-sm)",
    "&:after": { bottom: "0.1em" },
  },
  ".projects-grid": {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gridGap: "15px",
    position: "relative",
    marginTop: "50px",
    listStyle: "none",
    "@media (max-width: 1080px)": {
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    },
  },
}));
const StyledProject = styled("li")(({ theme }) => ({
  position: "relative",
  cursor: "default",
  transition: "all 0.4s ease",
  "&:hover": {
    ".project-inner": { transform: "translateY(-7px)" },
    ".project-title,.project-links": {
      "& a": {
        display: "inline-block",
        textDecoration: "none",
        textDecorationSkipInk: "auto",
        position: "relative",
        transition: "all 0.4s ease",
        color: `${theme.palette.primary.main} !important`,
      },
    },
  },
  "& a": { position: "relative", zIndex: 1 },
  "& .project-inner": {
    display: "felx",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "relative",
    height: "100%",
    padding: "2rem 1.75rem",
    borderRadius: "4px",
    backgroundColor: "#112240;",
    transition: "all 0.4s ease",
  },
  "& .project-top": {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "35px",
    "& .folder": {
      color: "#64ffda",
      svg: { width: "40px", height: "40px" },
    },
    "& .project-links": {
      display: "flex",
      alignItems: "center",
      marginRight: "-10px",
      color: "#a8b2d1",

      "& a": {
        color: theme.palette.text.secondary,
        display: "flex",
        justifyContent: "center",
        padding: "5px 7px",
        "&.external": {
          svg: { width: "22px", height: "22px", marginTop: "-4px" },
        },
        svg: { width: "20px", height: "20px" },
      },
    },
  },
  "& .project-title": {
    margin: "0 0 10px",
    color: "#ccd6f6",
    fontSize: "22px",
    "& a": {
      all: "unset",
      position: "static",
      "&:before": {
        content: "''",
        display: "block",
        position: "absolute",
        zIndex: 0,
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
      },
    },
  },
  "& .project-description": {
    color: "#a8b2d1",
    fontSize: "17px",
  },
  "& .project-tech-list": {
    display: "flex",
    alignItems: "flex-end",
    flexGrow: 1,
    flexWrap: "wrap",
    padding: "0",
    margin: "20px 0 0 0",
    listStyle: "none",
    "& li": {
      fontSize: "12px",
      lineHeight: 1.75,
      "&:not(:last-of-type)": { marginRight: "15px" },
    },
  },
}));

const ProjectInner = ({ data }) => {
  const {external, tech, title, description} = data

  return (
    <div className="project-inner">
      <header>
        <div className="project-top">
          <div className="folder">
            <FolderOpen />
          </div>
          <div className="project-links">
            {external && (
              <a
                href={external}
                aria-label="External Link"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                <RocketLaunch />
              </a>
            )}
          </div>
        </div>

        <h3 className="project-title">
          <a href={external} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h3>

        <div className="project-description">
          <p>{description}</p>
        </div>
      </header>

      <footer>
        {tech && (
          <ul className="project-tech-list">
            {tech.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        )}
      </footer>
    </div>
  );
};
const Projects = () => {
  return (
    <StyledProjectSection>
      <h2>Other Noteworthy Projects</h2>
      <ul style={{
        paddingInlineStart:'0px'
      }} className="projects-grid">
        {data &&
          data.map((data, i) => (
            <StyledProject key={i}>
              <ProjectInner data={data} />
            </StyledProject>
          ))}
      </ul>
    </StyledProjectSection>
  );
};

export default Projects;
