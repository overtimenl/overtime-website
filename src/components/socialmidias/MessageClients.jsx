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
  ForwardToInbox,
  Visibility,
  VisibilityOff,
  AccountBalance,
  Delete,
  Edit,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Model from "../Model";
import FormMessages from "./FormMessages";
import Deletemessage from "./Deletemessage";
import dayjs from "dayjs";

const useStyles = makeStyles({
  root: {
    "& .MuiTableCell-head": {
      color: "white",
      backgroundColor: "#ED1C07",
    },
  },
});

const slids = [
  {
    id: 1,
    work: "APP web e Mobile",
    name: "Paulo Gustavo",
    conteudo:
      "Incrivelmente satisfeito com a aplicação que a Overtime desenvolveu para nós! Facilitou muito nossas operações diárias. Obrigado pela inovação",
    data: "2021-03-25",
    more: "saber mais",
  },
  {
    id: 2,
    work: "Produção Multimidia",
    name: "Restaurante Mbanzetu",
    conteudo:
      "A produção multimídia da Overtime deu vida à nossa marca de uma maneira que nunca imaginamos. Estamos impressionados e agradecidos por sua visão criativa!",
    data: "2021-03-25",
    more: "saber mais",
  },
  {
    id: 3,
    work: "Marketing Digital",
    name: "Colégio Miguel Mauel Mateus",
    conteudo:
      "O marketing estratégico da Overtime trouxe resultados tangíveis para nossos negócios. Agradecemos pela abordagem proativa e pelos insights valiosos.",
    data: "2021-03-25",
    more: "saber mais",
  },
  {
    id: 4,
    work: "APP web e Mobile",
    name: "Imperial Gestor",
    conteudo:
      "Agradecemos à Overtime por traduzir nossas ideias em uma experiência web excepcional. A navegação intuitiva e o design atraente são elogiados por nossos clientes",
    data: "2021-03-25",
    more: "saber mais",
  },
  {
    id: 5,
    work: "APlicação Desktop",
    name: "Afonso Ndimbala",
    conteudo:
      "A aplicação desktop da Overtime simplificou nossos processos internos de maneira eficiente. Muito obrigado pela eficácia e profissionalismo.",
    data: "2021-03-25",
    more: "saber mais",
  },
  {
    id: 6,
    work: "APP web e Mobile",
    name: "Ombala do Saber",
    conteudo:
      "A equipe da Overtime não só entregou um site incrível, mas também foi excepcionalmente colaborativa durante todo o processo. Obrigado pela parceria",
    data: "2021-03-25",
    more: "saber mais",
  },
];

function MessageClients(props) {
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
  let today = new Date().toLocaleDateString();
  const [id, setId] = useState(0);
  const [message, setMessage] = useState({
    id: "",
    work: "",
    name: "",
    conteudo: "",
    data: "",
    more: "",
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleAdd = () => {
    setOpcao("ADD");
    setTitle("ADD MENSAGEM");
    setOpenModel(true);
    setMessage({
      id: 0,
      work: "",
      name: "",
      conteudo: "",
      data: "",
      more: "",
    });
  };
  //console.log(currencies)
  const handleEditarCountry = (message) => {
    setOpcao("EDITAR");
    setTitle("EDITAR MENSAGEM");
    setOpenModel(true);
    setMessage({
      id: message.id,
      work: message.work,
      name: message.name,
      conteudo: message.conteudo,
      data: message.data_create,
      more: message.more,
    });
  };

  const handleApagarCountry = (message) => {
    setOpcao("APAGAR");
    setTitle("APAGAR MENSAGEM");
    setOpenModel(true);
    setMessage({
      id: message.id,
      work: message.work,
      name: message.name,
      conteudo: message.conteudo,
      data: message.data_create,
      more: message.more,
    });
  };

  const getComponent = () => {
    switch (opcao) {
      case "ADD":
        return (
          <FormMessages
            mensage={message}
            setMensage={setMessage}
            setAnuncios={setAnuncios}
            opcao={opcao}
            setOpenModel={setOpenModel}
            primery={primery}
            secudary={secudary}
          />
        );
      case "EDITAR":
        return (
          <FormMessages
            mensage={message}
            setMensage={setMessage}
            setOpenModel={setOpenModel}
            setAnuncios={setAnuncios}
            opcao={opcao}
            primery={primery}
            secudary={secudary}
          />
        );
      case "APAGAR":
        return (
          <Deletemessage
            mensage={message}
            setAnuncios={setAnuncios}
            setMensage={setMessage}
            setOpenModel={setOpenModel}
            primery={primery}
            secudary={secudary}
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    let tot = 0;
    fetch("http://localhost:3000/testemunho")
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson)
        setAnuncios(responseJson);
      });
  }, []);

  return (
    <>
      <Grid item xs={12} sm={8}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "28px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 800px)": { fontSize: "15px" },
          }}
        >
          Testemunhos de clientes
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 800px)": { fontSize: "12px" },
          }}
        >
          Cadastre aqui algumas mensagens de alguns clientes
        </Typography>
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
              "@media (max-width: 800px)": { fontSize: "12px" },
            }}
          >
            Não existe nenhuma moeda!
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
                      NOME DO CLIENTE
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
                      DATA
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
                      CONTEÚDO
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
                            {row.name}
                          </TableCell>

                          <TableCell
                            align={"center"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontSize: "12px",
                              fontWeight: 600,
                            }}
                          >
                            {row.work}
                          </TableCell>

                          <TableCell
                            align={"center"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontSize: "12px",
                              fontWeight: 600,
                            }}
                          >
                            {row.data_create}
                          </TableCell>

                          <TableCell
                            align={"center"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontSize: "12px",
                              fontWeight: 600,
                            }}
                          >
                            {row.conteudo}
                          </TableCell>

                          <TableCell align={"center"}>
                            <IconButton
                              onClick={() => handleEditarCountry(row)}
                              size="small"
                              aria-label="show 4 new mails"
                              color="inherit"
                            >
                              <Edit
                                sx={{ color: "#171010", fontSize: "20px" }}
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
export default MessageClients;
