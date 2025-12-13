import { useCallback, useEffect, useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Typography } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import parse from "html-react-parser";
import classes from "./Publicidades.module.css";

const slids = [
  {
    id: 1,
    title: "WEB SITE",
    subtitle: "PROMOÇÃO, COMEÇA 2026 GANHANDO MAIS...",
    tipo: "SERVICO",
    descricao: `
        <h3>Site personalizado com benefícios únicos!</h2>

        <p> Hospedagem e domínio <strong>GRÁTIS</strong> no primeiro ano.</p>
        <p> 6 meses de assistência técnica e consultoria em Marketing Digital.</p>
        <p><strong> Apenas 259 mil kz, pagamento em 4 parcelas suaves,</strong> e a última só é paga quando 
        seu site estiver pronto e funcionando! </p>
        
        <h5>Invista hoje e faça seu negócio crescer online!"</h5>
      `,
    image: "88bbc8a7-abc7-4b23-b706-991def900521.jpg",
    more: "https://api.whatsapp.com/message/REGZSZIRC3CGI1?autoload=1&app_absent=0",
  },
  {
    id: 2,
    title: "MARKETING DIGITAL",
    subtitle: "Cuidamos Da Sua Presença Digital",
    tipo: "SERVICO",
    descricao:
      `<h3>🚀 Transforme engajamento em vendas reais!</h3>
      <p>📱 Otimize suas redes sociais com <strong>mais interações, conteúdos estratégicos</strong> e presença profissional.</p>
      <p>🎯 Utilize <strong>anúncios online eficientes</strong>, criados para alcançar o público certo e gerar conversões.</p>
      <p><strong>Quer crescer de verdade no digital?</strong> Nós ajudamos o seu negócio a vender mais.</p>
      `,
    image: "Marketing.png",
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
];

function Publicidades() {
  //const classes = useStyles();
  const [slides, setSlides] = useState([]);
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

  useEffect(() => {
    setCurrentSlide(0);
    //https://api-json-red.vercel.app
    fetch("https://api-json-red.vercel.app/publicidadesdb")
      .then((response) => response.json())
      .then((responseJson) => {
        setSlides(responseJson);
      });
  }, []);

  /*
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
                      src={`https://api-json-red.vercel.app/arquivos/${slide.filename}`}
                      alt="Slide"
                    />
                    <div className={classes.sombra}>
                      <div className={classes.content}>
                        <h2>{slide.title}</h2>
                        <h4>{slide.subtitle}</h4>
                        <div>{parse(slide.descricao)}</div>
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
                              "@media (max-width: 320px)": { fontSize: "10px" },
                            }}
                          >
                            Entre em contato agora mesmo!
                          </Button>
                        ) : (
                          <Button
                            href={`${slide.more}`}
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
                              "@media (max-width: 320px)": { fontSize: "10px" },
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
