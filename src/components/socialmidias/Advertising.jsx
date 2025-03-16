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
import Formpublicidades from "./Formpublicidades";
//import classes from "./Contact.module.css";
import Deletepublicidades from "./Deletepublicidades";

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
    title: "APLICAÇÃO WEB E WEBSITE",
    subtitle: "PROMOÇÃO, COMEÇA 2025 GANHANDO MAIS...",
    tipo: "SERVIÇO",
    descricao: `
          <h3>Site personalizado com benefícios únicos!</h2>
  
          <p> Hospedagem e domínio <strong>GRÁTIS</strong> no primeiro ano.</p>
          <p> 6 meses de assistência técnica e consultoria em Marketing Digital.</p>
          <p><strong> Apenas 400 mil kz, pagamento em 4 parcelas suaves,</strong> e a última só é paga quando 
          seu site estiver pronto e funcionando! </p>
          
          <h5>Invista hoje e faça seu negócio crescer online!"</h5>
        `,
    image: "88bbc8a7-abc7-4b23-b706-991def900521.jpg",
    more: "https://api.whatsapp.com/message/REGZSZIRC3CGI1?autoload=1&app_absent=0",
  },
  {
    id: 2,
    title: "MARKETING DIGITAL",
    subtitle: "Cuidamos Da Sua Presença Digital",
    tipo: "SERVIÇO",
    descricao:
      "Transforme engajamento em vendas! Otimize suas redes sociais com mais interações e anúncios online eficientes que convertem. Quer crescer de verdade?",
    image: "95b91ce2-9467-40e6-8709-d328a665bf43.jpg",
    more: "https://api.whatsapp.com/message/REGZSZIRC3CGI1?autoload=1&app_absent=0",
  },
  {
    id: 3,
    title: "APLICAÇÃO WEB E WEBSITE",
    subtitle: "Construímos Aplicações Web ",
    tipo: "SERVIÇO",
    descricao:
      "Mais controle, mais crescimento! Nossas aplicações web permitem que você tenha uma visão clara e em tempo real das suas operações. Vamos elevar a sua gestão ao próximo nível?",
    image: "6bcaeb00-156a-4ea4-9fc8-8799554c3374.jpg",
    more: "https://api.whatsapp.com/message/REGZSZIRC3CGI1?autoload=1&app_absent=0",
  },
  {
    id: 4,
    title: "APLICAÇÃO DESKTOP",
    subtitle: "Construímos Aplicações DESKTOP",
    tipo: "SERVIÇO",
    descricao:
      "Transforme a eficiência do seu negócio! Desenvolvemos aplicações desktop poderosas para simplificar e automatizar suas operações. Quer saber como podemos ajudar? ",
    image: "6bcaeb00-156a-4ea4-9fc8-8799554c3374.jpg",
    more: "https://api.whatsapp.com/message/REGZSZIRC3CGI1?autoload=1&app_absent=0",
  },
];

function Advertising(props) {
  const { primery, secudary } = props;
  const [notificacao, setNotificacao] = useState([]);

  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openModel, setOpenModel] = useState(false);
  const [opcao, setOpcao] = useState("");
  const [title, setTitle] = useState("");

  const [anuncio, setAnuncio] = useState({
    id: 0,
    title: "",
    subtitle: "",
    tipo: "",
    descricao: "",
    image: "",
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
    setTitle("ADD PUBLICIDADE");
    setOpenModel(true);
    setAnuncio({
      id: 0,
      title: "",
      subtitle: "",
      tipo: "",
      descricao: "",
      image: "",
      more: "",
    });
  };

  const handleEditar = (ads) => {
    setOpcao("EDITAR");
    setTitle("EDITAR PUBLICIDADE");
    setOpenModel(true);
    setAnuncio({
      id: ads.id,
      title: ads.title,
      subtitle: ads.subtitle,
      tipo: ads.tipo,
      descricao: ads.descricao,
      image: ads.filename,
      more: ads.more,
    });
  };

  const handleDelete = (ads) => {
    setOpcao("DELETE");
    setTitle("EXCLUIR PUBLICIDADE");
    setOpenModel(true);
    setAnuncio({
      id: ads.id,
      title: ads.title,
      subtitle: ads.subtitle,
      tipo: ads.tipo,
      descricao: ads.descricao,
      image: ads.filename,
      more: ads.more,
    });
  };

  const getComponent = () => {
    switch (opcao) {
      case "ADD":
        return (
          <Formpublicidades
            publis={setNotificacao}
            anuncio={anuncio}
            setAnuncio={setAnuncio}
            setOpenModel={setOpenModel}
            opcao={opcao}
            foto="sem-foto.jpg"
            primery={primery}
            secudary={secudary}
          />
        );
      case "EDITAR":
        return (
          <Formpublicidades
            publis={setNotificacao}
            anuncio={anuncio}
            setAnuncio={setAnuncio}
            setOpenModel={setOpenModel}
            foto={anuncio.image}
            opcao={opcao}
            primery={primery}
            secudary={secudary}
          />
        );
      case "DELETE":
        return (
          <Deletepublicidades
            anuncio={anuncio}
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
    fetch("https://api-json-red.vercel.app/publicidadesdb")
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
          PUBLICIDADES DO SITE
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 800px)": { fontSize: "10px" },
          }}
        >
          Cadastre aqui os banneres publicitarios do site da empresa
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
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "15px",
              mt: 10,
              fontFamily: "Afacad Flux, serif",
              "@media (max-width: 800px)": { fontSize: "10px" },
            }}
          >
            Não há publicidades
          </Typography>
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
                      SUBTITULO
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
                      PUBLICITANDO
                    </TableCell>

                    <TableCell
                      align={"center"}
                      style={{
                        minWidth: 150,
                        fontFamily: "Arvo, serif",
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
                        fontFamily: "Arvo, serif",
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
                              width={100}
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
                            {row.title}
                          </TableCell>

                          <TableCell
                            align={"center"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontSize: "12px",
                              fontWeight: 600,
                            }}
                          >
                            {row.subtitle}
                          </TableCell>

                          <TableCell
                            align={"center"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontSize: "12px",
                              fontWeight: 600,
                            }}
                          >
                            {row.tipo}
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
export default Advertising;
