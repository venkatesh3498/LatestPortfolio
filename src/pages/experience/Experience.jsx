import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "capitalize",
    fontSize: "13px",
    height: "40px",
    "&:hover": {
      backgroundColor: "#10203D",
      opacity: 1,
    },
    "&.Mui-selected": {
      backgroundColor: "#10203D",
      borderLeft: 1,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#10203D",
    },
  })
);
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
const companies = [
  {
    tabName: "SleekSky",
    id: 0,
    companyDetails: {
      jobRole: "Software Engineer",
      year: "May-2022 - Present",
      points: [
        "Developed and maintained code for in-house and client websites primarily using ReactJS, CSS, MUI, Styled-Components",
        "Site Performance Optimization,Code Refractoring,Bug Fixes",
        "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
      ],
    },
  },
  {
    tabName: "SleekSky",
    id: 1,
    companyDetails: {
      jobRole: "Software Engineer Intern",
      year: "February - April-2022",
      points: [
        "Developed and maintained code for in-house HeadLess CMS website primarily using ReactJS, CSS, MUI, Redux",
        "Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Website",
        "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
      ],
    },
  },
];
const Experience = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        variant="standard"
        aria-label="Vertical tabs example"
        sx={{ width: "131px", borderLeft: 2, borderColor: "primary.secondary" }}
        TabIndicatorProps={{
          sx: {
            left: 0,
          },
        }}
      >
        {companies.map((comp) => (
          <StyledTab {...a11yProps(comp.id)} label={comp.tabName} />
        ))}
      </Tabs>
      {companies.map((comp) => (
        <TabPanel value={value} index={comp.id}>
          {comp.companyDetails.jobRole}
        </TabPanel>
      ))}
    </Box>
  );
};

export default Experience;
