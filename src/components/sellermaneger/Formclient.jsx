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

function Formclient(props) {
  const [message, setMessage] = useState("");
  const [cor, setCor] = useState("#00809b");

  const { client, opcao, setClient, setOpenModel, primery, secudary } = props;

  const [value, setValue] = useState(dayjs("2023-10-02"));

  const handleChannge = (e) => {
    setAnuncio({ ...anuncio, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    //console.log(anuncio)
    if (opcao === "EDITAR") {
      const formData = new FormData();
      formData.append("id", client.id);
      formData.append("name", client.name);
      formData.append("tipo", client.tipo);
      formData.append("phone", client.phone);
      formData.append("endereco", client.endereco);
      formData.append("link_insta", client.link_insta);
      formData.append("link_fb", client.link_fb);
      //formData.append("dataFim", anuncio.dataFim);
      //formData.append("conteudo", anunciar.conteudo);
      axios
        .put("http://localhost:8000/anunciodb/update", {
          id: client.id,
          name: client.name,
          tipo: client.tipo,
          phone: client.phone,
          endereco: client.endereco,
          link_insta: client.link_insta,
          link_fb: client.link_fb,
          link_ld: client.link_ld,
        })
        .then(function (response) {
          setClient({
            id: "",
            name: "",
            tipo: "",
            phone: "",
            endereco: "",
            link_insta: "",
            link_fb: "",
            link_ld: "",
          });
          setCor("#00809b");
          setMessage("Cliente cadastrado com sucesso!");

          ///console.log(response);
        })
        .catch(function (error) {
          setCor("red");
          setMessage(error.response.data.detail);
          //console.log(error);
        });
    } else {
      if (
        client.name != "" &&
        client.tipo != "" &&
        client.phone != "" &&
        client.endereco != "" &&
        client.link_insta != ""
      ) {
        const formData = new FormData();
        formData.append("id", client.id);
        formData.append("name", client.name);
        formData.append("tipo", client.tipo);
        formData.append("phone", client.phone);
        formData.append("endereco", client.endereco);
        formData.append("link_insta", client.link_insta);
        formData.append("link_fb", client.link_fb);
        formData.append("link_ld", client.link_ld);
        //formData.append("dataFim", client.dataFim);
        //console.log(JSON.stringify(anuncio))
        //console.log(anuncio)
        //console.log(formData)

        axios
          .post("http://localhost:8000/anunciodb/create", {
            id: client.id,
            name: client.name,
            tipo: client.tipo,
            phone: client.phone,
            endereco: client.endereco,
            link_insta: client.link_insta,
            link_fb: client.link_fb,
            link_ld: client.link_ld,
          })
          .then(function (response) {
            setCor("#00809b");
            setMessage("Cliente cadastrado com sucesso!");
            setClient({
              id: "",
              name: "",
              tipo: "",
              phone: "",
              endereco: "",
              link_insta: "",
              link_fb: "",
              link_ld: "",
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
    //console.log(anuncio)
  }, []);

  return (
    <Paper elevation={0} sx={{ p: 0 }}>
      <form className={classes.formanucio} onSubmit={submitForm}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Informe o nome"
            name="name"
            onChange={handleChannge}
            value={client.name}
          />
        </div>
        <div className="input-box">
          <select
            id="pet-select"
            name="app"
            onChange={handleChannge}
            value={client.tipo}
          >
            <option value="Individual">Individual</option>
            <option value="Jurídica">Jurídica</option>
          </select>
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Informe o telefone"
            name="phone"
            onChange={handleChannge}
            value={client.phone}
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Informe o endereço"
            name="conta"
            onChange={handleChannge}
            value={client.endereco}
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Informe o INSTAGRAM"
            name="link_insta"
            onChange={handleChannge}
            value={client.link_insta}
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Informe o FACEBOOK"
            name="link_fb"
            onChange={handleChannge}
            value={client.link_fb}
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Informe o LINK DIN"
            name="link_ld"
            onChange={handleChannge}
            value={client.link_ld}
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
export default Formclient;
