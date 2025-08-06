import { React, useEffect, useState } from "react";
import {
  Box,
  Divider,
  Grid,
  Card,
  CardMedia,
  CardActions,
  IconButton,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import Carousel from "react-elastic-carousel";
import ClientBox from "./ClientBox";
import Item from "./Item";
import classes from "./Clients.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { WhatsApp } from "@mui/icons-material";

const sli = [
  {
    id: 1,
    work: "APP Desktop",
    name: "GESTÃO DE RESTAURANTE",
    image: "d85c5d75-941a-46e7-8847-f75f1476e4bd.jpg",
    conteudo:
      "Tecnologia a favor da sua gestão! Nossa aplicação foi desenvolvida para otimizar restaurantes, bares e lanchonetes, oferecendo controle completo de pedidos, estoque, pagamentos e relatórios detalhados em Excel. Tudo de forma simples e eficiente!",
    more: "saber mais",
    whats:
      "https://api.whatsapp.com/message/REGZSZIRC3CGI1?autoload=1&app_absent=0",
  },
  {
    id: 2,
    work: "APP Desktop",
    name: "GESTÃO DE LOJAS",
    image: "697f450c-e2a6-4701-920c-6051a9a604c6.jpg",
    conteudo:
      "Facilite a gestão do seu negócio! Com nossa aplicação, você pode cadastrar vendas, controlar dívidas, gerar faturas, registrar folhas de pagamento e acompanhar o fluxo de caixa de forma prática e eficiente.",
    more: "saber mais",
    whats:
      "https://api.whatsapp.com/message/REGZSZIRC3CGI1?autoload=1&app_absent=0",
  },
  {
    id: 3,
    work: "APP Desktop",
    name: "GESTÃO DE FARMÁCIA",
    image: "e158c452-493a-4ce3-ba4d-2e456550a3b8.jpg",
    conteudo:
      "Uma solução completa para farmácias! Com nossa aplicação, você pode emitir faturas, registrar folhas de pagamento, gerenciar vendas e acompanhar o fluxo de caixa de forma prática e segura.",
    more: "saber mais",
    whats:
      "https://api.whatsapp.com/message/REGZSZIRC3CGI1?autoload=1&app_absent=0",
  },
  {
    id: 4,
    work: "APP Desktop",
    name: "GESTÃO DE COLÉGIOS",
    image: "0800d432-7bb7-4fbf-a2db-cdbb38e34c6a.jpg",
    conteudo:
      "Gerencie sua escola de forma organizada e eficiente! Nossa aplicação oferece painéis exclusivos para secretaria e diretoria, facilitando o cadastro de alunos, controle de turmas, registros acadêmicos, gestão de funcionários e finanças.",
    more: "saber mais",
    whats:
      "https://api.whatsapp.com/message/REGZSZIRC3CGI1?autoload=1&app_absent=0",
  },
];

function DesktopAPPS(props) {
  const { primery, secudary } = props;
  const [slides, setSlides] = useState([]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    //setCurrentSlide(0);
    // https://api-json-red.vercel.app /
    let apps = [];
    fetch("https://api-json-red.vercel.app/aplicativos")
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson.forEach((element) => {
          if (element.work == "APP Desktop") {
            apps.push(element);
          }
        });
        setSlides(apps);
        console.log(apps);
      });
  }, []);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          //position: 'relative',
          justifyContent: "center",
          alignItems: "center",
          "@media (max-width: 800px)": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        {slides.length == 0 ? (
          <Typography sx={{ m: "1px auto" }}>
            Não há Aplicações Desktop
          </Typography>
        ) : (
          <div className={classes.carousel}>
            <Slider {...settings}>
              {slides.map((slide, index) => {
                return (
                  <Card key={index} elevation={0} sx={{ maxWidth: 300, m: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        //mt: 3,
                        //ml: .5,
                      }}
                    >
                      <Typography component={"div"} sx={{ mt: 1 }}>
                        <img
                          src={`https://api-json-red.vercel.app/arquivos/${slide.filename}`}
                          width={25}
                          height={20}
                        />
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "start",
                          alignItems: "start",
                          textAlign: "start",
                        }}
                      >
                        <Typography
                          variant="p"
                          component={"div"}
                          sx={{
                            fontWeight: 800,
                            mt: 0.5,
                            fontSize: "20px",
                            //fontFamily: "Mulish, sans",
                            color: `${primery}`,
                            ml: 0.5,
                            "@media (max-width: 500px)": {
                              //fontSize: '2.5rem',
                              //mt: -2,
                            },
                          }}
                        >
                          {slide.name}
                        </Typography>
                      </Box>
                    </Box>
                    <CardContent>
                      <Typography
                        sx={{
                          fontSize: "1rem",
                          //fontWeight: 700,
                          fontFamily: "Arvo, serif",
                          textAlign: "justify",
                          //width: 225,
                        }}
                      >
                        {slide.conteudo}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        href={`${slide.more}`}
                        sx={{
                          color: "white",
                          border: "none",
                          cursor: "pointer",
                          textDecoration: "none",
                          fontWeight: "bold",
                          borderRadius: 0,
                          fontSize: "8px",
                          backgroundColor: "#ED1C07",
                          "&:hover": {
                            color: "#171010",
                            //backgroundColor: 'white',
                            cursor: "pointer",
                            transition: "0.3s ease-in",
                          },
                        }}
                      >
                        Saber Mais..
                      </Button>
                      <IconButton href={slide.whats} target="_blank">
                        <WhatsApp
                          sx={{
                            color: "green",
                            fontSize: "20px",
                          }}
                        />
                      </IconButton>
                    </CardActions>
                  </Card>
                );
              })}
            </Slider>
          </div>
        )}
      </Box>
    </Box>
  );
}
export default DesktopAPPS;
