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
  ToggleOn,
  ToggleOff,
  Visibility,
  VisibilityOff,
  AccountBalance,
  Delete,
  Edit,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Model from "../Model";
import Formuser from "./Formuser";
import Deleteuser from "./Deleteuser";

const useStyles = makeStyles({
  root: {
    "& .MuiTableCell-head": {
      color: "white",
      backgroundColor: "#ED1C07",
    },
  },
});

function createData(id, username, email, tipo, desabled) {
  return { id, username, email, tipo, desabled };
}

const rows = [
  createData(1, "Pedro Mzongi", "pedromzongi@gmail.com", "SOCIALMIDIAS", true),
  createData(2, "Panzo Miranda", "panzomiranda@gmail.com", "SELLER", true),
  createData(3, "Mzongi Pedro", "mzongipedro@gmail.com", "ADM", true),
  createData(4, "Baldo Miro", "baldomiro@gmail.com", "RH", false),
  createData(5, "Orlinda Miranda", "orlindamirada@gmail.com", "PROJECT", false),
  createData(6, "Nirvana Dilma", "nirvanadilma@gmail.com", "SOCIO", false),
];

function Useres(props) {
  const { primery, secudary } = props;
  const classes = useStyles();

  //const [value, setValue] = useState(dayjs('02/10/2023'));
  const [useres, setUseres] = useState([]);
  const [total, setTotal] = useState(0);
  const [convites, setConvites] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [title, setTitle] = useState("");
  const [opcao, setOpcao] = useState("");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [user, setUser] = useState({
    id: "",
    username: "",
    tipo: "",
    email: "",
    password: "",
    desabled: "",
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
    setUser({
      id: "",
      username: "",
      tipo: "",
      email: "",
      password: "",
      desabled: "",
    });
  };

  const handleAdd = () => {
    setOpcao("ADD");
    setTitle("ADD ANÚNCIO");
    setOpenModel(true);
  };
  //console.log(currencies)
  const handleEditarCountry = (user) => {
    setOpcao("EDITAR");
    setTitle("EDITAR ANUNCIO");
    setOpenModel(true);
    setUser({
      id: user.id,
      username: user.username,
      tipo: user.tipo,
      email: user.email,
      password: user.ps,
      desabled: user.desabled,
    });
  };

  const handleApagarCountry = (user) => {
    setOpcao("APAGAR");
    setTitle("APAGAR ANUNCIO");
    setOpenModel(true);
    setUser({
      id: user.id,
      username: user.username,
      tipo: user.tipo,
      email: user.email,
      password: user.ps,
      desabled: user.desabled,
    });
  };

  const getComponent = () => {
    switch (opcao) {
      case "ADD":
        return (
          <Formuser
            opcao={opcao}
            setUser={setUser}
            user={user}
            setOpenModel={setOpenModel}
            primery={primery}
            secudary={secudary}
            qtdUser={useres.length}
          />
        );
      case "EDITAR":
        return (
          <Formuser
            opcao={opcao}
            setUser={setUser}
            user={user}
            setOpenModel={setOpenModel}
            primery={primery}
            secudary={secudary}
          />
        );
      case "APAGAR":
        return (
          <Deleteuser
            setUser={setUser}
            user={user}
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
    fetch("https://api-json-red.vercel.app/users")
      .then((response) => response.json())
      .then((responseJson) => {
        /*console.log(responseJson)
					responseJson.forEach((anuncio) => {
							tot += parseFloat(anuncio.vcampanha)
							console.log(tot)
					})*/
        //setTotal(tot.toLocaleString("en-US", {style:"currency", currency:"USD"}));
        setUseres(responseJson);
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
          USUÁRIOS
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 800px)": { fontSize: "10px" },
          }}
        >
          Cadastre os usuários do sistema aqui, e seus niveis de permissão.
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
        {useres.length == 0 ? (
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "15px",
              mt: 10,
              fontFamily: "Afacad Flux, serif",
              "@media (max-width: 800px)": { fontSize: "10px" },
            }}
          >
            Não existe nenhuma usuário!
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
                      USUÁRIO
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
                      TIPO
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
                      EMAIL
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
                  {useres
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
                            {row.username}
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
                            {row.email}
                          </TableCell>

                          <TableCell align={"center"}>
                            {row.desabled ? (
                              <Button
                                onClick={() => handleEditarCountry(row)}
                                size="small"
                                aria-label="show 4 new mails"
                                color="inherit"
                              >
                                <ToggleOff
                                  sx={{ color: "green", fontSize: "20px" }}
                                />
                              </Button>
                            ) : (
                              <Button
                                onClick={() => handleEditarCountry(row)}
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
                              </Button>
                            )}
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
              count={useres.length}
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
export default Useres;
