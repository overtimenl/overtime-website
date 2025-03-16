import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function Deleteservice({
  servico,
  setAnuncios,
  setOpenModel,
  primery,
  secudary,
}) {
  const [message, setMessage] = useState("");
  const [cor, setCor] = useState("#00809b");

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`https://api-json-red.vercel.app/aplicativos/${servico.id}`)
      .then((response) => {
        //setCor("#00809b");
        //setMessage(response.data.message);
        //setOpenModel(false);
        //console.log(`Deleted post with ID ${anuncio.name}`);
      })
      .catch((error) => {
        setCor("#00809b");
        setMessage("Serviço excluido!");
        setOpenModel(false);
        //console.error(error.data.message);
      });
    fetch("https://api-json-red.vercel.app/aplicativos")
      .then((response) => response.json())
      .then((responseJson) => {
        setAnuncios(responseJson);
      });
    /*axios({
               method: 'GET',
               url: 'http://localhost:8080/criptoapp/src/api/anuncios/delete.php',
               params: {delete: anuncio.id},
               config: { headers: {'Content-Type': 'multipart/form-data' }}
          })      
          .then((response)=> {
              //handle success
              //console.log(response.data.Status)
              if(response.status === 200){
                setCor('#00809b')
                setMessage('Anúncio excluido com sucesso!');
                setOpenModel(false);
              }else{
                setCor('red')
                setMessage(response.data);
                //setOpenModel(false);
              }
          }).catch(function (response) {
          //console.log(response)
          //alert(response);
        });*/
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
            {`Tem certeza que dezeja exluir o Anúncio ${servico.name} ?`}
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

export default Deleteservice;
