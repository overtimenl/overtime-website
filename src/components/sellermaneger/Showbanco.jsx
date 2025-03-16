import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useState } from "react";

function Showbanco(props) {
  const {
    setValue,
    anuncio,
    setAnuncios,
    opcao,
    setOpenModel,
    primery,
    secudary,
  } = props;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "15px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "10px" },
          }}
        >
          {anuncio.name}
        </Typography>
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "15px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "10px" },
          }}
        >
          {anuncio.banco}
        </Typography>
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "15px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "10px" },
          }}
        >
          {anuncio.agencia}
        </Typography>
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "15px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "10px" },
          }}
        >
          {anuncio.conta}
        </Typography>
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "15px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "10px" },
          }}
        >
          {anuncio.ibam}
        </Typography>
        <Button
          type="submit"
          onClick={() => setValue(0)}
          size="small"
          sx={{
            margin: "8px 0",
            color: "white",
            border: "none",
            cursor: "pointer",
            mt: 1,
            //height: '25px'
            //minWidth: 100,

            textDecoration: "none",
            fontSize: "12px",
            fontFamily: "Afacad Flux, serif",
            borderRadius: "5px 5px 5px 5px",
            backgroundColor: `${secudary}`,
            "&:hover": {
              color: `${primery}`,
              cursor: "pointer",
              transition: "0.3s ease-in",
            },
          }}
          fullWidth
        >
          {opcao}
        </Button>
      </Box>
    </>
  );
}
export default Showbanco;
