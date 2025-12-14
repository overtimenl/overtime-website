import { useState } from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";
import {
  DesktopWindows,
  Devices,
  SmartDisplayRounded,
} from "@mui/icons-material";
//import Marketing from '../assets/Marketing.png';

function Emprove(props) {
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
          mt: 5,
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: `${primery}`,
            //fontFamily: 'A, serif',
            "@media (max-width: 800px)": { fontSize: "1.2rem" },
          }}
        >
          Nossos números
        </Typography>
        <Typography
          sx={{
            fontSize: "2.5rem",
            fontWeight: 700,
            color: `${primery}`,
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 800px)": { fontSize: "1.8rem" },
            "@media (max-width: 400px)": { fontSize: "1.4rem" },
          }}
        >
          Clientes e Serviços
        </Typography>
        <Divider
          sx={{
            fontWeight: 700,
            mt: 2,
            fontSize: 15,
            width: 120,
            border: `1px solid #BDC1C9`,
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: `${secudary}`,
          mt: 2, mb: 1, p:1 ,
         
          "@media (max-width: 600px)": {
            bgcolor: `white`,
           },
          "@media (max-width: 800px)": {
            //bgcolor: `white`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Box 
          sx={{
            ml: 5,
            mb: 3,
            "@media (max-width: 768px)": {
              ml: "12%"
            },
            "@media (max-width: 595px)": {
              ml: "32%"
            },
            "@media (max-width: 425px)": {
              ml: "20%"
            },
            "@media (max-width: 320px)": {
              ml: "15%"
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
                    height: 200,
                    width: 200,
                    border: `1px solid rgb(255, 255, 255)`,
                    borderRadius: "5%",
                    boxShadow: `1px 1px 2px rgb(255, 255, 255)`,
                    mt: 5,
                    "@media (max-width: 600px)": { 
                      p: 1,
                      border: `1px solid ${secudary}`,
                      borderRadius: "5%",
                      boxShadow: `1px 1px 2px ${secudary}`,
                    },
                    "@media (max-width: 450px)": { 
                      p: 1,
                      border: `1px solid rgb(255, 255, 255)`,
                      borderRadius: "5%",
                      boxShadow: `1px 1px 2px ${secudary}`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: `white`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      //border: `2px solid white`,
                      height: 50,
                      width: 150,
                      //borderRadius: "50%",
                      mb: .5,
                      // "@media (max-width: 8000px)": { },
                      "@media (max-width: 450px)": { 
                        height: 35,
                        width: 120,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "5rem",
                        fontFamily: "Tiro Tamil, serif",
                        textAlign: "center",
                        "@media (max-width: 800px)": { color: `white`, },
                        "@media (max-width: 600px)": { color: `${secudary}`, },
                      }}
                    >
                      15
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      mb: .5,
                      fontSize: "1.7rem",
                      fontWeight: 400,
                      color: `white`,
                      fontFamily: "Afacad Flux, serif",                
                      "@media (max-width: 800px)": { fontSize: "1.5rem",  color: `white`, },
                      "@media (max-width: 600px)": { color: `${secudary}`, },
                    }}
                  >
                    Clientes
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
                    height: 200,
                    width: 200,
                    border: `1px solid rgb(255, 255, 255)`,
                      borderRadius: "5%",
                      boxShadow: `1px 1px 2px rgb(255, 255, 255)`,
                    "@media (max-width: 600px)": { 
                      p: 1,
                      border: `1px solid ${secudary}`,
                      borderRadius: "5%",
                      boxShadow: `1px 1px 2px ${secudary}`,
                    },
                    "@media (max-width: 450px)": { 
                      p: 1,
                      border: `1px solid rgb(255, 255, 255)`,
                      borderRadius: "5%",
                      boxShadow: `1px 1px 2px ${secudary}`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: `white`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      //border: `2px solid #fff`,
                      height: 50,
                      width: 150,
                     // borderRadius: "50%",
                      mb: .5,
                      "@media (max-width: 450px)": { 
                        height: 35,
                        width: 120,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "5rem",
                        fontFamily: "Tiro Tamil, serif",
                        textAlign: "center",                       
                        "@media (max-width: 800px)": { color: `white`, },
                        "@media (max-width: 600px)": { color: `${secudary}`, },
                      }}
                    >
                      07
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      mb: 1,
                      fontSize: "1.7rem",
                      fontWeight: 400,
                      color: `white`,
                      fontFamily: "Afacad Flux, serif",                      
                      "@media (max-width: 800px)": { fontSize: "1.5rem", color: `white` },
                      "@media (max-width: 600px)": { color: `${secudary}`, },
                    }}
                  >
                    Aplicações Desktop
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
                    height: 200,
                    width: 200,
                    border: `1px solid rgb(255, 255, 255)`,
                    borderRadius: "5%",
                    boxShadow: `1px 1px 2px rgb(255, 255, 255)`,
                    "@media (max-width: 600px)": { 
                      p: 1,
                      border: `1px solid ${secudary}`,
                      borderRadius: "5%",
                      boxShadow: `1px 1px 2px ${secudary}`,
                    },
                    "@media (max-width: 450px)": { 
                      p: 1,
                      border: `1px solid rgb(255, 255, 255)`,
                      borderRadius: "5%",
                      boxShadow: `1px 1px 2px ${secudary}`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: `white`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      //border: `2px solid #fff`,
                      height: 50,
                      width: 150,
                     // borderRadius: "50%",
                      mb: .5,
                      "@media (max-width: 450px)": { 
                        height: 35,
                        width: 120,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "5rem",
                        fontFamily: "Tiro Tamil, serif",
                        textAlign: "center",
                        "@media (max-width: 800px)": { color: `white`, },
                        "@media (max-width: 600px)": { color: `${secudary}`, },
                      }}
                    >
                      10
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      mb: 1,
                      fontSize: "2rem",
                      fontWeight: 400,
                      color: `white`,
                      fontFamily: "Afacad Flux, serif",                      
                      "@media (max-width: 800px)": { fontSize: "1.5rem", color: `white` },
                      "@media (max-width: 600px)": { color: `${secudary}`, },
                    }}
                  >
                    App Web e Mobile
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
                    height: 200,
                    width: 200,
                    border: `1px solid rgb(255, 255, 255)`,
                      borderRadius: "5%",
                      boxShadow: `1px 1px 2px rgb(255, 255, 255)`,
                      "@media (max-width: 600px)": { 
                      p: 1,
                      border: `1px solid ${secudary}`,
                      borderRadius: "5%",
                      boxShadow: `1px 1px 2px ${secudary}`,
                    },
                     "@media (max-width: 450px)": { 
                      p: 1,
                      border: `1px solid rgb(255, 255, 255)`,
                      borderRadius: "5%",
                      boxShadow: `1px 1px 2px ${secudary}`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: `white`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      //border: `2px solid #fff`,
                      height: 50,
                      width: 150,
                      //borderRadius: "50%",
                      mb: .5,
                      "@media (max-width: 450px)": { 
                        height: 35,
                        width: 120,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "5rem",
                        fontFamily: "Tiro Tamil, serif",
                        textAlign: "center",                        
                        "@media (max-width: 800px)": { color: `white`, },
                        "@media (max-width: 600px)": { color: `${secudary}`, },
                      }}
                    >
                      10
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      mb: 1,
                      fontSize: "1.7rem",
                      fontWeight: 400,
                      color: `white`,
                      fontFamily: "Afacad Flux, serif",                     
                      "@media (max-width: 800px)": { fontSize: "1.3rem", color: `white` },
                      "@media (max-width: 600px)": { color: `${secudary}`, },
                    }}
                  >
                    Produção Multimidia
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Box>
        
      </Box>
    </>
  );
}
export default Emprove;
