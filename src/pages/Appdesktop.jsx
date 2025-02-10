import { useCallback, useState } from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
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
} from "@mui/icons-material";
import Boxdesktop from "../components/worksdone/Boxdesktop";

import "../components/worksdone/showapps/css/base.css";
//import '../css/sandbox.css'
import "../components/worksdone/showapps/css/embla.css";
import EmblaCarousel from "../components/worksdone/showapps/js/EmblaCarousel";

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
  return (
    <>
      <div className={classes.header}>
        <div className={classes.titulo}>
          <h1>Aplicações Dasktop</h1>
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",

          //flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          //height: "500px", <Boxdesktop primery={primery} secudary={secudary} app={aplication} />
          //mt: 1,
          mb: 2,
        }}
      >
        <Box>
          <EmblaCarousel
            slides={slides}
            options={OPTIONS}
            primery={primery}
            secudary={secudary}
          />
        </Box>
      </Box>

      <div className={classes.footer}>
        <div>
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
              <img src={logo} width={30} height={30} />
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
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
                  mt: -1.7,
                  //ml: 0.,
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
                  ml: 5,
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
