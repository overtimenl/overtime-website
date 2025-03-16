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
import { useEffect, useState } from "react";
import MuiDateRangePicker from "../MuiDateRangePicker";
import dayjs from "dayjs";
import { styled, useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import classes from "./Form.module.css";
import axios from "axios";

function Formanuncio(props) {
  //const classes = useStyles();
  const [message, setMessage] = useState("");
  const [cor, setCor] = useState("#00809b");

  const {
    mensage,
    opcao,
    setMensage,
    setAnuncios,
    setOpenModel,
    primery,
    secudary,
  } = props;

  const [value, setValue] = useState(dayjs("2023-10-02"));
  let today = new Date().toLocaleDateString();
  const [mensager, setMensager] = useState({
    id: "",
    work: "",
    name: "",
    conteudo: "",
    data: "",
    more: "",
  });

  const handleChannge = (e) => {
    setMensage({ ...mensage, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    //console.log(anuncio)
    if (
      mensage.work != "" &&
      mensage.name != "" &&
      mensage.conteudo != "" &&
      mensage.more != ""
    ) {
      if (opcao === "EDITAR") {
        axios
          .put("https://api-json-red.vercel.app/testemunho" + mensage.id, {
            work: mensage.work,
            name: mensage.name,
            conteudo: mensage.conteudo,
            data: mensage.data,
            more: mensage.more,
          })
          .then(function (response) {
            setMensage({
              id: "",
              work: "",
              name: "",
              conteudo: "",
              data: "",
              more: "",
            });
            setCor("#00809b");
            setMessage("Mensagem editada com sucesso!");
            setOpenModel(false);

            ///console.log(response);
          })
          .catch(function (error) {
            setMensage({
              id: "",
              work: "",
              name: "",
              conteudo: "",
              data: "",
              more: "",
            });
            setCor("#00809b");
            setMessage("Mensagem editada com sucesso!");
            setOpenModel(false);
            //setCor("red");
            //setMessage(error.response.data.message);
            //setOpenModel(false);
            //console.log(error);
          });
        fetch("https://api-json-red.vercel.app/testemunho")
          .then((response) => response.json())
          .then((responseJson) => {
            //console.log(responseJson)
            setAnuncios(responseJson);
          });
      } else {
        axios
          .post("https://api-json-red.vercel.app/testemunho", {
            work: mensage.work,
            name: mensage.name,
            conteudo: mensage.conteudo,
            data_create: today,
            more: mensage.more,
          })
          .then(function (response) {
            setCor("#00809b");
            setMessage("Mensagem cadastrado com sucesso!");
            setMensage({
              id: "",
              work: "",
              name: "",
              conteudo: "",
              data: "",
              more: "",
            });
          })
          .catch(function (error) {
            setCor("red");
            setMessage(error.response.data.detail);
            //console.log(error);
          });
        fetch("https://api-json-red.vercel.app/testemunho")
          .then((response) => response.json())
          .then((responseJson) => {
            //console.log(responseJson)
            setAnuncios(responseJson);
          });
      }
    } else {
      setCor("red");
      setMessage("Tem algum campo vazio. VERIFICA!");
    }
  };

  useEffect(() => {
    //console.log(anunciar)
    if (opcao == "EDITAR") {
    }
    //console.log(anuncio)
  }, []);

  return (
    <Paper elevation={0} sx={{ p: 1 }}>
      <form className={classes.formanucio} onSubmit={submitForm}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Informe o nome do cliente"
            name="name"
            onChange={handleChannge}
            value={mensage.name}
          />
        </div>
        <div className="input-box">
          <select
            id="pet-select"
            name="work"
            onChange={handleChannge}
            value={mensage.work}
          >
            <option value="">Selecione o servico</option>
            <option value="APP Desktop">Aplicações Desktop</option>
            <option value="Website">Website</option>
            <option value="App Web e Mobile">App Web e Mobile</option>
            <option value="Marketing Digital">Marketing Digital</option>
            <option value="Produção Multimidia">Produção Multimidia</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div>
          <input
            className={classes.input_box}
            type="text"
            placeholder="Link contact"
            name="more"
            onChange={handleChannge}
            value={mensage.more}
          />
        </div>

        <div className="input-box message-box">
          <textarea
            cols={20}
            rows={10}
            name="conteudo"
            placeholder="Insere a descrição"
            onChange={handleChannge}
          >
            {mensage.conteudo}
          </textarea>
        </div>
        <Typography
          component="p"
          sx={{
            color: `${cor}`,
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "10px",
            fontFamily: "Roboto, sans-serif",
            "@media (max-width: 600px)": { fontSize: "8px" },
          }}
        >
          {message}
        </Typography>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
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
            size="small"
            sx={{
              margin: "8px 0",
              color: "white",
              border: "none",
              cursor: "pointer",
              mt: 1,
              //height: '25px'
              minWidth: 100,
              p: 1,
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
          >
            {opcao}
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
              minWidth: 100,
              p: 1,
              textDecoration: "none",
              fontSize: "12px",
              fontFamily: "Afacad Flux, serif",
              borderRadius: "5px 5px 5px 5px",
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
export default Formanuncio;
