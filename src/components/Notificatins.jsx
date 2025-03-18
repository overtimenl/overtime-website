import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Typography } from "@mui/material";
import { MarkEmailRead, Downloading } from "@mui/icons-material";
import Boxmessage from "./Boxmessage";
import Boxdownload from "./Boxdownload";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Notfications(props) {
  const { primery, secudary } = props;
  const [value, setValue] = React.useState("1");
  const [messages, setMessages] = React.useState([]);
  const [downloads, setDownloads] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    let tot = 0;
    let ativos = [];
    fetch("https://api-json-red.vercel.app/downloads")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setDownloads(responseJson);
      });
    fetch("https://api-json-red.vercel.app/message")
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson)
        setMessages(responseJson);
      });
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: `${secudary}`,
              color: `${secudary}`,
            },
          }}
        >
          <Tab
            icon={<MarkEmailRead sx={{ color: `${secudary}`, fontSize: 15 }} />}
            {...a11yProps(0)}
          />
          <Tab
            icon={<Downloading sx={{ color: `${secudary}`, fontSize: 15 }} />}
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box>
          {messages.length == 0 ? (
            <Typography
              sx={{
                fontSize: "15px",
                textAlign: "center",
                fontFamily: "Afacad Flux, serif",
                "@media (max-width: 800px)": { fontSize: "10px" },
              }}
            >
              Nenhuma mensagem
            </Typography>
          ) : (
            <Box>
              {messages.map((msg, index) => {
                return (
                  <Box key={index} sx={{ mb: 0.5 }}>
                    <Boxmessage
                      message={msg}
                      primery={primery}
                      secudary={secudary}
                      setMessages={setMessages}
                      //setOpenModel={setOpenModel}
                    />
                  </Box>
                );
              })}
            </Box>
          )}
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box>
          {downloads.length == 0 ? (
            <Typography
              sx={{
                fontSize: "15px",
                textAlign: "center",
                fontFamily: "Afacad Flux, serif",
                "@media (max-width: 800px)": { fontSize: "10px" },
              }}
            >
              Nenhuma download registado
            </Typography>
          ) : (
            <Box>
              {downloads.map((down, index) => {
                return (
                  <Box key={index} sx={{ mb: 0.5 }}>
                    <Boxdownload
                      download={down}
                      primery={primery}
                      secudary={secudary}
                      setDownloads={setDownloads}
                      //setOpenModel={setOpenModel}
                    />
                  </Box>
                );
              })}
            </Box>
          )}
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
