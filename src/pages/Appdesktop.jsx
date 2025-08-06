import { useCallback, useState, useEffect } from "react";
import { Box, Grid, Typography, IconButton, Button } from "@mui/material";
import classes from "./descktop.module.css";
import logo from "../assets/OverLogo.png";
//import logo from "../assets/OverLogo.png";
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
  ArrowLeft,
} from "@mui/icons-material";
import Boxdesktop from "../components/worksdone/Boxdesktop";
import Model from "../components/Model";

import "../components/worksdone/showapps/css/base.css";
//import '../css/sandbox.css'
import "../components/worksdone/showapps/css/embla.css";
import EmblaCarousel from "../components/worksdone/showapps/js/EmblaCarousel";
import { Downloadguia } from "../components/worksdone/Downloadguia";
const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const slides = [
  {
    id: 1,
    titulo: "Aplicação Desktop para Gestão de Lojas",
    midia: "LojaApp.webp",
    descricao: `
      <h4>Ideal para pequenas e médias empresas</h4>
      <p>A solução completa para otimizar a administração de lojas, oferecendo ferramentas essenciais para controle de vendas, gestão de clientes, fluxo de caixa e muito mais.</p>
      <h3><strong> Recursos Extras:</strong></h3>
      <p>Geração de relatórios em <strong> Excel </strong> para: </p>
      <p>Vendas,
      Dívidas,
      Despesas mensais,
      Clientes e 
      Fluxo de caixa mensal.</p>
    `,
  },
  {
    id: 2,
    titulo: "Aplicação Desktop para Gestão de Lojas",
    midia: "LojaApp.webp",
    descricao: `
      <h4>Ideal para pequenas e médias empresas</h4>
      <p>A solução completa para otimizar a administração de lojas, oferecendo ferramentas essenciais para controle de vendas, gestão de clientes, fluxo de caixa e muito mais.</p>
      <h3><strong> Recursos Extras:</strong></h3>
      <p>Geração de relatórios em <strong> Excel </strong> para: </p>
      <p>Vendas,
      Dívidas,
      Despesas mensais,
      Clientes e 
      Fluxo de caixa mensal.</p>
    `,
  },
  {
    id: 3,
    titulo: "Aplicação Desktop para Gestão de Lojas",
    midia: "LojaApp.webp",
    descricao: `
      <h4>Ideal para pequenas e médias empresas</h4>
      <p>A solução completa para otimizar a administração de lojas, oferecendo ferramentas essenciais para controle de vendas, gestão de clientes, fluxo de caixa e muito mais.</p>
      <h3><strong> Recursos Extras:</strong></h3>
      <p>Geração de relatórios em <strong> Excel </strong> para: </p>
      <p>Vendas,
      Dívidas,
      Despesas mensais,
      Clientes e 
      Fluxo de caixa mensal.</p>
    `,
  },
  {
    id: 4,
    titulo: "Aplicação Desktop para Gestão de Lojas",
    midia: "LojaApp.webp",
    descricao: `
      <h4>Ideal para pequenas e médias empresas</h4>
      <p>A solução completa para otimizar a administração de lojas, oferecendo ferramentas essenciais para controle de vendas, gestão de clientes, fluxo de caixa e muito mais.</p>
      <h3><strong> Recursos Extras:</strong></h3>
      <p>Geração de relatórios em <strong> Excel </strong> para: </p>
      <p>Vendas,
      Dívidas,
      Despesas mensais,
      Clientes e 
      Fluxo de caixa mensal.</p>
    `,
  },
  {
    id: 5,
    titulo: "Aplicação Desktop para Gestão de Lojas",
    midia: "LojaApp.webp",
    descricao: `
      <h4>Ideal para pequenas e médias empresas</h4>
      <p>A solução completa para otimizar a administração de lojas, oferecendo ferramentas essenciais para controle de vendas, gestão de clientes, fluxo de caixa e muito mais.</p>
      <h3><strong> Recursos Extras:</strong></h3>
      <p>Geração de relatórios em <strong> Excel </strong> para: </p>
      <p>Vendas,
      Dívidas,
      Despesas mensais,
      Clientes e 
      Fluxo de caixa mensal.</p>
    `,
  },
];

function Appdesktop(props) {
  const { primery, secudary } = props;
  //const [opcao, setOpcao] = useState('');
  const [servicos, setServicos] = useState([]);
  const [openModel, setOpenModel] = useState(false);
  const [title, setTitle] = useState("");
  const [aplication, setAplication] = useState({
    id: 1,
    titulo: "Aplicação Desktop para Gestão de Lojas",
    midia: "LojaApp.webp",
    descricao: `
      <h4>Ideal para pequenas e médias empresas</h4>
      <p>A solução completa para otimizar a administração de lojas, oferecendo ferramentas essenciais para controle de vendas, gestão de clientes, fluxo de caixa e muito mais.</p>
      <h3><strong> Recursos Extras:</strong></h3>
      <p>Geração de relatórios em <strong> Excel </strong> para: </p>
      <p>Vendas,
      Dívidas,
      Despesas mensais,
      Clientes e 
      Fluxo de caixa mensal.</p>
  
    `,
  });

  useEffect(() => {
    let apps = [];
    // https://api-json-red.vercel.app/ 
    fetch("https://api-json-red.vercel.app/aplicativos")
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson.forEach((element) => {
          if (element.work == "APP Desktop") {
            apps.push(element);
          }
        });
        setServicos(apps);
        console.log(apps);
      });
  }, []);
  return (
    <>
      <div className={classes.header}>
        <div className={classes.titulo}>
          <Button
            size="small"
            href="/"
            sx={{
              maxWidth: 40,
              maxHeight: 40,
              mt: 0.5,
              mr: 2,
              //borderRadius: 100,
              bgcolor: `${primery}`,
              "@media (max-width: 550px)": {
                maxHeight: 40,
                borderRadius: 100,
              },
              "@media (max-width: 399px)": {
                //width: "80%",
                //mt: 5,
                ml: -2,
                bgcolor: `${secudary}`,
                //maxWidth: 30,
                maxHeight: 40,
                borderRadius: 100,
              },
            }}
          >
            <ArrowLeft sx={{ fontSize: 30, color: "white" }} />
          </Button>
          <h1>Aplicações Desktop</h1>
          <Typography
            sx={{
              ml: -0.5,
              mt: -1,
              maxWidth: 300,
              fontSize: 13,
              //fontFamily: "Diphylleia, serif",
              "@media (max-width: 660px)": {
                fontSize: 11,
                maxWidth: 280,
              },
              "@media (max-width: 550px)": {
                fontSize: 9.5,
                maxWidth: 180,
                //mt: 6,
                //ml: -19,
              },
              "@media (max-width: 399px)": {
                fontSize: 8,
                maxWidth: 200,
                mt: -0.1,
                //ml: -14.5,
              },
              "@media (max-width: 320px)": {
                fontSize: 8,
                maxWidth: 150,
                mt: -0.1,
                ml: -0.1,
              },
            }}
          >
            Sistemas para gestão de négocios finalizados, e prontos para uso!
          </Typography>
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "110vh",
          //flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          //height: "500px", <Boxdesktop primery={primery} secudary={secudary} app={aplication} />
          //mt: 1,
          mb: 2,
          "@media (max-width: 1050px)": {
            width: "80%",
            ml: 10,
          },
          "@media (max-width: 770px)": {
            //width: "80%",
            ml: 8,
          },
          "@media (max-width: 650px)": {
            //width: "80%",
            ml: 8,
          },
          "@media (max-width: 600px)": {
            //width: "80%",
            ml: 6,
          },
          "@media (max-width: 495px)": {
            width: "50%",
            ml: 15,
          },
          "@media (max-width: 485px)": {
            width: "25%",
            ml: 22,
          },
          "@media (max-width: 470px)": {
            width: 5,
            ml: 25,
          },
          "@media (max-width: 375px)": {
            //width: 5,
            ml: 23,
          },
          "@media (max-width: 325px)": {
            //width: 5,
            ml: 20,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            //height: "100",
          }}
        >
          <EmblaCarousel
            slides={servicos}
            options={OPTIONS}
            primery={primery}
            secudary={secudary}
            setTitle={setTitle}
            setOpenModel={setOpenModel}
            setAplication={setAplication}
          />
        </Box>
      </Box>

      <div className={classes.footer}>
        <div>
          <Box
            sx={{
              display: "flex",
              justifyItems: "center",
              //alignItems: "center",
              mt: 2,
              ml: 0.5,
              //mb: 2,
            }}
          >
            <Typography
              component={"div"}
              //sx={{ width: 45, height: 40, display: { xs: 'none', md: 'flex' }, mr: 1 }}
            >
              <img src={logo} width={25} height={25} />
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                ml: 1.7,
                //justifyContent: "center",
              }}
            >
              <Typography
                variant="p"
                component={"div"}
                sx={{
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "#fff",
                  mt: -1,
                  ml: -2,
                  fontFamily: "Diphylleia, serif",
                  //fontFamily: 'Prosto One, sans-serif',
                  //color: `${primery}`,
                }}
              >
                Overtime
              </Typography>
              <Typography
                variant="p"
                component={"div"}
                sx={{
                  fontWeight: 400,
                  fontSize: ".5rem",
                  color: `${secudary}`,
                  mt: -0.4,
                  mr: -1,
                  "@media (max-width: 500px)": {
                    //ml: 8,
                  },
                }}
              >
                & Negócio Limpo
              </Typography>
            </Box>
          </Box>
        </div>
        <div>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              //mb: 2,
            }}
          >
            <IconButton
              //component="div"
              size="small"
              href="https://www.facebook.com/profile.php?id=61558712668202"
              target="_blank"
              sx={{
                //bgcolor: `${secudary}`,
                color: "white",
                "&:hover": {
                  //bgcolor: "none",
                  cursor: "pointer",
                  color: `${"#FC1B08"}`,
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
                color: "white",
                ml: 0.5,
                "&:hover": {
                  //bgcolor: "white",
                  cursor: "pointer",
                  color: `${"#FC1B08"}`,
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
                color: "white",
                ml: 0.5,
                "&:hover": {
                  //bgcolor: 'white',
                  cursor: "pointer",
                  color: `${"#FC1B08"}`,
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
                color: "white",
                ml: 0.5,
                "&:hover": {
                  //bgcolor: 'white',
                  cursor: "pointer",
                  color: `${"#FC1B08"}`,
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
                color: "white",
                ml: 0.5,
                "&:hover": {
                  //bgcolor: 'white',
                  cursor: "pointer",
                  color: `${"#FC1B08"}`,
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
                color: "white",
                ml: 0.5,
                "&:hover": {
                  //bgcolor: 'white',
                  cursor: "pointer",
                  color: `${"#FC1B08"}`,
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
        </div>
      </div>
    </>
  );
}
export default Appdesktop;
