import {
  Box,
  Grid,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  ToggleOn,
  ToggleOff,
  Delete,
  Edit,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Model from "../Model";
import FormAnuncios from "./FormAnuncios";
import Deletarnuncios from "./Deletaranuncio";
import dayjs from "dayjs";

const useStyles = makeStyles({
  root: {
    "& .MuiTableCell-head": {
      color: "white",
      backgroundColor: "#ED1C07",
    },
  },
});

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

function Anuncios(props) {
  const { primery, secudary } = props;
  const classes = useStyles();

  const [value, setValue] = useState(dayjs("02/10/2023"));
  const [anuncios, setAnuncios] = useState([]);
  const [total, setTotal] = useState(0);
  const [convites, setConvites] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [title, setTitle] = useState("");
  const [opcao, setOpcao] = useState("");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [id, setId] = useState(0);
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
    dataIn: value.format("dd/mm/yyyy"),
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleAdd = () => {
    setOpcao("ADD");
    setTitle("ADD ANÚNCIO");
    setOpenModel(true);
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
      dataIn: value.format("dd/mm/yyyy"),
    });
  };
  //console.log(currencies)
  const handleEditarCountry = (anuncio) => {
    setOpcao("EDITAR");
    setTitle("EDITAR ANUNCIO");
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

  const handleApagarCountry = (anuncio) => {
    setOpcao("APAGAR");
    setTitle("APAGAR ANUNCIO");
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

  const getComponent = () => {
    switch (opcao) {
      case "ADD":
        return (
          <FormAnuncios
            anunciar={anuncio}
            opcao={opcao}
            setOpenModel={setOpenModel}
            primery={primery}
            secudary={secudary}
            setTotal={setTotal}
            setAnuncios={setAnuncios}
          />
        );
      case "EDITAR":
        return (
          <FormAnuncios
            anunciar={anuncio}
            opcao={opcao}
            setOpenModel={setOpenModel}
            primery={primery}
            secudary={secudary}
            setTotal={setTotal}
            setAnuncios={setAnuncios}
          />
        );
      case "APAGAR":
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

  useEffect(() => {
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
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={8}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "25px",
              fontFamily: "Afacad Flux, serif",
              "@media (max-width: 800px)": { fontSize: "15px" },
            }}
          >
            NOSSOS ANÚNCIOS
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              fontFamily: "Afacad Flux, serif",
              "@media (max-width: 800px)": { fontSize: "10px" },
            }}
          >
            Campanhas de anúncios online feitas referente a produtos ou serviços
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              p: 1,
              //bgcolor: '#E6E6E6',
              mb: 1,
              minWidth: 200,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "14px",
                pl: 1,
                pt: 1,
                fontFamily: "Afacad Flux, serif",
                "@media (max-width: 800px)": { fontSize: "12px" },
              }}
            >
              Total Custo
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{
                  pl: 1,
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontFamily: "Afacad Flux, serif",
                  "@media (max-width: 800px)": { fontSize: "15px" },
                }}
              >
                {showPassword ? `${total} kz` : "****"}
              </Typography>
              <IconButton
                size="small"
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? (
                  <VisibilityOff sx={{ color: "black", fontSize: "20px" }} />
                ) : (
                  <Visibility sx={{ color: "black", fontSize: "20px" }} />
                )}
              </IconButton>
            </div>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ float: "right" }}>
        <Button
          type="submit"
          sx={{
            m: "2px 0",
            color: "white",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            fontSize: "12px",
            fontFamily: "Arvo, serif",
            backgroundColor: `${secudary}`,
            "&:hover": {
              color: `${primery}`,
              cursor: "pointer",
              transition: "0.3s ease-in",
            },
          }}
          onClick={handleAdd}
        >
          +
        </Button>
      </Box>
      <Box>
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
            Não existe nenhuma anuncio!
          </Typography>
        ) : (
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow className={classes.root}>
                    <TableCell
                      align={"center"}
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
                      align={"center"}
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
                      align={"center"}
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
                      align={"center"}
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
                      align={"center"}
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
                      align={"center"}
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
                      align={"center"}
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
                      align={"center"}
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
                      align={"center"}
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
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.id}
                        >
                          <TableCell
                            align={"center"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontSize: "12px",
                              fontWeight: 600,
                            }}
                          >
                            {row.empresa}
                          </TableCell>

                          <TableCell
                            align={"center"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontSize: "12px",
                              fontWeight: 600,
                            }}
                          >
                            {row.servico}
                          </TableCell>

                          <TableCell
                            align={"center"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontSize: "12px",
                              fontWeight: 600,
                            }}
                          >
                            {row.meio}
                          </TableCell>

                          <TableCell
                            align={"center"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontSize: "12px",
                              fontWeight: 600,
                            }}
                          >
                            {row.valor}
                          </TableCell>

                          <TableCell
                            align={"center"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontSize: "12px",
                              fontWeight: 600,
                            }}
                          >
                            {row.segment}
                          </TableCell>

                          <TableCell
                            align={"center"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontSize: "12px",
                              fontWeight: 600,
                            }}
                          >
                            {row.objetivo}
                          </TableCell>

                          <TableCell
                            align={"center"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontSize: "12px",
                              fontWeight: 600,
                            }}
                          >
                            {row.conversao}
                          </TableCell>

                          <TableCell
                            align={"center"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontSize: "12px",
                              fontWeight: 600,
                            }}
                          >
                            {row.descricao}
                          </TableCell>

                          <TableCell align={"center"}>
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
                              <Delete sx={{ color: "red", fontSize: "20px" }} />
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
      </Box>
      <Model title={title} openModel={openModel} setOpenModel={setOpenModel}>
        {getComponent()}
      </Model>
    </>
  );
}
export default Anuncios;
