import { useState, useEffect } from "react";
import {
  IconButton,
  Grid,
  Typography,
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import {
  MonetizationOn,
  HowToReg,
  RequestPage,
  ForwardToInbox,
  Visibility,
  VisibilityOff,
  AccountBalance,
  Delete,
  Edit,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import Model from "../Model";
import Formpayment from "./Formpayment";
import Vendabox from "./Vendabox";
import Sellerbox from "./Sellerbox";
import Deletevendas from "../sellermaneger/Deletevendas";

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
    valor: 215000,
    app: "Gestão Financeira e RH",
    client: "Paulo Mingos",
    paymented: false,
    image: "check-sample.jpg",
    id_seller: "",
    data: "10 de julho de 2023",
  },
  {
    id: 2,
    valor: 225000,
    app: "Gestão de Restaurante",
    client: "Nelito Mpanza",
    paymented: false,
    image: "check-sample.jpg",
    id_seller: "",
    data: "10 de julho de 2023",
  },
  {
    id: 4,
    valor: 250000,
    app: "Gestão De Colégios (escolas)",
    client: "Miguel Mateus",
    paymented: true,
    image: "check-sample.jpg",
    id_seller: "",
    data: "10 de julho de 2023",
  },
];

function Vendas(props) {
  const { primery, secudary } = props;
  const [vendas, setVendas] = useState(slides);

  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openModel, setOpenModel] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [total, setTotal] = useState(0);
  const [opcao, setOpcao] = useState("");
  const [title, setTitle] = useState("");

  const [venda, setVenda] = useState({
    id: "",
    valor: "",
    app: "",
    paymented: true,
    client: "",
    image: "",
    id_seller: "",
    data: "",
  });

  const [seller, setSeller] = useState({
    id: "",
    username: "",
    tipo: "",
    email: "",
    desabled: "",
  });

  const [payment, setPayment] = useState({
    id: "",
    name: "",
    valor: 0,
    tipo: "",
    servico: "",
    id_estrageiro: "",
    data_create: "",
    image: "",
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
    setTitle("ADD VENDAS");
    setOpenModel(true);
    setVenda({
      id: "",
      valor: "",
      app: "",
      paymented: true,
      client: "",
      image: "",
      id_seller: "",
      data: "",
    });
  };

  const handleBank = () => {
    setOpcao("BANK");
    setTitle("DADOS BANCÁRIOS");
    setOpenModel(true);
  };

  const handlePayment = (venda) => {
    if (venda.paymented) {
      setPayment({
        id: "2834246326592frwdv",
        name: "Pedro Pedro",
        valor: 25000,
        tipo: "VENDA",
        servico: "APP Desktop",
        id_estrageiro: "826432FETR45435",
        data_create: "10 de julho de 2023",
        image: "check-sample.jpg",
      });
      setOpcao("PAGAR");
      setTitle("EDITAR PAGAMENTO");
      setOpenModel(true);
    } else {
      setPayment({
        id: "",
        name: "Pedro Pedro",
        valor: 0,
        tipo: "VENDA",
        servico: "APP Desktop",
        id_estrageiro: venda.id,
        data_create: "",
        image: "sem-foto.jpg",
      });
      setOpcao("PAGAR");
      setTitle("FAZER PAGAMENTO");
      setOpenModel(true);
    }
  };

  const handleEditar = (venda) => {
    setOpcao("EDITAR");
    setTitle("VENDA");
    console.log(venda);
    setOpenModel(true);
    setVenda({
      id: venda.id,
      valor: venda.valor,
      app: venda.app,
      paymented: venda.paymented,
      client: venda.client,
      image: venda.image,
      id_seller: venda.id_seller,
      data: venda.data,
    });
  };

  const handleSeller = (venda) => {
    setOpcao("SELLER");
    setTitle("VENDEDOR");
    //console.log(venda);
    setOpenModel(true);
    setVenda({
      id: venda.id,
      valor: venda.valor,
      app: venda.app,
      paymented: venda.paymented,
      client: venda.client,
      image: venda.image,
      id_seller: venda.id_seller,
      data: venda.data,
    });
    setSeller({
      id: "sdfhjgfuw263r",
      username: "Paulo André",
      tipo: "SELLER",
      email: "paulosdhfh2@gmail.com",
      desabled: false,
    });
  };

  const handleDelete = (venda) => {
    setOpcao("DELETE");
    setTitle("EXCLUIR VENDAS");
    setOpenModel(true);
    setVenda({
      id: venda.id,
      valor: venda.valor,
      app: venda.app,
      paymented: venda.paymented,
      client: venda.client,
      image: venda.image,
      id_seller: venda.id_seller,
      data: venda.data,
    });
  };

  const getComponent = () => {
    switch (opcao) {
      case "SELLER":
        return (
          <Sellerbox
            seller={seller}
            setASeller={setSeller}
            setOpenModel={setOpenModel}
            primery={primery}
            secudary={secudary}
          />
        );
      case "EDITAR":
        return (
          <Vendabox
            total={venda.valor.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
            data={venda.data}
            app={venda.app}
            client={venda.client}
            setOpenModel={setOpenModel}
            comprovante={venda.image}
            primery={primery}
            secudary={secudary}
          />
        );
      case "DELETE":
        return (
          <Deletevendas
            anuncio={venda}
            setOpenModel={setOpenModel}
            primery={primery}
            secudary={secudary}
          />
        );
      case "BANK":
        return; //<Banco iduser={"rwrrewrw"}  setOpenModel={setOpenModel}  primery={primery} secudary={secudary} />
      case "PAGAR":
        return (
          <Formpayment
            foto={payment.image}
            payment={payment}
            opcao={opcao}
            setPayment={setPayment}
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
    vendas.forEach((venda) => {
      tot += parseFloat(venda.valor);
      console.log(tot);
    });
    setTotal(
      tot //.toLocaleString("en-US", { style: "currency", currency: "USD" })
    );
    //setAnuncios(responseJson)
    console.log(vendas);
    /*
        fetch("http://localhost:8000/anunciodb/")
        .then((response)=>response.json())
        .then((responseJson)=>{
            console.log(responseJson)
            responseJson.forEach((anuncio) => {
                tot += parseFloat(anuncio.vcampanha)
                console.log(tot)
            })
            setTotal(tot.toLocaleString("en-US", {style:"currency", currency:"USD"}));
            setAnuncios(responseJson)

        })  
        */
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
            NOSSOS VENDAS
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              fontFamily: "Afacad Flux, serif",
              "@media (max-width: 800px)": { fontSize: "10px" },
            }}
          >
            Acomanha as vendas aqui, e faça pagamentos!
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
                fontSize: "13px",
                pl: 1,
                pt: 1,
                fontFamily: "Afacad Flux, serif",
                "@media (max-width: 800px)": { fontSize: "8px" },
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
      <Box>
        {vendas.length == 0 ? (
          <Typography sx={{ fontFamily: "Afacad Flux, serif", m: "1px auto" }}>
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
                      VALOR
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
                      APLICAÇÃO
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
                      CLIENTE
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
                  {vendas
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
                            {row.app}
                          </TableCell>

                          <TableCell
                            align={"center"}
                            sx={{
                              fontFamily: "Afacad Flux, serif",
                              fontSize: "12px",
                              fontWeight: 600,
                            }}
                          >
                            {row.client}
                          </TableCell>

                          <TableCell align={"center"}>
                            <IconButton
                              onClick={() => handleSeller(row)}
                              size="small"
                              aria-label="show 4 new mails"
                              color="inherit"
                            >
                              <HowToReg
                                sx={{ color: "blue", fontSize: "20px" }}
                              />
                            </IconButton>
                            {row.paymented ? (
                              <IconButton
                                onClick={() => handlePayment(row)}
                                size="small"
                                aria-label="show 4 new mails"
                                color="inherit"
                              >
                                <MonetizationOn
                                  sx={{ color: "green", fontSize: "20px" }}
                                />
                              </IconButton>
                            ) : (
                              <IconButton
                                onClick={() => handlePayment(row)}
                                size="small"
                                aria-label="show 4 new mails"
                                color="inherit"
                              >
                                <MonetizationOn
                                  sx={{ color: `${primery}`, fontSize: "20px" }}
                                />
                              </IconButton>
                            )}
                            <IconButton
                              onClick={() => handleEditar(row)}
                              size="small"
                              aria-label="show 4 new mails"
                              color="inherit"
                            >
                              <RequestPage
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
              count={vendas.length}
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
export default Vendas;
