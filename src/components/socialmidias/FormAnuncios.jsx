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
    anunciar,
    opcao,
    setAnuncios,
    setOpenModel,
    primery,
    secudary,
    setTotal,
  } = props;
  let today = new Date().toLocaleDateString();
  const [value, setValue] = useState(dayjs("2023-10-02"));

  const [anuncio, setAnuncio] = useState({
    id: 0,
    empresa: "",
    servico: "",
    meio: "",
    valor: 0,
    segment: "",
    objetivo: "",
    conversao: "",
    descricao: "",
    status: true,
    dataIn: today,
  });

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
      formData.append("servico", anuncio.servico);
      formData.append("meio", anuncio.meio);
      formData.append("vcampanha", anuncio.vcampanha);
      formData.append("duracao", anuncio.duracao);
      formData.append("conversao", anuncio.conversao);
      formData.append("dataFim", anuncio.dataFim);
      //formData.append("conteudo", anunciar.conteudo);
      axios
        .patch("https://api-json-red.vercel.app/anunciosdb/" + anunciar.id, {
          empresa: anunciar.empresa,
          servico: anunciar.servico,
          meio: anunciar.meio,
          valor: anunciar.valor,
          segment: anunciar.segment,
          objetivo: anunciar.objetivo,
          conversao: anunciar.conversao,
          descricao: anunciar.descricao,
          status: anunciar.status,
          dataIn: anunciar.dataIn,
        })
        .then(function (response) {
          setAnuncio({
            id: 0,
            empresa: "",
            servico: "",
            meio: "",
            valor: 0,
            segment: "",
            objetivo: "",
            conversao: "",
            descricao: "",
            status: true,
            dataIn: today,
          });
          setCor("#00809b");
          setMessage("Anúncio atualizado com sucesso!");

          ///console.log(response);
        })
        .catch(function (error) {
          setAnuncio({
            id: 0,
            empresa: "",
            servico: "",
            meio: "",
            valor: 0,
            segment: "",
            objetivo: "",
            conversao: "",
            descricao: "",
            status: true,
            dataIn: today,
          });
          setCor("#00809b");
          setMessage("Anúncio atualizado com sucesso!");
          //setCor("red");
          //setMessage(error.response.data.detail);
          //console.log(error);
        });

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
      //setOpenModel(false)
    } else {
      if (
        (anuncio.empresa != "" &&
          anuncio.servico != "" &&
          anuncio.meio != "" &&
          anuncio.segment != "" &&
          anuncio.valor > 0 &&
          anuncio.descricao != "") ||
        anuncio.objetivo != ""
      ) {
        //console.log(anuncio);
        axios
          .post("https://api-json-red.vercel.app/anunciosdb", {
            empresa: anuncio.empresa,
            servico: anuncio.servico,
            meio: anuncio.meio,
            valor: anuncio.valor,
            segment: anuncio.segment,
            objetivo: anuncio.objetivo,
            conversao: anuncio.conversao,
            descricao: anuncio.descricao,
            status: anuncio.status,
            dataIn: anuncio.dataIn,
          })
          .then(function (response) {
            setCor("#00809b");
            setMessage("Anúncio cadastrado com sucesso!");
            setAnuncio({
              id: 0,
              empresa: "",
              servico: "",
              meio: "",
              valor: 0,
              segment: "",
              objetivo: "",
              conversao: "",
              descricao: "",
              status: true,
              dataIn: today,
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
    console.log(anunciar);
    if (opcao == "EDITAR") {
      setAnuncio({
        id: anunciar.id,
        empresa: anunciar.empresa,
        servico: anunciar.servico,
        meio: anunciar.meio,
        valor: anunciar.valor,
        segment: anunciar.segment,
        objetivo: anunciar.objetivo,
        conversao: anunciar.conversao,
        descricao: anunciar.descricao,
        status: anunciar.status,
        dataIn: anunciar.dataIn,
      });
    }
    console.log(anuncio);
  }, []);

  return (
    <Paper elevation={0} sx={{ p: 1 }}>
      <form className={classes.formanucio} onSubmit={submitForm}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Informe o nome da empres"
            name="empresa"
            onChange={handleChannge}
            value={anuncio.empresa}
          />
        </div>

        <div className="input-box">
          <select
            id="pet-select"
            name="meio"
            onChange={handleChannge}
            value={anuncio.meio}
          >
            <option value="">Selecione o meio</option>
            <option value="Meta Ads">Meta Ads</option>
            <option value="Google Ads">Google Ads</option>
            <option value="Podcasts e Vídeos">Podcasts e Vídeos</option>
            <option value="Native Advertising">Native Advertising</option>
            <option value="Marketplaces">Marketplaces</option>
            <option value="Aplicativos Móveis">Aplicativos Móveis</option>
            <option value="Influenciadores">Artistas</option>
            <option value="Influenciadores">Influenciadores</option>
            <option value="Influenciadores">Radios e TV</option>
            <option value="Influenciadores">Outros</option>
          </select>
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Informe o servico a anunciar"
            name="servico"
            onChange={handleChannge}
            value={anuncio.servico}
          />
        </div>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="space-between" spacing={2}>
              <Grid item xs={12} sm={6}>
                <div className="input-box">
                  <input
                    type="number"
                    placeholder="Custo gasto na campanha"
                    name="valor"
                    min={0}
                    onChange={handleChannge}
                    value={anuncio.valor == 0 ? "" : anuncio.valor}
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <input
                  type="text"
                  placeholder="Informe o publico do anuncio"
                  name="segment"
                  onChange={handleChannge}
                  value={anuncio.segment}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <input
                  type="text"
                  placeholder="Informe a conversão"
                  name="conversao"
                  onChange={handleChannge}
                  value={anuncio.conversao}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  type="text"
                  placeholder="Objetivo do anuncios"
                  name="objetivo"
                  onChange={handleChannge}
                  value={anuncio.objetivo}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className="input-box message-box">
          <textarea
            cols={20}
            rows={3}
            name="descricao"
            placeholder="Descreve a situação da campanha de anúncio"
            onChange={handleChannge}
          >
            {anunciar.descricao}
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
              borderRadius: 20,
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
              borderRadius: 20,
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
