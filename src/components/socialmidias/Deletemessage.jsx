import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function Deletemessage({
  mensage,
  setMensage,
  setOpenModel,
  setAnuncios,
  primery,
  secudary,
}) {
  const [message, setMessage] = useState("");
  const [cor, setCor] = useState("#00809b");

  const handleDelete = (e) => {
    e.preventDefault();

    axios
      .delete(`https://api-json-red.vercel.app/testemunho/${mensage.id}`)
      .then((response) => {
        //setCor("#00809b");
        //setMessage("Mensagem excluido com sucesso!");
        //setOpenModel(false);
        //console.log(`Deleted post with ID ${anuncio.name}`);
      })
      .catch((error) => {
        setCor("#00809b");
        setMessage("Mensagem excluido com sucesso!");
        setOpenModel(false);
        //console.error(error);
      });
    fetch("https://api-json-red.vercel.app/testemunho")
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson)
        setAnuncios(responseJson);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper elevation={0}>
        <Box sx={{ mb: 2 }}>
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
            {`Tem certeza que dezeja exluir o testemunho do Cliente ${mensage.name} ?`}
          </Typography>
          <Typography
            sx={{
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "10px",
              color: "red",
              fontFamily: "Afacad Flux, serif",
              "@media (max-width: 600px)": { fontSize: "8px" },
            }}
          >
            {message}
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ mt: 0.2 }}>
          <Button
            type="submit"
            sx={{
              m: "2px 0",
              color: "white",
              border: "none",
              cursor: "pointer",
              textDecoration: "none",
              fontSize: "12px",
              fontFamily: "Afacad Flux, serif",
              backgroundColor: `${secudary}`,
              "&:hover": {
                color: "#013039",
                cursor: "pointer",
                transition: "0.3s ease-in",
              },
            }}
            onClick={handleDelete}
          >
            {"EXCLUIR"}
          </Button>
          <Button
            onClick={() => setOpenModel(false)}
            type="submit"
            sx={{
              ml: 0.5,
              color: "black",
              fontFamily: "Afacad Flux, serif",
              fontSize: "12px",
              "&:hover": {
                color: `${primery}`,
                transition: "all 400ms",
              },
            }}
          >
            SAIR
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Deletemessage;
