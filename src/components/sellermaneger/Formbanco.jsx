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
import classes from "./Formb.module.css";
import axios from "axios";

function Formbanco(props) {
  //const classes = useStyles();
  const [message, setMessage] = useState("");
  const [cor, setCor] = useState("#00809b");

  const { anuncio, opcao, setAnuncio, setOpenModel, primery, secudary } = props;

  const [value, setValue] = useState(dayjs("2023-10-02"));

  const handleChannge = (e) => {
    setAnuncio({ ...anuncio, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    //console.log(anuncio)
    if (opcao === "EDITAR") {
      const formData = new FormData();
      formData.append("id", anuncio.id);
      formData.append("name", anuncio.name);
      formData.append("agencia", anuncio.agencia);
      formData.append("banco", anuncio.banco);
      formData.append("conta", anuncio.conta);
      formData.append("ibam", anuncio.ibam);

      //formData.append("conteudo", anunciar.conteudo);
      axios
        .put("http://localhost:8000/anunciodb/update", {
          id: anuncio.id,
          name: anuncio.name,
          agencia: anuncio.agencia,
          banco: anuncio.banco,
          conta: anuncio.conta,
          ibam: anuncio.ibam,
        })
        .then(function (response) {
          setAnuncio({
            id: "",
            name: "",
            servico: "",
            banco: "",
            conta: "",
            ibam: "",
          });
          setCor("#00809b");
          setMessage("Anúncio cadastrado com sucesso!");

          ///console.log(response);
        })
        .catch(function (error) {
          setCor("red");
          setMessage(error.response.data.detail);
          //console.log(error);
        });
    } else {
      if (
        anuncio.name != "" &&
        anuncio.agencia != "" &&
        anuncio.banco != "" &&
        anuncio.ibam != "" &&
        anuncio.conta != ""
      ) {
        const formData = new FormData();
        formData.append("id", anuncio.id);
        formData.append("name", anuncio.name);
        formData.append("agencia", anuncio.agencia);
        formData.append("banco", anuncio.banco);
        formData.append("conta", anuncio.conta);
        formData.append("ibam", anuncio.ibam);

        axios
          .post("http://localhost:8000/anunciodb/create", {
            id: anuncio.id,
            name: anuncio.name,
            agencia: anuncio.agencia,
            banco: anuncio.banco,
            conta: anuncio.conta,
            ibam: anuncio.ibam,
          })
          .then(function (response) {
            setCor("#00809b");
            setMessage("Anúncio cadastrado com sucesso!");
            setAnuncio({
              id: "",
              name: "",
              agencia: "",
              banco: "",
              conta: "",
              ibam: "",
            });
          })
          .catch(function (error) {
            setCor("red");
            setMessage(error.response.data.detail);
            //console.log(error);
          });
      } else {
        setCor("red");
        setMessage("Tem algum campo vazio. VERIFICA!");
      }
    }
  };

  useEffect(() => {
    //console.log(anunciar)
    if (opcao == "EDITAR") {
    }
    console.log(anuncio);
  }, []);

  return (
    <Paper elevation={0} sx={{ p: 0 }}>
      <form className={classes.formanucio} onSubmit={submitForm}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Informe o seu nome completo"
            name="name"
            onChange={handleChannge}
            value={anuncio.name}
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Informe o Banco"
            name="banco"
            onChange={handleChannge}
            value={anuncio.banco}
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Informe o agencia"
            name="agencia"
            onChange={handleChannge}
            value={anuncio.agencia}
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Informe o número  de conta"
            name="conta"
            onChange={handleChannge}
            value={anuncio.conta}
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Informe o ibam"
            name="ibam"
            onChange={handleChannge}
            value={anuncio.ibam}
          />
        </div>

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
            size="small"
            sx={{
              margin: "8px 0",
              color: "white",
              border: "none",
              cursor: "pointer",
              mt: 1,
              //height: '25px'
              minWidth: 100,

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
              ml: 1,
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
export default Formbanco;
