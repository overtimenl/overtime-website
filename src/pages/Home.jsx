/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from "react";
import {
  AppBar,
  Divider,
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Link,
  Drawer,
  IconButton,
  Paper,
} from "@mui/material";
import Container from "@mui/material/Container";
import {
  Facebook,
  Twitter,
  Instagram,
  Menu,
  LinkedIn,
  LocalPhone,
  Widgets,
  WhatsApp,
  Telegram,
  Close,
  Person,
} from "@mui/icons-material";
import logo from "../assets/OverLogo.png";
import Publicidades from "../components/Publicidades.jsx";
import Services from "../components/Services.jsx";
import WorksDone from "../components/WorksDone.jsx";
import About from "../components/About.jsx";
import ClientsTestemunhos from "../components/ClientsTestemunhos.jsx";
import Emprove from "../components/Emprove.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import classes from "./Home.module.css";

function Home(props) {
  const { primery, secudary } = props;
  const [openMenu, setOpenMenu] = useState("none");
  const [openWork, setOpenWork] = useState("none");

  return (
    <>
      <Box
        elevation={0}
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "flex-end",
          bgcolor: `${primery}`,
          minHeight: 50,
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 1.5,
              mr: 1,
            }}
          >
            <IconButton
              //size="small"
              href="https://www.facebook.com/profile.php?id=61558712668202"
              target="_blank"
              sx={{
                bgcolor: `${secudary}`,
                color: "white",
                "&:hover": {
                  bgcolor: "white",
                  cursor: "pointer",
                  color: `${primery}`,
                  transition: "all 400ms",
                },
              }}
            >
              <Facebook sx={{ fontSize: 15 }} />
            </IconButton>
            <IconButton
              //size="small"
              href="https://www.instagram.com/overtime_nl/"
              target="_blank"
              sx={{
                bgcolor: `${secudary}`,
                color: "white",
                ml: 0.5,
                "&:hover": {
                  bgcolor: "white",
                  cursor: "pointer",
                  color: `${primery}`,
                  transition: "all 400ms",
                },
              }}
            >
              <Instagram sx={{ fontSize: 15 }} />
            </IconButton>
            <IconButton
              //size="small"
              sx={{
                bgcolor: `${secudary}`,
                color: "white",
                ml: 0.5,
                "&:hover": {
                  bgcolor: "white",
                  cursor: "pointer",
                  color: `${primery}`,
                  transition: "all 400ms",
                },
              }}
            >
              <LinkedIn sx={{ fontSize: 15 }} />
            </IconButton>
            <IconButton
              //size="small"
              sx={{
                bgcolor: `${secudary}`,
                color: "white",
                ml: 0.5,
                "&:hover": {
                  bgcolor: "white",
                  cursor: "pointer",
                  color: `${primery}`,
                  transition: "all 400ms",
                },
              }}
            >
              <Twitter sx={{ fontSize: 15 }} />
            </IconButton>
            <IconButton
              //size="small"
              href="https://api.whatsapp.com/message/REGZSZIRC3CGI1?autoload=1&app_absent=0"
              target="_blank"
              sx={{
                bgcolor: `${secudary}`,
                color: "white",
                ml: 0.5,
                "&:hover": {
                  bgcolor: "white",
                  cursor: "pointer",
                  color: `${primery}`,
                  transition: "all 400ms",
                },
              }}
            >
              <WhatsApp sx={{ fontSize: 15 }} />
            </IconButton>
            <IconButton
              //size="small"
              sx={{
                bgcolor: `${secudary}`,
                color: "white",
                ml: 0.5,
                "&:hover": {
                  bgcolor: "white",
                  cursor: "pointer",
                  color: `${primery}`,
                  transition: "all 400ms",
                },
              }}
            >
              <Telegram sx={{ fontSize: 15 }} />
            </IconButton>
            <IconButton
              href="/Login"
              size="small"
              sx={{
                //bgcolor: `${secudary}`,
                color: "white",
                ml: 0.5,
                "&:hover": {
                  bgcolor: "white",
                  cursor: "pointer",
                  color: `${secudary}`,
                  transition: "all 1s",
                },
              }}
            >
              <Person sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          //bgcolor: '#E0DBFF',
          mt: 0.5,
          display: { xs: "flex", md: "none" },
          justifyContent: "space-between",
          "@media (max-width: 500px)": {
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: "center",
            alignItems: "center",
          },
          //alignItems: 'center',
          //justifyContent: 'center',
          //bgcolor: '#E0DBFF'
        }}
      >
        <Box
          sx={{
            display: "flex",
            mt: 3,
            ml: 0.5,
          }}
        >
          <Typography
            component={"div"}
            //sx={{ width: 45, height: 40, display: { xs: 'none', md: 'flex' }, mr: 1 }}
          >
            <img src={logo} width={45} height={45} />
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyItem: "center",
            }}
          >
            <Typography
              variant="p"
              component={"div"}
              sx={{
                fontWeight: 700,
                fontSize: "2.2rem",
                fontFamily: "Diphylleia, serif",
                color: `${primery}`,
                mt: -2,
                ml: -0.5,
                "@media (max-width: 500px)": {
                  fontSize: "2.5rem",
                  mt: -2,
                },
              }}
            >
              Overtime
            </Typography>

            <Typography
              variant="p"
              component={"div"}
              sx={{
                fontWeight: 700,
                fontSize: ".6rem",
                color: `${secudary}`,
                ml: 5.4,
                "@media (max-width: 500px)": {
                  fontSize: ".7rem",
                  ml: 6,
                },
              }}
            >
              & Negócio Limpo
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            //justifyItem: 'center',
            mt: 3,
            mr: 0.5,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <LocalPhone
              sx={{ fontSize: "16px", mt: 0.2, color: `${secudary}` }}
            />
            <Typography
              sx={{
                ml: 0.5,
                fontWeight: "bold",
                fontSize: "15px",
                alignItems: "center",
                color: `${primery}`,
              }}
            >
              +55 48 9969-89809
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "15px",
              alignItems: "center",
              color: `${secudary}`,
            }}
          >
            overtimeln47@gmail.com
          </Typography>
        </Box>
      </Box>

      <AppBar
        elevation={0}
        position="sticky"
        sx={{ bgcolor: "white", maxHeight: 100 }}
      >
        <Container maxWidth="x2">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              justifyItem: "center",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                mt: 3,
              }}
            >
              <Typography
                component={"div"}
                //sx={{ width: 45, height: 40, display: { xs: 'none', md: 'flex' }, mr: 1 }}
              >
                <img src={logo} width={38} height={38} />
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyItem: "center",
                }}
              >
                <Typography
                  variant="p"
                  component={"div"}
                  sx={{
                    fontWeight: 800,
                    fontSize: "2.5rem",
                    color: `${primery}`,
                    fontFamily: "Diphylleia, serif",
                    mt: -2,
                    ml: -0.5,
                  }}
                >
                  Overtime
                </Typography>

                <Typography
                  variant="p"
                  component={"div"}
                  sx={{
                    fontWeight: 700,
                    fontSize: ".8rem",
                    color: `${secudary}`,
                    ml: 5,
                    mt: -1,
                    "@media (max-width: 900px)": {
                      ml: 9,
                    },
                  }}
                >
                  & Negócio Limpo
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex", sm: "flex" },
              }}
            >
              <ul
                style={{
                  display: "flex",
                  listStyleType: "none",
                  margin: 0,
                  padding: 0,
                  overflow: "hidden",
                }}
              >
                <li style={{}}>
                  <Link
                    href="#"
                    sx={{
                      display: "block",
                      textAlign: "center",
                      padding: "40px 16px",
                      textDecoration: "none",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      color: `${primery}`,
                      "&:hover": {
                        bgcolor: `${secudary}`,
                        cursor: "pointer",
                        color: "white",
                        transition: "all 400ms",
                      },
                      "@media (max-width: 900px)": {
                        fontSize: "1.3rem",
                        padding: "30px 16px",
                      },
                    }}
                  >
                    INÍCIO
                  </Link>
                </li>
                <li style={{}}>
                  <Link
                    href="#service"
                    sx={{
                      display: "block",
                      textAlign: "center",
                      padding: "40px 16px",
                      textDecoration: "none",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      color: `${primery}`,
                      "&:hover": {
                        bgcolor: `${secudary}`,
                        cursor: "pointer",
                        color: "white",
                        transition: "all 400ms",
                      },
                      "@media (max-width: 900px)": {
                        fontSize: "1.3rem",
                        padding: "30px 16px",
                      },
                    }}
                  >
                    SERVIÇOS
                  </Link>
                </li>
                <li style={{}}>
                  <Link
                    href="#done"
                    sx={{
                      display: "block",
                      textAlign: "center",
                      padding: "40px 16px",
                      textDecoration: "none",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      color: `${primery}`,
                      "&:hover": {
                        bgcolor: `${secudary}`,
                        cursor: "pointer",
                        color: "white",
                        transition: "all 400ms",
                      },
                      "@media (max-width: 900px)": {
                        fontSize: "1.3rem",
                        padding: "30px 16px",
                      },
                    }}
                    onClick={() =>
                      setOpenWork(openWork == "none" ? "flex" : "none")
                    }
                  >
                    TRABALHOS FEITOS
                  </Link>
                </li>
                <li style={{}}>
                  <Link
                    href="#sobre"
                    sx={{
                      display: "block",
                      textAlign: "center",
                      padding: "40px 16px",
                      textDecoration: "none",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      color: `${primery}`,
                      "&:hover": {
                        bgcolor: `${secudary}`,
                        cursor: "pointer",
                        color: "white",
                        transition: "all 400ms",
                      },
                      "@media (max-width: 900px)": {
                        fontSize: "1.3rem",
                        padding: "30px 16px",
                      },
                    }}
                  >
                    SOBRE NÓS
                  </Link>
                </li>
                <li style={{}}>
                  <Link
                    href="#contact"
                    sx={{
                      display: "block",
                      textAlign: "center",
                      padding: "40px 16px",
                      textDecoration: "none",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      color: `${primery}`,
                      "&:hover": {
                        bgcolor: `${secudary}`,
                        cursor: "pointer",
                        color: "white",
                        transition: "all 400ms",
                      },
                      "@media (max-width: 900px)": {
                        fontSize: "1.3rem",
                        padding: "30px 16px",
                      },
                    }}
                  >
                    CONTATE-NOS
                  </Link>
                </li>
              </ul>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                justifyItem: "center",
                mt: 3,
              }}
            >
              <Box sx={{ display: "flex" }}>
                <LocalPhone
                  sx={{ fontSize: "16px", mt: 0.2, color: `${secudary}` }}
                />
                <Typography
                  sx={{
                    ml: 0.5,
                    fontWeight: "bold",
                    fontSize: "15px",
                    alignItems: "center",
                    color: `${primery}`,
                  }}
                >
                  +55 48 9969-89809
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  alignItems: "center",
                  color: `${secudary}`,
                }}
              >
                overtimeln47@gmail.com
              </Typography>
            </Box>
          </Box>
        </Container>
      </AppBar>

      <Box
        sx={{
          display: { xs: "flex", md: "none", sm: "none" },
          justifyContent: "start",
          ml: 1,
        }}
      >
        {openMenu == "none" ? (
          <Button
            size="large"
            edge="start"
            elevation={1}
            //color="inherit"

            aria-label="menu"
            sx={{
              mb: 0.3,
              ml: -0.7,
              mt: 0.6,
              minWidth: 20,
              borderRadius: 1,
              bgcolor: `none`,
              color: `${secudary}`,
            }}
            //startIcon={}
            onClick={() => setOpenMenu("flex")}
          >
            <Widgets className={classes.menu} sx={{ fontSize: 20 }} />
          </Button>
        ) : (
          <IconButton
            size="large"
            edge="start"
            //color="inherit"
            aria-label="menu"
            sx={{ color: `${primery}` }}
            //startIcon={}
            onClick={() => setOpenMenu("none")}
          >
            <Close sx={{ fontSize: 25 }} />
          </IconButton>
        )}
      </Box>

      <Box
        sx={{
          display: { xs: `${openMenu}`, md: "none", sm: "none" },
          bgcolor: "#f1f1f1",
          flexDirection: "column",
          //weight: '100%'
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
            padding: 0,
            width: "100%",
            //backgroundColor: 'blue',
            //overflow: 'hidden'
          }}
        >
          <li style={{}}>
            <Link
              href="#"
              sx={{
                display: "block",
                textAlign: "start",
                padding: "20px 16px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1.2rem",
                color: `${primery}`,
                "&:hover": {
                  bgcolor: `${secudary}`,
                  cursor: "pointer",
                  color: "white",
                  transition: "all 400ms",
                },
              }}
            >
              INÍCIO
            </Link>
          </li>
          <Divider light />
          <li style={{}}>
            <Link
              href="#service"
              sx={{
                display: "block",
                textAlign: "start",
                padding: "20px 16px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1.2rem",
                color: `${primery}`,
                "&:hover": {
                  bgcolor: `${secudary}`,
                  cursor: "pointer",
                  color: "white",
                  transition: "all 400ms",
                },
              }}
            >
              SERVIÇOS
            </Link>
          </li>
          <Divider light />
          <li style={{}}>
            <Link
              href="#done"
              sx={{
                display: "block",
                textAlign: "start",
                padding: "20px 16px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1.2rem",
                color: `${primery}`,
                "&:hover": {
                  bgcolor: `${secudary}`,
                  cursor: "pointer",
                  color: "white",
                  transition: "all 400ms",
                },
              }}
              onClick={() => setOpenWork(openWork == "none" ? "flex" : "none")}
            >
              TRABALHOS FEITOS
            </Link>
          </li>
          <Divider light />
          <li style={{}}>
            <Link
              href="#sobre"
              sx={{
                display: "block",
                textAlign: "start",
                padding: "20px 16px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1.2rem",
                color: `${primery}`,
                "&:hover": {
                  bgcolor: `${secudary}`,
                  cursor: "pointer",
                  color: "white",
                  transition: "all 400ms",
                },
              }}
            >
              SOBRE NÓS
            </Link>
          </li>
          <Divider light />
          <li style={{}}>
            <Link
              href="#contact"
              sx={{
                display: "block",
                textAlign: "start",
                padding: "20px 16px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1.2rem",
                color: `${primery}`,
                "&:hover": {
                  bgcolor: `${secudary}`,
                  cursor: "pointer",
                  color: "white",
                  transition: "all 400ms",
                },
              }}
            >
              CONTATE-NOS
            </Link>
          </li>
          <Divider light />
        </ul>
        <Box
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "start",
            bgcolor: `${primery}`,
            minHeight: 80,
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mt: 2.4,
                ml: 1,
              }}
            >
              <IconButton
                //size="small"
                href="https://www.facebook.com/profile.php?id=61558712668202"
                target="_blank"
                size="large"
                sx={{
                  bgcolor: `${secudary}`,
                  color: "white",
                  "&:hover": {
                    bgcolor: "white",
                    cursor: "pointer",
                    color: `${primery}`,
                    transition: "all 400ms",
                  },
                }}
              >
                <Facebook sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                //size="small"
                href="https://www.instagram.com/overtime_nl/"
                target="_blank"
                size="large"
                sx={{
                  bgcolor: `${secudary}`,
                  color: "white",
                  ml: 0.5,
                  "&:hover": {
                    bgcolor: "white",
                    cursor: "pointer",
                    color: `${primery}`,
                    transition: "all 400ms",
                  },
                }}
              >
                <Instagram sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                //size="small"
                size="large"
                sx={{
                  bgcolor: `${secudary}`,
                  color: "white",
                  ml: 0.5,
                  "&:hover": {
                    bgcolor: "white",
                    cursor: "pointer",
                    color: `${primery}`,
                    transition: "all 400ms",
                  },
                }}
              >
                <LinkedIn sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                //size="small"
                size="large"
                sx={{
                  bgcolor: `${secudary}`,
                  color: "white",
                  ml: 0.5,
                  "&:hover": {
                    bgcolor: "white",
                    cursor: "pointer",
                    color: `${primery}`,
                    transition: "all 400ms",
                  },
                }}
              >
                <Twitter sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                //size="small"
                href="https://api.whatsapp.com/message/REGZSZIRC3CGI1?autoload=1&app_absent=0"
                target="_blank"
                size="large"
                sx={{
                  bgcolor: `${secudary}`,
                  color: "white",
                  ml: 0.5,
                  "&:hover": {
                    bgcolor: "white",
                    cursor: "pointer",
                    color: `${primery}`,
                    transition: "all 400ms",
                  },
                }}
              >
                <WhatsApp sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                //size="small"
                //href="https://www.facebook.com/profile.php?id=61558712668202"
                //target="_blank"
                size="large"
                sx={{
                  bgcolor: `${secudary}`,
                  color: "white",
                  ml: 0.5,
                  "&:hover": {
                    bgcolor: "white",
                    cursor: "pointer",
                    color: `${primery}`,
                    transition: "all 400ms",
                  },
                }}
              >
                <Telegram sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                href="/Login"
                size="small"
                sx={{
                  //bgcolor: `${secudary}`,
                  color: "white",
                  ml: 0.5,
                  "&:hover": {
                    bgcolor: "white",
                    cursor: "pointer",
                    color: `${secudary}`,
                    transition: "all 1s",
                  },
                }}
              >
                <Person sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        elevation={0}
        sx={{
          display: { xs: "none", md: "none", sm: "flex" },
          justifyContent: "start",
          //bgcolor: `${primery}`,
          minHeight: 0,
          mb: 0.5,
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 1.5,
              ml: 1,
            }}
          >
            <IconButton
              href="https://www.facebook.com/profile.php?id=61558712668202"
              target="_blank"
              size="large"
              sx={{
                bgcolor: `${secudary}`,
                color: "white",
                "&:hover": {
                  bgcolor: "white",
                  cursor: "pointer",
                  color: `${primery}`,
                  transition: "all 400ms",
                },
              }}
            >
              <Facebook sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton
              size="large"
              href="https://www.instagram.com/overtime_nl/"
              target="_blank"
              sx={{
                bgcolor: `${secudary}`,
                color: "white",
                ml: 0.5,
                "&:hover": {
                  bgcolor: "white",
                  cursor: "pointer",
                  color: `${primery}`,
                  transition: "all 400ms",
                },
              }}
            >
              <Instagram sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton
              size="large"
              sx={{
                bgcolor: `${secudary}`,
                color: "white",
                ml: 0.5,
                "&:hover": {
                  bgcolor: "white",
                  cursor: "pointer",
                  color: `${primery}`,
                  transition: "all 400ms",
                },
              }}
            >
              <LinkedIn sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton
              size="large"
              sx={{
                bgcolor: `${secudary}`,
                color: "white",
                ml: 0.5,
                "&:hover": {
                  bgcolor: "white",
                  cursor: "pointer",
                  color: `${primery}`,
                  transition: "all 400ms",
                },
              }}
            >
              <Twitter sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton
              size="large"
              href="https://api.whatsapp.com/message/REGZSZIRC3CGI1?autoload=1&app_absent=0"
              target="_blank"
              sx={{
                bgcolor: `${secudary}`,
                color: "white",
                ml: 0.5,
                "&:hover": {
                  bgcolor: "white",
                  cursor: "pointer",
                  color: `${primery}`,
                  transition: "all 400ms",
                },
              }}
            >
              <WhatsApp sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton
              size="large"
              sx={{
                bgcolor: `${secudary}`,
                color: "white",
                ml: 0.5,
                "&:hover": {
                  bgcolor: "white",
                  cursor: "pointer",
                  color: `${primery}`,
                  transition: "all 400ms",
                },
              }}
            >
              <Telegram sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton
              href="/Login"
              size="small"
              sx={{
                //bgcolor: `${secudary}`,
                color: `${secudary}`,
                ml: 0.5,
                "&:hover": {
                  //bgcolor: `${secudary}`,
                  cursor: "pointer",
                  color: `${primery}`,
                  transition: "all 1s",
                },
              }}
            >
              <Person sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box>
        <Publicidades />
      </Box>

      <Box id="service">
        <Services primery={primery} secudary={secudary} />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          //flexDirection: 'column',
          alignItems: "center",
          mt: 5,
        }}
      >
        <Button
          sx={{
            mt: 0.5,
            p: 1,
            color: "white",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: 2,
            boxShadow: "4px 4px 2px lightblue",
            fontSize: "12px",
            backgroundColor: "#ED1C07",
            "&:hover": {
              color: "#171010",
              //backgroundColor: 'white',
              cursor: "pointer",
              transition: "0.3s ease-in",
            },
          }}
          onClick={() => setOpenWork(openWork == "none" ? "flex" : "none")}
        >
          Trabalhos Feitos
        </Button>
      </Box>

      <Box
        id="done"
        sx={{
          display: `${openWork}`,
          position: "relative",
          justifyContent: "center",
          //flexDirection: 'column',
          alignItems: "center",
          mt: 2,
        }}
      >
        <WorksDone primery={primery} secudary={secudary} />
      </Box>

      <Box
        id="sobre"
        sx={{
          bgcolor: `${secudary}`,
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
          <About />
        </Box>
      </Box>
      <Box
        id="contact"
        sx={{
          //bgcolor: `${secudary}`,
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
          <Contact primery={primery} secudary={secudary} />
        </Box>
      </Box>
      <Box
        id=""
        sx={{
          //bgcolor: `${secudary}`,
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
          <Emprove primery={primery} secudary={secudary} />
        </Box>
      </Box>
      <Box
        //id="sobre"
        sx={{
          bgcolor: `${primery}`,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          //mt: 1,
        }}
      >
        <Footer primery={primery} secudary={secudary} />
      </Box>
    </>
  );
}
export default Home;
