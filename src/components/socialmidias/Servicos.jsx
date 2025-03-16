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
import Formservicos from "./Formservicos";
//import classes from "./Contact.module.css";
import Deleteservice from "./Deleteservice";

const useStyles = makeStyles({
  root: {
    "& .MuiTableCell-head": {
      color: "white",
      backgroundColor: "#ED1C07",
    },
  },
});

const slides = [
  {
    id: 1,
    work: "APP Desktop",
    name: "GESTÃO DE RESTAURANTE",
    image: "d85c5d75-941a-46e7-8847-f75f1476e4bd.jpg",
    tipo: "PRODUTO",
    conteudo:
      "Tecnologia a favor da sua gestão! Nossa aplicação foi desenvolvida para otimizar restaurantes, bares e lanchonetes, oferecendo controle completo de pedidos, estoque, pagamentos e relatórios detalhados em Excel. Tudo de forma simples e eficiente!",
    more: "saber mais",
    titulo: "Aplicação Desktop para Gestão de Restaurante",
    resumo: `
    <h4>Ideal para pequenas e médias empresas</h4>
    <p>A solução completa para otimizar a administração de lojas, oferecendo ferramentas essenciais para controle de vendas, gestão de clientes, fluxo de caixa e muito mais.</p>
    <h3><strong> Recursos Extras:</strong></h3>
    <p>Geração de relatórios em <strong> Excel </strong> para: </p>
    <p>Vendas,
    Dívidas,
    Despesas mensais,
    Clientes e 
    Fluxo de caixa mensal.</p>
  `,
    link: "pFOG8c_aifo?si=E1rRPCUsKHwXYxmG",
    arquivo: "",
    whats:
      "https://api.whatsapp.com/message/REGZSZIRC3CGI1?autoload=1&app_absent=0",
  },
  {
    id: 2,
    work: "APP Desktop",
    name: "GESTÃO DE LOJAS",
    filename: "697f450c-e2a6-4701-920c-6051a9a604c6.jpg",
    tipo: "PRODUTO",
    conteudo:
      "Facilite a gestão do seu negócio! Com nossa aplicação, você pode cadastrar vendas, controlar dívidas, gerar faturas, registrar folhas de pagamento e acompanhar o fluxo de caixa de forma prática e eficiente.",
    more: "/AppDesktops",
    titulo: "Aplicação Desktop para Gestão de Restaurante",
    resumo: `
    <h4>Ideal para pequenas e médias empresas</h4>
    <p>A solução completa para otimizar a administração de lojas, oferecendo ferramentas essenciais para controle de vendas, gestão de clientes, fluxo de caixa e muito mais.</p>
    <h3><strong> Recursos Extras:</strong></h3>
    <p>Geração de relatórios em <strong> Excel </strong> para: </p>
    <p>Vendas,
    Dívidas,
    Despesas mensais,
    Clientes e 
    Fluxo de caixa mensal.</p>
  `,
    link: "pFOG8c_aifo?si=E1rRPCUsKHwXYxmG",
    arquivo: "",
    whats:
      "https://api.whatsapp.com/message/REGZSZIRC3CGI1?autoload=1&app_absent=0",
  },
  {
    id: 3,
    work: "APP Desktop",
    name: "GESTÃO DE FARMÁCIA",
    image: "e158c452-493a-4ce3-ba4d-2e456550a3b8.jpg",
    tipo: "PRODUTO",
    conteudo:
      "Uma solução completa para farmácias! Com nossa aplicação, você pode emitir faturas, registrar folhas de pagamento, gerenciar vendas e acompanhar o fluxo de caixa de forma prática e segura.",
    titulo: "Aplicação Desktop para Gestão de Restaurante",
    resumo: `
      <h4>Ideal para pequenas e médias empresas</h4>
      <p>A solução completa para otimizar a administração de lojas, oferecendo ferramentas essenciais para controle de vendas, gestão de clientes, fluxo de caixa e muito mais.</p>
      <h3><strong> Recursos Extras:</strong></h3>
      <p>Geração de relatórios em <strong> Excel </strong> para: </p>
      <p>Vendas,
      Dívidas,
      Despesas mensais,
      Clientes e 
      Fluxo de caixa mensal.</p>
    `,
    link: "pFOG8c_aifo?si=E1rRPCUsKHwXYxmG",
    arquivo: "",
    more: "saber mais",
    whats:
      "https://api.whatsapp.com/message/REGZSZIRC3CGI1?autoload=1&app_absent=0",
  },
  {
    id: 4,
    work: "APP Desktop",
    name: "GESTÃO DE COLÉGIOS",
    image: "0800d432-7bb7-4fbf-a2db-cdbb38e34c6a.jpg",
    tipo: "PRODUTO",
    conteudo:
      "Gerencie sua escola de forma organizada e eficiente! Nossa aplicação oferece painéis exclusivos para secretaria e diretoria, facilitando o cadastro de alunos, controle de turmas, registros acadêmicos, gestão de funcionários e finanças.",
    titulo: "Aplicação Desktop para Gestão de Restaurante",
    resumo: `
    <h4>Ideal para pequenas e médias empresas</h4>
    <p>A solução completa para otimizar a administração de lojas, oferecendo ferramentas essenciais para controle de vendas, gestão de clientes, fluxo de caixa e muito mais.</p>
    <h3><strong> Recursos Extras:</strong></h3>
    <p>Geração de relatórios em <strong> Excel </strong> para: </p>
    <p>Vendas,
    Dívidas,
    Despesas mensais,
    Clientes e 
    Fluxo de caixa mensal.</p>
    `,
    link: "pFOG8c_aifo?si=E1rRPCUsKHwXYxmG",
    arquivo: "",
    more: "saber mais",
    whats:
      "https://api.whatsapp.com/message/REGZSZIRC3CGI1?autoload=1&app_absent=0",
  },
];

function Servicos(props) {
  const { primery, secudary } = props;
  const [notificacao, setNotificacao] = useState([]);

  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openModel, setOpenModel] = useState(false);
  const [opcao, setOpcao] = useState("");
  const [title, setTitle] = useState("");

  const [servico, setServico] = useState({
    id: 0,
    work: "",
    name: "",
    image: "",
    conteudo: "",
    titulo: "",
    resumo: ``,
    link: "",
    arquivo: "",
    more: "",
    whats: "",
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
    setTitle("ADD SERVIÇO");
    setOpenModel(true);
    setServico({
      id: 0,
      work: "",
      name: "",
      image: "",
      conteudo: "",
      titulo: "",
      resumo: ``,
      link: "",
      arquivo: "",
      more: "",
      whats: "",
    });
  };

  const handleEditar = (work) => {
    setOpcao("EDITAR");
    setTitle("EDITAR SERVIÇO");
    setOpenModel(true);
    setServico({
      id: work.id,
      work: work.work,
      name: work.name,
      tipo: work.tipo,
      image: work.filename,
      conteudo: work.conteudo,
      titulo: work.titulo,
      resumo: work.resumo,
      link: work.link,
      arquivo: work.arquivo,
      more: work.more,
      whats: work.whats,
    });
  };

  const handleDelete = (work) => {
    setOpcao("DELETE");
    setTitle("EXCLUIR SERVIÇO");
    setOpenModel(true);
    setServico({
      id: work.id,
      work: work.work,
      name: work.name,
      tipo: work.tipo,
      image: work.filename,
      conteudo: work.conteudo,
      titulo: work.titulo,
      resumo: work.resumo,
      link: work.link,
      arquivo: work.arquivo,
      more: work.more,
      whats: work.whats,
    });
  };

  const getComponent = () => {
    switch (opcao) {
      case "ADD":
        return (
          <Formservicos
            servico={servico}
            setOpenModel={setOpenModel}
            setServico={setServico}
            opcao={opcao}
            setWorks={setNotificacao}
            foto="sem-foto.jpg"
            primery={primery}
            secudary={secudary}
          />
        );
      case "EDITAR":
        return (
          <Formservicos
            servico={servico}
            setOpenModel={setOpenModel}
            setServico={setServico}
            foto={servico.image}
            setWorks={setNotificacao}
            opcao={opcao}
            primery={primery}
            secudary={secudary}
          />
        );
      case "DELETE":
        return (
          <Deleteservice
            servico={servico}
            setAnuncios={setNotificacao}
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
    fetch("https://api-json-red.vercel.app/aplicativos")
      .then((response) => response.json())
      .then((responseJson) => {
        setNotificacao(responseJson);
      });
  }, []);

  return (
    <>
      <div style={{ marginBottom: 50 }}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "25px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 800px)": { fontSize: "15px" },
          }}
        >
          TRABALHOS FEITOS
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 800px)": { fontSize: "10px" },
          }}
        >
          Cadastre os trabalhos feitos postados nas mídias sociais
        </Typography>
      </div>
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
          onClick={() => handleAdd()}
        >
          +
        </Button>
      </Box>

      <Box>
        {notificacao.length == 0 ? (
          <Typography sx={{ m: "1px auto" }}>Não há publicidades</Typography>
        ) : (
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow className={classes.root}>
                    <TableCell
                      align={"center"}
                      style={{
                        minWidth: 150,
                        fontFamily: "Afacad Flux, serif",
                        fontWeight: 600,
                        fontSize: "12px",
                      }}
                    >
                      BANNER
                    </TableCell>

                    <TableCell
                      align={"center"}
                      style={{
                        minWidth: 150,
                        fontFamily: "Afacad Flux, serif",
                        fontWeight: 600,
                        fontSize: "12px",
                      }}
                    >
                      SERVIÇO
                    </TableCell>

                    <TableCell
                      align={"center"}
                      style={{
                        minWidth: 150,
                        fontFamily: "Afacad Flux, serif",
                        fontWeight: 600,
                        fontSize: "12px",
                      }}
                    >
                      Nome
                    </TableCell>

                    <TableCell
                      align={"center"}
                      style={{
                        minWidth: 150,
                        fontFamily: "Afacad Flux, serif",
                        fontWeight: 600,
                        fontSize: "12px",
                      }}
                    >
                      DESCRIÇÃO
                    </TableCell>

                    <TableCell
                      align={"center"}
                      style={{
                        minWidth: 150,
                        fontFamily: "Afacad Flux, serif",
                        fontWeight: 600,
                        fontSize: "12px",
                      }}
                    >
                      OPCÕES
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {notificacao
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.id}
                        >
                          <TableCell align={"center"}>
                            <img
                              src={`https://api-json-red.vercel.app/arquivos/${row.filename}`}
                              width={40}
                              height={40}
                            />
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
                            {row.conteudo}
                          </TableCell>

                          <TableCell align={"center"}>
                            <IconButton
                              onClick={() => handleEditar(row)}
                              size="small"
                              aria-label="show 4 new mails"
                              color="inherit"
                            >
                              <Edit
                                sx={{ color: `${primery}`, fontSize: "20px" }}
                              />
                            </IconButton>

                            <IconButton
                              onClick={() => handleDelete(row)}
                              size="small"
                              aria-label="show 4 new mails"
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
              count={notificacao.length}
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

export default Servicos;
