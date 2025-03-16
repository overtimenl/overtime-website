import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Campaign } from "@mui/icons-material";

function AnunciosAtivos(props) {
  const { primery, secudary } = props;
  const [total, setTotal] = useState(0);

  const currentDate = new Date();
  const nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + 1);

  const getMes = (mes) => {
    let m = mes + 1;
    if (m > 9) {
      return `${m}`;
    } else {
      return `0${m}`;
    }
  };

  let data_in = `${nextDate.getFullYear()}-${getMes(
    nextDate.getMonth()
  )}-${nextDate.getDate()}`;

  useEffect(() => {
    let tot = 0;
    let ativos = [];
    fetch("https://api-json-red.vercel.app/anunciosdb")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        responseJson.forEach((anuncio) => {
          if (anuncio.status == true) {
            ativos.push(anuncio);
          }
        });
        //console.log(ativos)
        //setTotal(tot.toLocaleString("en-US", {style:"currency", currency:"USD"}));
        setTotal(ativos.length);
      });
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
      }}
    >
      <Typography
        variant="caption"
        sx={{
          fontWeight: "bold",
          fontFamily: "Afacad Flux, serif",
          fontSize: "1.2rem",
          "@media (max-width: 400px)": { fontSize: "1rem", mb: -2 },
        }}
      >
        ANÚNCIOS ATIVOS
      </Typography>

      <Box
        sx={{
          mt: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Campaign
          sx={{
            fontSize: "55px",
            color: `${secudary}`,
            "@media (max-width: 400px)": { fontSize: "40px", mt: 2 },
          }}
        />
        <Typography
          sx={{
            fontFamily: "Afacad Flux, serif",
            mt: 3,
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          {"Qtd:"}
        </Typography>
        <Typography
          component={"h1"}
          sx={{
            mb: -2.6,
            ml: 0.5,
            mt: -0.8,
            textAlign: "center",
            color: "black",
            fontSize: "3.5rem",
            fontFamily: "Tiro Tamil, serif",
            "@media (max-width: 800px)": { fontSize: "3rem", mt: 0.1 },
            "@media (max-width: 320px)": { fontSize: "1rem", mt: 1.4 },
          }}
        >
          {total}
        </Typography>
      </Box>
    </Box>
  );
}
export default AnunciosAtivos;
