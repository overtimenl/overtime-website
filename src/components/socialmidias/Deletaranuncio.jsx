import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

function Deletaranuncio({
  anuncio,
  setAnuncios,
  setOpenModel,
  primery,
  secudary,
  setTotal,
  opcao,
}) {
  const [message, setMessage] = useState("");
  const [cor, setCor] = useState("#00809b");
  const [acao, setAcao] = useState("APAGAR");
  const [status, setStatus] = useState(false);
  const [toDo, setToDo] = useState(
    `Tem certeza que dezeja exluir o Anúncio ${anuncio.servico} ?`
  );

  const handleDelete = (e) => {
    e.preventDefault();
    if (opcao == "APAGAR") {
      axios
        .delete(`https://api-json-red.vercel.app/anunciosdb/${anuncio.id}`)
        .then((response) => {
          setCor("#00809b");
          setMessage(response.data.message);
          setOpenModel(false);
          //console.log(`Deleted post with ID ${anuncio.name}`);
        })
        .catch((error) => {
          console.error(error.data.message);
        });
    } else {
      //let status = false;
      axios
        .patch(`https://api-json-red.vercel.app/anunciosdb/${anuncio.id}`, {
          id: anuncio.id,
          empresa: anuncio.empresa,
          servico: anuncio.servico,
          meio: anuncio.meio,
          valor: anuncio.valor,
          segment: anuncio.segment,
          objetivo: anuncio.objetivo,
          conversao: anuncio.conversao,
          descricao: anuncio.descricao,
          status: status,
          dataIn: anuncio.dataIn,
        })
        .then(function (response) {
          setCor("#00809b");
          setMessage("Anúncio atualizado com sucesso!");
          setOpenModel(false);
          ///console.log(response);
        })
        .catch(function (error) {
          setCor("red");
          setMessage(error.response.data.detail);
          //console.log(error);
        });
    }

    let tot = 0;
    fetch("https://api-json-red.vercel.app/anunciosdb")
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        responseJson.forEach((anuncio) => {
          tot += parseFloat(anuncio.valor);
          //console.log(tot);
        });
        setTotal(
          tot //.toLocaleString("en-US", { style: "currency", currency: "USD" })
        );
        setAnuncios(responseJson);
      });
  };

  useEffect(() => {
    if (opcao != "APAGAR") {
      if (anuncio.status == true) {
        setToDo(
          `Tem certeza que dezeja desativar o Anúncio ${anuncio.servico} ?`
        );
        setAcao("Desativar");
      } else {
        setToDo(`Tem certeza que dezeja ativar o Anúncio ${anuncio.servico} ?`);
        setStatus(true);
        setAcao("Ativar");
      }
    }
    //console.log(anuncio);
  }, []);

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
            {toDo}
          </Typography>
          <Typography
            sx={{
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "10px",
              color: "red",
              fontFamily: "Arvo, serif",
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
            {acao}
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

export default Deletaranuncio;
