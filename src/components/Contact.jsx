/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Grid,
  TextField,
  MenuItem,
  IconButton,
  Button,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  Menu,
  LinkedIn,
  LocalPhone,
  Watch,
  WhatsApp,
  Telegram,
  Close,
} from "@mui/icons-material";
import classes from "./Contact.module.css";
import Contato from "../assets/CONTATO.png";

const currencies = [
  {
    value: "Aplicações Desktop",
    label: "Aplicações Desktop",
  },
  {
    value: "App Web e Mobile",
    label: "App Web e Mobile",
  },
  {
    value: "Marketing Digital",
    label: "Marketing Digital",
  },
  {
    value: "Produção Multimidia",
    label: "Produção Multimidia",
  },
  {
    value: "Outro",
    label: "Outro",
  },
];

function Contact(props) {
  const { primery, secudary } = props;
  const [message, setMessage] = useState({
    id: 0,
    nome: "",
    email: "",
    assunto: "",
    conteudo: "",
    idUser: "",
  });

  const handleChannge = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          color: `${primery}`,
          mt: 5,
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: "1.5rem",
            fontWeight: 700,
            //color: '#fff',
            "@media (max-width: 800px)": { fontSize: "1.2rem" },
          }}
        >
          contate-nos
        </Typography>
        <Typography
          sx={{
            fontSize: "2.5rem",
            fontWeight: 700,
            //color: '#fff',
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 800px)": { fontSize: "1.8rem" },
            "@media (max-width: 400px)": { fontSize: "1.4rem" },
          }}
        >
          Fale Connosco
        </Typography>
        <Divider
          sx={{
            fontWeight: 700,
            mt: 2,
            fontSize: 15,
            width: 120,
            border: `2px solid #BDC1C9`,
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 4,
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            height: "100%",
            width: "100%",
            p: 1,
            mt: 5,
            ml: 8,
            mr: -4,
            "@media (max-width: 1100px)": {
              ml: 2,
            },
            "@media (max-width: 1050px)": {
              mr: 2,
              ml: -1,
            },
            "@media (max-width: 1000px)": {
              mr: 2,
              ml: -4,
            },
          }}
        >
          <img width={400} height={200} src={Contato} />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            //p: 2,
            width: 850,
            "@media (max-width: 800px)": {
              //width: 250,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              borderRadius: 2,
              //backgroundColor: `${secudary}`,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 2,
                mb: -1,
                width: "100%",
                "@media (max-width: 800px)": {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              <form
                method="post"
                onSubmit={submitForm}
                style={{ width: "100%" }}
                className={classes.formContact}
              >
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Informe seu nome"
                    name="nome"
                    onChange={handleChannge}
                    value={message.nome}
                  />
                </div>
                <div className="input-box">
                  <input
                    type="email"
                    placeholder="Informe seu email"
                    name="email"
                    onChange={handleChannge}
                    value={message.email}
                  />
                </div>
                <div className="input-box">
                  <select
                    id="pet-select"
                    name="conteudo"
                    onChange={handleChannge}
                  >
                    <option value="">Selecione o assunto</option>
                    <option value="Aplicações Desktop">
                      Aplicações Desktop
                    </option>
                    <option value="App Web e Mobile">App Web e Mobile</option>
                    <option value="Marketing Digital">Marketing Digital</option>
                    <option value="Produção Multimidia">
                      Produção Multimidia
                    </option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div className="input-box message-box">
                  <textarea
                    cols={20}
                    rows={3}
                    name="conteudo"
                    placeholder="Insere a mensagem"
                    onChange={handleChannge}
                  >
                    {message.conteudo}
                  </textarea>
                </div>
                <Button
                  type="submit"
                  //onClick={}
                  size="small"
                  sx={{
                    margin: "8px 0",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    //height: '25px',
                    p: 1,
                    textDecoration: "none",
                    fontSize: "14px",
                    //borderRadius: 5,
                    backgroundColor: `${primery}`,
                    "&:hover": {
                      //color: `${secudary}`,
                      cursor: "pointer",
                      transition: "0.3s ease-in",
                    },
                  }}
                  fullWidth
                >
                  Enviar
                </Button>
              </form>
            </Box>

            <Box
              sx={{
                display: "flex",
                mb: 2,
              }}
            >
              <IconButton
                size="small"
                href="https://www.facebook.com/profile.php?id=61558712668202"
                target="_blank"
                sx={{
                  //bgcolor: `${secudary}`,
                  p: 1,
                  //color: "white",
                  color: `${secudary}`,
                  "&:hover": {
                    //bgcolor: "none",
                    bgcolor: `${secudary}`,
                    cursor: "pointer",
                    color: `${"white"}`,
                    transition: "all 400ms",
                  },
                }}
              >
                <Facebook
                  sx={{
                    fontSize: "25px",
                  }}
                />
              </IconButton>
              <IconButton
                size="small"
                href="https://www.instagram.com/overtime_nl/"
                target="_blank"
                sx={{
                  //bgcolor: `${secudary}`,
                  p: 1,
                  //color: "white",
                  color: `${secudary}`,
                  "&:hover": {
                    //bgcolor: "none",
                    bgcolor: `${secudary}`,
                    cursor: "pointer",
                    color: `${"white"}`,
                    transition: "all 400ms",
                  },
                }}
              >
                <Instagram
                  sx={{
                    fontSize: "25px",
                  }}
                />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  //bgcolor: `${secudary}`,
                  p: 1,
                  //color: "white",
                  color: `${secudary}`,
                  "&:hover": {
                    //bgcolor: "none",
                    bgcolor: `${secudary}`,
                    cursor: "pointer",
                    color: `${"white"}`,
                    transition: "all 400ms",
                  },
                }}
              >
                <LinkedIn
                  sx={{
                    fontSize: "25px",
                  }}
                />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  //bgcolor: `${secudary}`,
                  p: 1,
                  //color: "white",
                  color: `${secudary}`,
                  "&:hover": {
                    //bgcolor: "none",
                    bgcolor: `${secudary}`,
                    cursor: "pointer",
                    color: `${"white"}`,
                    transition: "all 400ms",
                  },
                }}
              >
                <Twitter
                  sx={{
                    fontSize: "25px",
                  }}
                />
              </IconButton>
              <IconButton
                size="small"
                href="https://api.whatsapp.com/message/REGZSZIRC3CGI1?autoload=1&app_absent=0"
                target="_blank"
                sx={{
                  //bgcolor: `${secudary}`,
                  p: 1,
                  //color: "white",
                  color: `${secudary}`,
                  "&:hover": {
                    //bgcolor: "none",
                    bgcolor: `${secudary}`,
                    cursor: "pointer",
                    color: `${"white"}`,
                    transition: "all 400ms",
                  },
                }}
              >
                <WhatsApp
                  sx={{
                    fontSize: "25px",
                  }}
                />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  //bgcolor: `${secudary}`,
                  p: 1,
                  //color: "white",
                  color: `${secudary}`,
                  "&:hover": {
                    //bgcolor: "none",
                    bgcolor: `${secudary}`,
                    cursor: "pointer",
                    color: `${"white"}`,
                    transition: "all 400ms",
                  },
                }}
              >
                <Telegram
                  sx={{
                    fontSize: "25px",
                  }}
                />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Contact;
