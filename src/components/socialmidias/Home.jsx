import {
  Grid,
  Paper,
  Button,
  Box,
  IconButton,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import AnunciosAtivos from "./AnunciosAtivos";
import FeedActive from "./FeedActive";
import { makeStyles } from "@mui/styles";
import Model from "../Model";
import {
  AccountBalance,
  Delete,
  Edit,
  ToggleOn,
  ToggleOff,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import FormAnuncios from "./FormAnuncios";
import Deletarnuncios from "./Deletaranuncio";
import Boxmessage from "../Boxmessage";

function createData(
  id,
  empresa,
  servico,
  meio,
  valor,
  segment,
  objetivo,
  conversao,
  descricao,
  status,
  dataIn
) {
  return {
    id,
    empresa,
    servico,
    meio,
    valor,
    segment,
    objetivo,
    conversao,
    descricao,
    status,
    dataIn,
  };
}

const rows = [
  createData(
    1,
    "Overtime&NL",
    "Venda De APP Desktop",
    "Meta Ads",
    500,
    "Empresarios Farmácia",
    "Criação de Publico",
    "1.500 pessoas",
    "Temos um total de 1.500, juntando os publicos de (75 e 95)v de 15, 30, 45, 60 e 90 dias",
    true,
    "2024-01-10"
  ),
  createData(
    2,
    "Overtime&NL",
    "Estrutura De Marketing",
    "Google Ads",
    500,
    "Empresarios geral",
    "Venda de serviço",
    "10 levantadas de mão",
    "Temos um total de 10 levantadas de mão, que resultou em 5 vendas",
    true,
    "2024-01-10"
  ),
  createData(
    3,
    "Overtime&NL",
    "Venda De APP Desktop",
    "Meta Ads",
    500,
    "Empresarios Lojas",
    "Criação de Publico",
    "1.800 pessoas",
    "Temos um total de 1.800, juntando os publicos de (75 e 95)v de 15, 30, 45, 60 e 90 dias",
    true,
    "2024-01-10"
  ),
  createData(
    4,
    "Overtime&NL",
    "Lançamento de Produtos",
    "Meta Ads",
    500,
    "Pessoas dos 16 a 45",
    "Criação de Publico",
    "1.500 pessoas",
    "Temos um total de 1.500, juntando os publicos de (75 e 95)v de 15, 30, 45, 60 e 90 dias",
    true,
    "2024-01-10"
  ),
  createData(
    5,
    "Overtime&NL",
    "Visitas ao ecommerce",
    "Meta Ads",
    500,
    "Pessoas dos 16 a 45",
    "Visitas ao site",
    "300 visitas",
    "Temos um total de 300 visitas, que 50 delas se transformaram em compra",
    true,
    "2024-01-10"
  ),
];

const useStyles = makeStyles({
  root: {
    fontFamily: "Afacad Flux, serif",
    "& .MuiTableCell-head": {
      color: "white",
      backgroundColor: "#ED1C07",
    },
  },
});

function Home(props) {
  const { primery, secudary } = props;

  const classes = useStyles();

  const [anuncios, setAnuncios] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openModel, setOpenModel] = useState(false);
  const [opcao, setOpcao] = useState("");
  const [title, setTitle] = useState("");
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

  //const d1 = Date.parse(data_in);
  //const d2 = Date.parse("2012-11-04");

  //console.log(nextDate);

  const [id, setId] = useState(0);
  const [messages, setMessages] = useState([]);
  const [total, setTotal] = useState(0);
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
    dataIn: "",
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //console.log(currencies)
  const handleEditarCountry = (anu) => {
    setOpcao("EDITAR");
    setTitle("EDITAR ANUNCIO");
    //setStatus('MOEDA');
    //setId(moeda.id);
    setOpenModel(true);
    setAnuncio({
      id: anu.id,
      empresa: anu.empresa,
      servico: anu.servico,
      meio: anu.meio,
      valor: anu.valor,
      segment: anu.segment,
      objetivo: anu.objetivo,
      conversao: anu.conversao,
      descricao: anu.descricao,
      status: anu.status,
      dataIn: anu.dataIn,
    });
    //console.log(anu);
  };

  const handleDesable = (anuncio) => {
    setOpcao("DESABLE");
    setTitle("EDITAR O ESTATO");
    setOpenModel(true);
    setAnuncio({
      id: anuncio.id,
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
    });
  };

  const handleApagarCountry = (anu) => {
    setOpcao("APAGAR");
    setTitle("APAGAR ANUNCIO");
    setOpenModel(true);
    setAnuncio({
      id: anu.id,
      empresa: anu.empresa,
      servico: anu.servico,
      meio: anu.meio,
      valor: anu.valor,
      segment: anu.segment,
      objetivo: anu.objetivo,
      conversao: anu.conversao,
      descricao: anu.descricao,
      status: anu.status,
      dataIn: anu.dataIn,
    });
  };

  useEffect(() => {
    let tot = 0;
    let ativos = [];
    fetch("https://api-json-red.vercel.app/anunciosdb")
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson)
        responseJson.forEach((anuncio) => {
          if (anuncio.status == true) {
            ativos.push(anuncio);
          }
        });
        //console.log(ativos)
        //setTotal(tot.toLocaleString("en-US", {style:"currency", currency:"USD"}));
        setAnuncios(ativos);
      });
    fetch("https://api-json-red.vercel.app/message")
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson)
        setMessages(responseJson);
      });
  }, []);

  const getComponent = () => {
    switch (opcao) {
      case "EDITAR":
        return (
          <FormAnuncios
            anunciar={anuncio}
            opcao={opcao}
            setOpenModel={setOpenModel}
            primery={primery}
            secudary={secudary}
          />
        );
      case "APAGAR":
        return (
          <Deletarnuncios
            anuncio={anuncio}
            setOpenModel={setOpenModel}
            primery={primery}
            secudary={secudary}
          />
        );
      case "DESABLE":
        return (
          <Deletarnuncios
            opcao={opcao}
            anuncio={anuncio}
            setOpenModel={setOpenModel}
            primery={primery}
            secudary={secudary}
            setTotal={setTotal}
            setAnuncios={setAnuncios}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Grid container spacing={12}>
        <Grid
          item
          xs={12}
          sm={8}
          sx={{
            display: { xs: "flex", md: "grid" },
          }}
        >
          <Grid container justifyContent="start" spacing={2}>
            <Grid item xs={12} md={6} sm={12}>
              <Paper
                elevation={1}
                sx={{ p: 1, maxWidth: "100%", maxHeight: "100%" }}
              >
                <AnunciosAtivos primery={primery} secudary={secudary} />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} sm={12}>
              <Paper
                elevation={1}
                sx={{ p: 1, maxWidth: "100%", maxHeight: "100%" }}
              >
                <FeedActive primery={primery} secudary={secudary} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
              {anuncios.length == 0 ? (
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "15px",
                    mt: 10,
                    fontFamily: "Afacad Flux, serif",
                    "@media (max-width: 800px)": { fontSize: "10px" },
                  }}
                >
                  Não existe nenhuma publicidades!
                </Typography>
              ) : (
                <Paper sx={{ width: "100%", overflow: "hidden" }}>
                  <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow className={classes.root}>
                          <TableCell
                            align={"start"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontWeight: 600,
                              fontSize: "12px",
                            }}
                            //style={{ minWidth: 150 }}
                          >
                            EMPRESA
                          </TableCell>
                          <TableCell
                            align={"start"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontWeight: 600,
                              fontSize: "12px",
                            }}
                            //style={{ minWidth: 150 }}
                          >
                            SERVIÇO
                          </TableCell>

                          <TableCell
                            align={"start"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontWeight: 600,
                              fontSize: "12px",
                            }}
                            //style={{ minWidth: 150 }}
                          >
                            MEIOS
                          </TableCell>

                          <TableCell
                            align={"start"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontWeight: 600,
                              fontSize: "12px",
                            }}
                            //style={{ minWidth: 150 }}
                          >
                            CUSTO
                          </TableCell>

                          <TableCell
                            align={"start"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontWeight: 600,
                              fontSize: "12px",
                            }}
                            //style={{ minWidth: 150 }}
                          >
                            SEGMENTO
                          </TableCell>

                          <TableCell
                            align={"start"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontWeight: 600,
                              fontSize: "12px",
                            }}
                            //style={{ minWidth: 150 }}
                          >
                            OBJETIVO
                          </TableCell>

                          <TableCell
                            align={"start"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontWeight: 600,
                              fontSize: "12px",
                            }}
                            //style={{ minWidth: 150 }}
                          >
                            CONVERSÃO
                          </TableCell>

                          <TableCell
                            align={"start"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontWeight: 600,
                              fontSize: "12px",
                            }}
                            //style={{ minWidth: 150 }}
                          >
                            DESCRIÇÃO
                          </TableCell>

                          <TableCell
                            align={"start"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontWeight: 600,
                              fontSize: "12px",
                            }}
                            //style={{ minWidth: 150 }}
                          >
                            OPCÕES
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {anuncios
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.id}
                              >
                                <TableCell
                                  align={"start"}
                                  sx={{
                                    fontFamily: "Afacad Flux, serif",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                  }}
                                >
                                  {row.empresa}
                                </TableCell>

                                <TableCell
                                  align={"start"}
                                  sx={{
                                    fontFamily: "Afacad Flux, serif",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                  }}
                                >
                                  {row.servico}
                                </TableCell>

                                <TableCell
                                  align={"start"}
                                  sx={{
                                    fontFamily: "Afacad Flux, serif",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                  }}
                                >
                                  {row.meio}
                                </TableCell>

                                <TableCell
                                  align={"start"}
                                  sx={{
                                    fontFamily: "Afacad Flux, serif",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                  }}
                                >
                                  {row.valor}
                                </TableCell>

                                <TableCell
                                  align={"start"}
                                  sx={{
                                    fontFamily: "Afacad Flux, serif",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                  }}
                                >
                                  {row.segment}
                                </TableCell>

                                <TableCell
                                  align={"start"}
                                  sx={{
                                    fontFamily: "Afacad Flux, serif",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                  }}
                                >
                                  {row.objetivo}
                                </TableCell>

                                <TableCell
                                  align={"start"}
                                  sx={{
                                    fontFamily: "Afacad Flux, serif",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                  }}
                                >
                                  {row.conversao}
                                </TableCell>

                                <TableCell
                                  align={"start"}
                                  sx={{
                                    fontFamily: "Afacad Flux, serif",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                  }}
                                >
                                  {row.descricao}
                                </TableCell>

                                <TableCell align={"start"}>
                                  {row.status ? (
                                    <IconButton
                                      onClick={() => handleDesable(row)}
                                      size="small"
                                      aria-label="show 4 new mails"
                                      color="inherit"
                                    >
                                      <ToggleOff
                                        sx={{
                                          color: "green",
                                          fontSize: "20px",
                                        }}
                                      />
                                    </IconButton>
                                  ) : (
                                    <IconButton
                                      onClick={() => handleDesable(row)}
                                      size="small"
                                      aria-label="show 4 new mails"
                                      color="inherit"
                                    >
                                      <ToggleOn
                                        sx={{
                                          color: `${secudary}`,
                                          fontSize: "20px",
                                        }}
                                      />
                                    </IconButton>
                                  )}
                                  <IconButton
                                    onClick={() => handleEditarCountry(row)}
                                    size="small"
                                    aria-label="show 4 new mails"
                                    color="inherit"
                                  >
                                    <Edit
                                      sx={{
                                        color: "#171010",
                                        fontSize: "20px",
                                      }}
                                    />
                                  </IconButton>
                                  <IconButton
                                    onClick={() => handleApagarCountry(row)}
                                    size="small"
                                    aria-label="show 4 new mails"
                                    color="inherit"
                                  >
                                    <Delete
                                      sx={{ color: "red", fontSize: "20px" }}
                                    />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={anuncios.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Paper>
              )}
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={4}>
          <div>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "25px",
                fontFamily: "Afacad Flux, serif",
                "@media (max-width: 800px)": { fontSize: "15px" },
              }}
            >
              NOTIFICAÇÕES
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                fontFamily: "Afacad Flux, serif",
                "@media (max-width: 800px)": { fontSize: "10px" },
              }}
            >
              Novas atualizações da empresa
            </Typography>
          </div>
          <Box>
            {messages.length == 0 ? (
              <Typography
                sx={{
                  fontSize: "15px",
                  textAlign: "center",
                  fontFamily: "Afacad Flux, serif",
                  "@media (max-width: 800px)": { fontSize: "10px" },
                }}
              >
                Nenhuma mensagem
              </Typography>
            ) : (
              <Box>
                {messages.map((msg, index) => {
                  return (
                    <Box key={index} sx={{ mb: 0.5 }}>
                      <Boxmessage
                        message={msg}
                        primery={primery}
                        secudary={secudary}
                        setMessages={setMessages}
                        //setOpenModel={setOpenModel}
                      />
                    </Box>
                  );
                })}
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
      <Model title={title} openModel={openModel} setOpenModel={setOpenModel}>
        {getComponent()}
      </Model>
    </>
  );
}
export default Home;
