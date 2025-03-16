import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import {
  WorkHistory,
  Web,
  Campaign,
  Home,
  Logout,
  QueryStats,
  AccountBalance,
  FacebookOutlined,
  Twitter,
  Instagram,
  LinkedIn,
  InsertInvitation,
  MarkEmailRead,
  Person,
} from "@mui/icons-material";
import Footer from "../components/Footer.jsx";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Homemidias from "../components/socialmidias/Home";
import Anuncios from "../components/socialmidias/Anuncios";
import Advertising from "../components/socialmidias/Advertising";
import Servicos from "../components/socialmidias/Servicos";
import MessageClients from "../components/socialmidias/MessageClients";
import Model from "../components/Model";
//import Singup from '../components/login/Singup';

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiTableCell-head": {
      color: "white",
      backgroundColor: "#00809b",
    },
  },
  container: {
    color: "#171010",
    height: "90%",
    width: "100%",
    paddingTop: useTheme().spacing(5),
    backgroundColor: "white",
    [useTheme().breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #efefe",
    },
  },
  icon: {
    margin: useTheme().spacing(1),
    [useTheme().breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: useTheme().spacing(2),
    [useTheme().breakpoints.up("sm")]: {
      marginBottom: useTheme().spacing(3),
      cursor: "pointer",
    },
  },
  text: {
    fontFamily: "Afacad Flux, serif",
    fontWeight: 600,
    [useTheme().breakpoints.down("sm")]: {
      display: "none",
    },
  },
  body: {
    height: "100vh",
  },
}));

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

// eslint-disable-next-line react/prop-types
function SocialManeger(props) {
  const { primery, secudary } = props;
  const classes = useStyles();

  const token = useParams();
  let navigate = useNavigate();
  const location = useLocation();
  const [currencies, setCurrencies] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // eslint-disable-next-line no-unused-vars
  //const id = useParams();
  //let navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [opcao, setOpcao] = useState("");
  const [openModel, setOpenModel] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [title, setTitle] = useState("");
  const [user, setUser] = useState({
    id: "",
    username: "",
    tipo: "",
    email: "",
    desabled: "",
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setOpcao("EDITAR");
    setTitle("EDITAR USUARIO");
    setOpenModel(true);
    setAnchorEl(null);
  };

  const handleLogout = () => {
    navigate("/");
  };

  useEffect(() => {
    console.log(token.socket);
    const config = {
      headers: { Authorization: `Bearer ${token.socket}` },
    };
    try {
      let data = location.state.user;
      setUser({
        id: data.id,
        username: data.username,
        tipo: data.tipo,
        email: data.email,
        desabled: data.desabled,
      });
    } catch (error) {
      navigate("/");
    }
    /*axios
      .get("http://localhost:8000/jwtauth/users/me", config)
      .then((res) => {
        setUser({
          id: res.data.id,
          username: res.data.username,
          tipo: res.data.tipo,
          email: res.data.email,
          desabled: res.data.desabled,
        });
        //console.log(res.data)
      })
      .catch((err) => {
        navigate("/");
        //console.log('Sair...')
      });*/
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AppBar elevation={1} position="sticky" sx={{ bgcolor: `${primery}` }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "Afacad Flux, serif",
              fontWeight: 600,
              fontSize: "1.5rem",
            }}
          >
            PAINEL MÍDIAS SOCIAS
          </Typography>
          <div>
            <Button
              sx={{
                width: "100%",
                height: "40px",
                border: "none",
                outline: "none",
                boxShadow: "0 0 10px rgba(0, 0, 0, .1)",
                fontSize: "16px",
                color: "#fff",
                fontWeight: "700",
              }}
            >
              <Typography
                onClick={() => handleLogout()}
                className={classes.text}
                sx={{
                  fontFamily: "Afacad Flux, serif",
                  fontWeight: 600,
                  fontSize: "12px",
                }}
              >
                {user.username}
              </Typography>
              <Logout
                sx={{ fontSize: "1.2rem", ml: 0.5, fontWeight: "bold" }}
                onClick={() => handleLogout()}
              />
            </Button>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.body}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          height="100vh"
        >
          <Box flex={2} className={classes.container}>
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              aria-label="Vertical tabs example"
              TabIndicatorProps={{
                style: {
                  backgroundColor: `${primery}`,
                  color: `${primery}`,
                },
              }}
            >
              <Tab
                icon={<Home className={classes.icon} />}
                iconPosition="start"
                label={
                  <Typography
                    className={classes.text}
                    sx={{
                      //fontFamily: "Arvo, serif",
                      fontFamily: "Afacad Flux, serif",
                      fontWeight: 600,
                      fontSize: "12px",
                    }}
                  >
                    INICIO
                  </Typography>
                }
                {...a11yProps(0)}
                className={classes.item}
              />
              <Tab
                icon={<Campaign className={classes.icon} />}
                iconPosition="start"
                label={
                  <Typography
                    className={classes.text}
                    sx={{
                      //fontFamily: "Arvo, serif",
                      fontFamily: "Afacad Flux, serif",
                      fontWeight: 600,
                      fontSize: "12px",
                    }}
                  >
                    ANÚNCIOS
                  </Typography>
                }
                {...a11yProps(1)}
                className={classes.item}
              />
              <Tab
                icon={<Web className={classes.icon} />}
                iconPosition="start"
                label={
                  <Typography
                    className={classes.text}
                    sx={{
                      //fontFamily: "Arvo, serif",
                      fontFamily: "Afacad Flux, serif",
                      fontWeight: 600,
                      fontSize: "12px",
                    }}
                  >
                    PUBLICIDADES
                  </Typography>
                }
                {...a11yProps(2)}
                className={classes.item}
              />
              <Tab
                icon={<WorkHistory className={classes.icon} />}
                iconPosition="start"
                label={
                  <Typography
                    className={classes.text}
                    sx={{
                      //fontFamily: "Arvo, serif",
                      fontFamily: "Afacad Flux, serif",
                      fontWeight: 600,
                      fontSize: "12px",
                    }}
                  >
                    Trabalhos feitos
                  </Typography>
                }
                {...a11yProps(3)}
                className={classes.item}
              />
              <Tab
                icon={<MarkEmailRead className={classes.icon} />}
                iconPosition="start"
                label={
                  <Typography
                    className={classes.text}
                    sx={{
                      //fontFamily: "Arvo, serif",
                      fontFamily: "Afacad Flux, serif",
                      fontWeight: 600,
                      fontSize: "12px",
                    }}
                  >
                    MENSAGEM DE CLIENTES
                  </Typography>
                }
                {...a11yProps(4)}
                className={classes.item}
              />
              <div className={classes.item}>
                <Logout
                  onClick={() => handleLogout()}
                  className={classes.icon}
                />
                <Typography
                  onClick={() => handleLogout()}
                  className={classes.text}
                  sx={{
                    //fontFamily: "Arvo, serif",
                    fontFamily: "Afacad Flux, serif",
                    fontWeight: 600,
                    fontSize: "12px",
                  }}
                >
                  SAIR
                </Typography>
              </div>
            </Tabs>
          </Box>
          <Box
            flex={12}
            p={1}
            component="main"
            sx={{ position: "relative", maxHeight: "100vh", overflowY: "auto" }}
          >
            <TabPanel value={value} index={0}>
              <Homemidias primery={primery} secudary={secudary} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Anuncios primery={primery} secudary={secudary} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Advertising primery={primery} secudary={secudary} />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Servicos primery={primery} secudary={secudary} />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <MessageClients primery={primery} secudary={secudary} />
            </TabPanel>
          </Box>
        </Stack>
      </div>
      <Box
        //id="sobre"
        sx={{
          bgcolor: `${primery}`,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          mt: 1,
        }}
      >
        <Box
          sx={{
            width: "90%",
          }}
        >
          <Footer primery={primery} secudary={secudary} />
        </Box>
      </Box>
      <Model title={title} openModel={openModel} setOpenModel={setOpenModel}>
        <h1>User Edit</h1>
      </Model>
    </>
  );
}

export default SocialManeger;
