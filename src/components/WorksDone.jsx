import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DesktopAPPS from "./DesktopAPPS";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function WorksDone(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const { primery, secudary } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          //indicatorColor="secondary"
          textColor="inherit"
          //variant="fullWidth"
          aria-label="full width tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: `#ED1C07`,
              color: `#171010`,
            },
          }}
          centered
        >
          <Tab
            label={
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "1rem",
                  //fontFamily: "Arvo, serif",
                  color: `${primery}`,
                  "@media (max-width: 400px)": { fontSize: ".5rem" },
                }}
              >
                APP DESKTOP
              </Typography>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "1rem",
                  //fontFamily: "Arvo, serif",
                  color: `${primery}`,
                  "@media (max-width: 400px)": { fontSize: ".5rem" },
                }}
              >
                APP Web e Mobile
              </Typography>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "1rem",
                  //fontFamily: "Arvo, serif",
                  color: `${primery}`,
                  "@media (max-width: 400px)": { fontSize: ".5rem" },
                }}
              >
                Marketing Digital
              </Typography>
            }
            {...a11yProps(2)}
          />
          <Tab
            label={
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "1rem",
                  //fontFamily: "Arvo, serif",
                  color: `${primery}`,
                  "@media (max-width: 400px)": { fontSize: ".5rem" },
                }}
              >
                Produção Multimidia
              </Typography>
            }
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <DesktopAPPS primery={primery} secudary={secudary} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Aplicações Web e Mobile
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Marketing Digital
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Produção Multmidia
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
