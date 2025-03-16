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
  Task,
  VisibilityOff,
  AccountBalance,
  Delete,
  Edit,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
//import {AccountBalance, Delete, Edit, LinkedIn, Facebook, Instagram} from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import Model from "../Model";
import Recibo from "./Recibo";
//import Formclient from "./Formclient";
//import Deleteclient from "./Deleteclient";

const useStyles = makeStyles({
  root: {
    "& .MuiTableCell-head": {
      color: "white",
      backgroundColor: "#ED1C07",
    },
  },
});

function createData(id, valor, data, idvenda, iduser, image) {
  return { id, valor, data, idvenda, image };
}

const rows = [
  createData(
    1,
    2492,
    "10 de julho de 2023",
    "34582ddfd535",
    "1828372hdgdss",
    "check-sample.jpg"
  ),
  createData(
    2,
    1292,
    "05 de junho de 2023",
    "345853sfsgdg5",
    "1828372hdgdss",
    "check-sample.jpg"
  ),
  createData(
    3,
    1492,
    "10 de Agosto de 2023",
    "34wqwff58535",
    "1828372hdgdss",
    "check-sample.jpg"
  ),
  createData(
    4,
    12892,
    "08 de Agosto de 2023",
    "34sd585sad35",
    "1828372hdgdss",
    "check-sample.jpg"
  ),
];

function Pymentpainel(props) {
  const { primery, secudary } = props;
  const [payments, setPayments] = useState(rows);
  const [total, setTotal] = useState(0);

  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openModel, setOpenModel] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [opcao, setOpcao] = useState("");
  const [title, setTitle] = useState("");

  const [payment, setPayment] = useState({
    id: "",
    valor: "",
    data: "",
    idvenda: "",
    iduser: "",
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
    setPayment({
      id: "",
      valor: "",
      data: "",
      idvenda: "",
      iduser: "",
      image: "",
    });
  };

  const handleSells = (payment) => {
    setOpcao("CHECK");
    setTitle("COMPRAS");
    setOpenModel(true);
    setPayment({
      id: payment.id,
      valor: payment.valor,
      data: payment.data,
      idvenda: payment.idvenda,
      iduser: payment.iduser,
      image: payment.image,
    });
  };

  const getComponent = () => {
    switch (opcao) {
      case "ADD":
        return; //<Formclient client={client} setClient={setClient} setOpenModel={setOpenModel} opcao={opcao}  primery={primery} secudary={secudary} />;
      case "EDITAR":
        return; //<Formclient client={client} setClient={setClient} setOpenModel={setOpenModel}  opcao={opcao} primery={primery} secudary={secudary}/>;
      case "DELETE":
        return; //<Deleteclient client={client} setOpenModel={setOpenModel}  primery={primery} secudary={secudary} />
      case "CHECK":
        return (
          <Recibo
            payment={payment}
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
    payments.forEach((payment) => {
      tot += parseFloat(payment.valor);
      console.log(tot);
    });
    setTotal(
      tot.toLocaleString("en-US", { style: "currency", currency: "USD" })
    );
    /*
            let tot = 0;  
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
            MEUS PAGAMENTOS
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
                fontSize: "15px",
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
                  fontWeight: 600,
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
        {payments.length == 0 ? (
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
                      DATA
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
                      RECIBO
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {payments
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
                            {row.data}
                          </TableCell>

                          <TableCell align={"center"}>
                            <Button
                              onClick={() => handleSells(row)}
                              size="small"
                              aria-label="show 4 new mails"
                              color="inherit"
                              variant="contained"
                              sx={{ borderRadius: 70, bgcolor: `${secudary}` }}
                            >
                              <Task sx={{ color: `black`, fontSize: "20px" }} />
                            </Button>
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
              count={payments.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        )}
      </Box>
      <Model title={"RECIBO"} openModel={openModel} setOpenModel={setOpenModel}>
        {getComponent()}
      </Model>
    </>
  );
}
export default Pymentpainel;
