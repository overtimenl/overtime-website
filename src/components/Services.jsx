import { useState } from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";
import {
  DesktopWindows,
  Devices,
  SmartDisplayRounded,
} from "@mui/icons-material";
import Marketing from "../assets/Marketing.png";

function Services(props) {
  const { primery, secudary } = props;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          color: `${primery}`,
          textAlign: "center",
          mt: 5,
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: "1rem",
            fontWeight: 700,
            "@media (max-width: 800px)": { fontSize: ".8rem" },
            "@media (max-width: 320px)": { fontSize: ".7rem" },
          }}
        >
          O melhor para o seu negócio
        </Typography>
        <Typography
          sx={{
            fontSize: "2.5rem",
            fontWeight: 700,
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 800px)": { fontSize: "2rem" },
            "@media (max-width: 400px)": { fontSize: "1.8rem" },
            "@media (max-width: 320px)": { fontSize: "1.4rem" },
          }}
        >
          Serviços que oferecemos
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
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
          "@media (max-width: 800px)": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="space-between" spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 5,
                  }}
                >
                  <Box
                    sx={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: `${secudary}`,
                      height: 80,
                      width: 80,
                      borderRadius: "50%",
                      mb: 4,
                    }}
                  >
                    <DesktopWindows sx={{ fontSize: "40px" }} />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "2rem",
                      //fontWeight: 700,
                      fontFamily: "Afacad Flux, serif",
                      "@media (max-width: 800px)": { fontSize: "1.8rem" },
                    }}
                  >
                    Aplicações Desktop
                  </Typography>
                  <Divider
                    sx={{
                      fontWeight: 700,
                      mt: 2,
                      mb: 2,
                      fontSize: 15,
                      width: 250,
                      border: `1px solid #BDC1C9`,
                      "@media (max-width: 800px)": {
                        width: 290,
                      },
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: ".8rem",
                      //fontWeight: 700,
                      fontFamily: "Arvo, serif",
                      textAlign: "center",
                      width: 225,
                    }}
                  >
                    Nosso sistema de gestão desktop é feito para o seu negócio,
                    ajustado às suas necessidades para simplificar processos e
                    aumentar a produtividade.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 5,
                  }}
                >
                  <Box
                    sx={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: `${secudary}`,
                      height: 80,
                      width: 80,
                      borderRadius: "50%",
                      mb: 4,
                    }}
                  >
                    <Devices sx={{ fontSize: "40px" }} />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "2rem",
                      //fontWeight: 700,
                      fontFamily: "Afacad Flux, serif",
                      "@media (max-width: 800px)": { fontSize: "1.8rem" },
                    }}
                  >
                    App Web e Mobile
                  </Typography>
                  <Divider
                    sx={{
                      fontWeight: 700,
                      mt: 2,
                      mb: 2,
                      fontSize: 15,
                      width: 250,
                      border: `1px solid #BDC1C9`,
                      "@media (max-width: 800px)": {
                        width: 290,
                      },
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: ".8rem",
                      //fontWeight: 700,
                      fontFamily: "Arvo, serif",
                      textAlign: "center",
                      width: 225,
                    }}
                  >
                    Criamos sites, aplicações web e mobile, para qualquer tipo
                    de negócio, ajudamos na hospedagem e na manutenção das,
                    aplicações criadas.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 5,
                  }}
                >
                  <Box
                    sx={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: `${secudary}`,
                      height: 80,
                      width: 80,
                      borderRadius: "50%",
                      mb: 4,
                    }}
                  >
                    <img width={45} height={45} src={Marketing} />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "2rem",
                      //fontWeight: 700,
                      fontFamily: "Afacad Flux, serif",
                      "@media (max-width: 800px)": { fontSize: "1.8rem" },
                    }}
                  >
                    Marketing Digital
                  </Typography>
                  <Divider
                    sx={{
                      fontWeight: 700,
                      mt: 2,
                      mb: 2,
                      fontSize: 15,
                      width: 250,
                      border: `1px solid #BDC1C9`,
                      "@media (max-width: 800px)": {
                        width: 290,
                      },
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: ".8rem",
                      //fontWeight: 700,
                      fontFamily: "Arvo, serif",
                      textAlign: "center",
                      width: 225,
                    }}
                  >
                    Cuidamos da presenca online do seu negócio, gerenciando as
                    suas redes sociais com stores reels e postes e anuncios
                    alcançando o maior número de clientes ou consumidores.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 5,
                  }}
                >
                  <Box
                    sx={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: `${secudary}`,
                      height: 80,
                      width: 80,
                      borderRadius: "50%",
                      mb: 4,
                    }}
                  >
                    <SmartDisplayRounded sx={{ fontSize: "40px" }} />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "2rem",
                      //fontWeight: 700,
                      fontFamily: "Afacad Flux, serif",
                      "@media (max-width: 800px)": { fontSize: "1.8rem" },
                    }}
                  >
                    Produção Multimidia
                  </Typography>
                  <Divider
                    sx={{
                      fontWeight: 700,
                      mt: 2,
                      mb: 2,
                      fontSize: 15,
                      width: 250,
                      border: `1px solid #BDC1C9`,
                      "@media (max-width: 800px)": {
                        width: 290,
                      },
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: ".8rem",
                      //fontWeight: 700,
                      fontFamily: "Arvo, serif",
                      textAlign: "center",
                      width: 225,
                    }}
                  >
                    Produzimos conteúdos para diversas midias, fazemos design´s
                    graficos estaticos e dinamicos, produzimos para midias
                    digitais e convencionas como banner, e pafletos etc...
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Services;
