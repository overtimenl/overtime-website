import { useCallback, useEffect, useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Typography } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import classes from "./Publicidades.module.css";

const slids = [
  {
    id: 1,
    title: "WEB SITE",
    subtitle: "PROMOÇÃO, COMEÇA 2025 GANHANDO MAIS...",
    tipo: "SERVICO",
    descricao:
      "Assuma o próximo passo para o sucesso do seu negócio! Vagas limitadas para criação de sites a apenas 400 mil Kwanzas. Inclui consultoria digital, domínio gratuito e suporte técnico. Pagamento em 4 parcelas, a ultima paga apenas após o site estar online! Aproveite essa oportunidade única!"",
    image: "88bbc8a7-abc7-4b23-b706-991def900521.jpg",
    more: "https://api.whatsapp.com/message/REGZSZIRC3CGI1?autoload=1&app_absent=0",
  },
  {
    id: 2,
    title: "MARKETING DIGITAL",
    subtitle: "Cuidamos Da Sua Presença Digital",
    tipo: "SERVICO",
    descricao:
      "Transforme engajamento em vendas! Otimize suas redes sociais com mais interações e anúncios online eficientes que convertem. Quer crescer de verdade? ",
    image: "95b91ce2-9467-40e6-8709-d328a665bf43.jpg",
    more: "https://api.whatsapp.com/message/REGZSZIRC3CGI1?autoload=1&app_absent=0",
  },
  {
    id: 3,
    title: "APLICAÇÃO WEB",
    subtitle: "Construímos Aplicações Web ",
    tipo: "SERVICO",
    descricao:
      "Mais controle, mais crescimento! Nossas aplicações web permitem que você tenha uma visão clara e em tempo real das suas operações. Vamos elevar a sua gestão ao próximo nível?",
    image: "6bcaeb00-156a-4ea4-9fc8-8799554c3374.jpg",
    more: "https://api.whatsapp.com/message/REGZSZIRC3CGI1?autoload=1&app_absent=0",
  },
  {
    id: 4,
    title: "APLICAÇÃO DESKTOP",
    subtitle: "Construímos Aplicações DESKTOP",
    tipo: "SERVICO",
    descricao:
      "Transforme a eficiência do seu negócio! Desenvolvemos aplicações desktop poderosas para simplificar e automatizar suas operações. Quer saber como podemos ajudar? ",
    image: "6bcaeb00-156a-4ea4-9fc8-8799554c3374.jpg",
    more: "https://api.whatsapp.com/message/REGZSZIRC3CGI1?autoload=1&app_absent=0",
  },
  {
    id: 5,
    title: "APLICAÇÃO DESKTOP",
    subtitle: "Gestão Financeira e RH",
    tipo: "PRODUTO",
    descricao:
      "Controle de fluxo de caixa, folhas de salários, cadastros de Funcionários e mais ...",
    image: "08a8db60-0f7b-4afc-a7ab-e7febb47d589.jpg",
    more: "#",
  },
  {
    id: 6,
    title: "APLICAÇÃO DESKTOP",
    subtitle: "Gestão de Restaurante",
    tipo: "PRODUTO",
    descricao:
      "Controle de Entradas estoque, cardápio, folhas de salários, cadastros de Funcionários e mais ...",
    image: "0aa74192-bb9a-4772-b3a5-60e945b5ec3b.jpg",
    more: "#",
  },

  {
    id: 7,
    title: "APLICAÇÃO DESKTOP",
    subtitle: "Gestão De Colégios (escolas)",
    tipo: "PRODUTO",
    descricao:
      "Cadastro de alunos, turmas, históricos, Funcionários, controle Financeiro, impressão de recibo e mais   ...",
    image: "ba5c48a6-519a-44ff-9388-edaef3be9f99.jpg",
    more: "#",
  },
];

function Publicidades() {
  //const classes = useStyles();
  const [slides, setSlides] = useState(slids);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = slides.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    //console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    //console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }
  /*
  	useEffect(() => {
    	setCurrentSlide(0);
    	fetch("http://localhost:8000/publicidadesdb/")
        .then((response)=>response.json())
        .then((responseJson)=>{
           setSlides(responseJson)
        })  

  	}, []);
	

  	useEffect(() => {
    	if (autoScroll) {
      		auto();
    	}
    	return () => clearInterval(slideInterval);
  	}, [currentSlide]);
	*/

  return (
    <>
      {slides.length == 0 ? (
        <Typography sx={{ m: "1px auto" }}>Não há publicidades</Typography>
      ) : (
        <div className={classes.slider}>
          <a className={classes.prev} onClick={prevSlide}>
            &#10094;
          </a>
          <a className={classes.next} onClick={nextSlide}>
            &#10095;
          </a>

          {slides.map((slide, index) => {
            return (
              <div
                key={index}
                className={
                  index === currentSlide
                    ? `${classes.myslider} ${classes.current}`
                    : `${classes.myslider}`
                }
              >
                {index === currentSlide && (
                  <>
                    <img
                      src={
                        new URL(
                          `../assets/marketing/${slide.image}`,
                          import.meta.url
                        )
                      }
                      alt="Slide"
                    />
                    <div className={classes.sombra}>
                      <div className={classes.content}>
                        <h2>{slide.title}</h2>
                        <h4>{slide.subtitle}</h4>
                        <p>{slide.descricao}</p>
                        {slide.tipo == "SERVICO" ? (
                          <Button
                            variant="contained"
                            endIcon={<WhatsApp />}
                            href={`${slide.more}`}
                            target="_blank"
                            sx={{
                              mt: 0.5,
                              p: 1,
                              color: "white",
                              cursor: "pointer",
                              fontFamily: "Afacad Flux, serif",
                              textDecoration: "none",
                              //fontWeight: "bold",
                              //borderRadius: "40px 40px 40px 40px",
                              fontSize: "12px",
                              backgroundColor: "green",
                              "&:hover": {
                                color: "red",
                                //backgroundColor: 'white',
                                cursor: "pointer",
                                transition: "0.3s ease-in",
                              },
                            }}
                          >
                            Entre em contato agora mesmo!
                          </Button>
                        ) : (
                          <Button
                            sx={{
                              mt: 0.5,
                              color: "white",
                              border: "none",
                              cursor: "pointer",
                              fontFamily: "Afacad Flux, serif",
                              textDecoration: "none",
                              fontWeight: "bold",
                              borderRadius: "40px 40px 40px 40px",
                              fontSize: "12px",
                              backgroundColor: "#ED1C07",
                              "&:hover": {
                                color: "#171010",
                                //backgroundColor: 'white',
                                cursor: "pointer",
                                transition: "0.3s ease-in",
                              },
                            }}
                          >
                            Saber mais
                          </Button>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Publicidades;
