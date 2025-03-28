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
import { Person, Lock } from "@mui/icons-material";

function Formuser(props) {
  const [message, setMessage] = useState("");
  const [cor, setCor] = useState("#00809b");
  const [show, setShow] = useState("password");
  const { qtdUser, opcao, setUser, user, setOpenModel, primery, secudary } =
    props;

  const [value, setValue] = useState(dayjs("2023-10-02"));

  /*const [user, setUser] = useState({
		id: '',
	    	username: '',
	    	tipo: '',
	    	email: '',
	    	desabled: ''

       id: '', 
       name: '', 
       servico: '', 
       meio: '', 
       vcampanha: 0, 
       duracao: 0, 
       conversao: 0, 
       dataFim: "", 
    });*/

  function generateSecureHex() {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0].toString(16).padStart(8, "0").toUpperCase();
  }

  const handleChannge = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    //console.log(anuncio)
    if (opcao === "EDITAR") {
      const formData = new FormData();
      formData.append("id", user.id);
      formData.append("username", user.username);
      formData.append("tipo", user.tipo);
      formData.append("email", user.email);
      formData.append("desabled", user.desabled);

      //formData.append("conteudo", anunciar.conteudo);
      axios
        .put("https://api-json-red.vercel.app/users", {
          id: user.id,
          username: user.username,
          tipo: user.tipo,
          email: user.email,
          desabled: user.desabled,
        })
        .then(function (response) {
          setUser({
            id: "",
            username: "",
            tipo: "",
            email: "",
            desabled: "",
          });
          setCor("#00809b");
          setMessage("Usuário atualizado com sucesso!");

          ///console.log(response);
        })
        .catch(function (error) {
          setCor("red");
          setMessage(error.response.data.detail);
          //console.log(error);
        });

      //setOpenModel(false)
    } else {
      if (user.username != "" && user.tipo != "" && user.email != "") {
        const formData = new FormData();
        formData.append("id", user.id);
        formData.append("username", user.username);
        formData.append("tipo", user.tipo);
        formData.append("email", user.email);
        formData.append("desabled", false);

        axios
          .post("https://api-json-red.vercel.app/users", {
            id: Number(qtdUser) + 1,
            username: user.username,
            tipo: user.tipo,
            email: user.email,
            ps: generateSecureHex(),
            desabled: true,
          })
          .then(function (response) {
            setCor("#00809b");
            setMessage("Usuário cadastrado com sucesso!");
            setUser({
              id: "",
              username: "",
              tipo: "",
              email: "",
              desabled: "",
            });
          })
          .catch(function (error) {
            setCor("red");
            setMessage(error.response.data.username);
            //console.log(error);
          });
      } else {
        setCor("red");
        setMessage("Tem algum campo vazio. VERIFICA!");
      }
    }
  };

  useEffect(() => {
    //console.log(qtdUser);
    if (opcao == "EDITAR") {
    }
    //console.log(anuncio)
  }, []);

  return (
    <Paper elevation={0} sx={{ p: 1 }}>
      <form className={classes.formanucio} onSubmit={submitForm}>
        <div className="input-box">
          <input
            className={classes.input_box}
            type="text"
            placeholder="Informe o nome"
            name="username"
            onChange={handleChannge}
            value={user.username}
          />
        </div>

        <div className="input-box">
          <input
            className={classes.input_box}
            type="email"
            placeholder="Informe o email"
            name="email"
            onChange={handleChannge}
            value={user.email}
          />
        </div>

        <div className="input-box">
          <select
            id="pet-select"
            name="tipo"
            onChange={handleChannge}
            value={user.tipo}
          >
            <option value="">Selecione o tipo de usuário</option>
            <option value="SOCIALMIDIAS">MIDIAS SOCIAS</option>
            <option value="SELLER">VENDEDOR</option>
            <option value="ADM">ADMINISTRADOR</option>
            <option value="RH">RECURSOS HUMANOS</option>
            <option value="PROJECT">GESTOR DE PROJETO</option>
            <option value="SOCIO">SÓCIO</option>
          </select>
        </div>
        {opcao === "EDITAR" ? (
          <>
            <div className="input-box">
              <input
                type={show}
                placeholder="Sua senha"
                name="password"
                value={user.password}
                onChange={handleChannge}
                required
              />
            </div>
            <div className={classes.rememberForgot}>
              <label>
                <input
                  type="checkbox"
                  onClick={() => {
                    show == "password" ? setShow("text") : setShow("password");
                  }}
                />
              </label>{" "}
              <span style={{ marginLeft: "5px" }}>Lembrar senha</span>
            </div>
          </>
        ) : (
          ""
        )}
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
              fontFamily: "Arvo, serif",
              borderRadius: "4px 4px 4px 4px",
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
              fontFamily: "Arvo, serif",
              borderRadius: "4px 4px 4px 4px",
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
export default Formuser;
