import { useEffect, useState } from "react";
import {
  Button,
  InputBase,
  Divider,
  Paper,
  TextField,
  Typography,
  Grid,
  MenuItem,
  Box,
} from "@mui/material";
import axios from "axios";
import classes from "../sellermaneger/Formb.module.css";

export function Downloadguia(props) {
  const { aplicativo, setOpenModel, primery, secudary } = props;
  const [message, setMessage] = useState("");
  const [cor, setCor] = useState("#00809b");
  const [city, setCity] = useState("");
  const [state, setStaty] = useState("");
  const [ndown, setNdown] = useState(0);

  const [download, setDownload] = useState({
    id: 0,
    empresa: "",
    insta: "",
    cell: "",
    app: "",
    data_create: "",
  });

  function downloadBlobPDF(blob, filename) {
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.href = url;
    link.download = filename || "arquivo.pdf";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  const handleChannge = (e) => {
    setDownload({ ...download, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const data = new Date();
    const formData = new FormData();
    formData.append("empresa", download.empresa);
    formData.append("insta", download.insta);
    formData.append("cell", download.cell);
    formData.append("aplicativo", aplicativo.titulo);
    formData.append("city", city);
    formData.append("provincia", state);
    formData.append("data_create", data.toLocaleString("pt-BR"));
    if (download.empresa == "" || download.insta == "" || download.cell == "") {
      setCor("red");
      setMessage("[ERRO] Algum campo esta vazio verifique!");
    } else {
      //console.log(formData);
      axios
        .post("https://api-json-red.vercel.app/downloads", {
          empresa: download.empresa,
          insta: download.insta,
          cell: download.cell,
          aplicativo: aplicativo.titulo,
          city: city,
          state: state,
          data_create: data.toLocaleString("pt-BR"),
        })
        .then(function (response) {
          if (response.status === 201) {
            setCor("#00809b");
            setMessage("Download feito com sucesso!");
            setDownload({
              empresa: "",
              insta: "",
              cell: "",
              app: "",
              data_create: data.toLocaleString("pt-BR"),
            });
            fetch(
              `https://api-json-red.vercel.app/arquivos/${aplicativo.arquivo}`
            )
              .then((response) => response.blob())
              .then((blob) => downloadBlobPDF(blob, `${aplicativo.arquivo}`))
              .catch((error) => console.error("Erro ao baixar o PDF:", error));
            setOpenModel(false);
          }
        })
        .catch(function (error) {
          setCor("#00809b");
          setMessage("Download feito com sucesso!");
          setDownload({
            empresa: "",
            insta: "",
            cell: "",
            app: "",
            data_create: data.toLocaleString("pt-BR"),
          });
          fetch(
            `https://api-json-red.vercel.app/arquivos/${aplicativo.arquivo}`
          )
            .then((response) => response.blob())
            .then((blob) => downloadBlobPDF(blob, `${aplicativo.arquivo}`))
            .catch((error) => console.error("Erro ao baixar o PDF:", error));
          setOpenModel(false);
          //setCor("red");
          //setMessage("Mensagem não enviada tenta novamente!");
          //console.log(error);
        });
    }
  };

  useEffect(() => {
    console.log(aplicativo);
    // Primeiro, obtemos o IP público do usuário
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        const ip = data.ip;
        console.log("IP Público:", ip);

        // Agora usamos o IP para obter a localização aproximada
        return fetch(
          `http://ip-api.com/json/${ip}?fields=status,country,regionName,city`
        );
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setCity(data.city);
          setStaty(data.regionName);
          //console.log(`Cidade: ${data.city}`);
          //console.log(`Estado: ${data.regionName}`);
        } else {
          console.log("Não foi possível obter a localização.");
        }
      })
      .catch((error) => console.error("Erro ao obter dados:", error));
    /*fetch("http://localhost:8000/publicidadesdb/")
    .then((response)=>response.json())
    .then((responseJson)=>{
        setNotificacao(responseJson)
    })  */
  }, []);

  return (
    <Paper elevation={0} sx={{ p: 0 }}>
      <form className={classes.formanucio} onSubmit={submitForm}>
        <Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "15px",
              fontFamily: "Afacad Flux, sans-serif",
            }}
          >
            GUIA E-BOOK COMPLETO DA APLICAÇÃO:
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.6rem",
              color: `${secudary}`,
              fontFamily: "Afacad Flux, sans-serif",
              mb: 0.5,
            }}
          >
            {aplicativo.titulo}
          </Typography>
        </Box>

        <div className="input-box">
          <input
            type="text"
            placeholder="Nome da empresa"
            name="empresa"
            onChange={handleChannge}
            value={download.empresa}
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Instagram da empresa"
            name="insta"
            onChange={handleChannge}
            value={download.insta}
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Telefone +244 932 394 333"
            name="cell"
            onChange={handleChannge}
            value={download.cell}
          />
        </div>
        <Grid align="center" sx={{ mt: 1 }}>
          <Typography
            component="p"
            sx={{
              color: `${cor}`,
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "11px",
              fontFamily: "Afacad Flux, sans-serif",
              //fontFamily: "Arvo, serif",
              "@media (max-width: 600px)": { fontSize: "8px" },
            }}
          >
            {message}
          </Typography>
        </Grid>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            //justifyContent: 'space-between',
            "@media (max-width: 375px)": {
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            },
          }}
        >
          <Button
            type="submit"
            //onClick={}
            //size="small"
            sx={{
              margin: "8px 0",
              color: "white",
              border: "none",
              cursor: "pointer",
              mt: 1,
              //height: '25px'
              minWidth: 70,

              textDecoration: "none",
              fontSize: "12px",
              fontFamily: "Afacad Flux, sans-serif",
              //fontFamily: "Arvo, serif",
              borderRadius: 1,
              backgroundColor: `${secudary}`,
              "&:hover": {
                color: `${primery}`,
                cursor: "pointer",
                transition: "0.3s ease-in",
              },
            }}
          >
            Baixar
          </Button>

          <Button
            //type="submit"
            onClick={() => setOpenModel(false)}
            size="small"
            sx={{
              margin: "8px 0",
              color: "white",
              border: "none",
              cursor: "pointer",
              mt: 1,
              //height: '25px'
              minWidth: 70,
              p: 1,
              ml: 1,
              textDecoration: "none",
              fontSize: "12px",
              fontFamily: "Afacad Flux, sans-serif",
              //fontFamily: "Arvo, serif",
              borderRadius: 1,
              backgroundColor: `${primery}`,
              "&:hover": {
                color: `${secudary}`,
                cursor: "pointer",
                transition: "0.3s ease-in",
              },
            }}
          >
            Fechar
          </Button>
        </Box>
      </form>
    </Paper>
  );
}
export default Downloadguia;
