import { useState } from "react";
import axios from "axios";
import classes from "./Login.module.css";
import { Person, Lock } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const { primery, secudary } = props;
  const [user, setUsere] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [show, setShow] = useState("password");
  let navigate = useNavigate();

  const handleChannge = (e) => {
    setUsere({ ...user, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    console.log(user.password);
    console.log(user.email);

    const formData = new FormData();
    formData.append("username", user.email);
    formData.append("password", user.password);

    //console.log(formData)
    /*
    fetch(``)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
    */
    axios
      .get(`https://api-json-red.vercel.app/users?email=${user.email}`)
      .then((response) => {
        console.log(response.data);
        if (response.data.length > 0) {
          let usuario = response.data[0];
          console.log(usuario.ps === user.password);
          console.log(usuario.desabled);
          if (usuario.ps === user.password && usuario.desabled) {
            if (usuario.tipo === "SOCIALMIDIAS") {
              //navigate(`/SocialManager/${response.data.access_token}`);
              navigate("/SocialManager", {
                state: {
                  user: usuario,
                },
              });
              console.log("SOCIALMIDIAS");
            } else if (usuario.tipo === "SELLER") {
              //navigate(`/Sellers/${response.data.access_token}`);
              navigate("/Sellers", {
                state: {
                  user: usuario,
                },
              });
              console.log("SELLER");
            } else if (usuario.tipo === "ADM") {
              //navigate(`/Manegerpage/${response.data.access_token}`);
              navigate("/Manegerpage", {
                state: {
                  user: usuario,
                },
              });
              //console.log("ADM");
            }
          } else {
            setMessage(
              "[ERRO] Verifica a palavra passe, Caso esteja correta o seu usuário foi desabilitado!"
            );
          }
          //console.log(usuario);
        } else {
          setMessage("[ERRO] Usuário não encontrado");
        }

        /*if(response.data.type_user === "SOCIALMIDIAS"){
				navigate(`/SocialManager/${response.data.access_token}`);
			} else if(response.data.type_user === "SELLER") {
				navigate(`/Sellers/${response.data.access_token}`);
			} else if(response.data.type_user === "ADM"){
				navigate(`/Manegerpage/${response.data.access_token}`);
			}*/
      })
      .catch((response) => {
        //setMessage(response.response.data.detail);
        //console.log(response.response.data.detail)
      });
  };

  return (
    <Box className={classes.box}>
      <div className={classes.wrapper}>
        <form onSubmit={submitForm}>
          <h1>Login</h1>
          <div className={classes.inputBox}>
            <input
              type="email"
              placeholder="Informe seu email"
              name="email"
              value={user.email}
              onChange={handleChannge}
              required
            />
            <Person className={classes.icon} />
          </div>
          <div className={classes.inputBox}>
            <input
              type={show}
              placeholder="Sua senha"
              name="password"
              value={user.password}
              onChange={handleChannge}
              required
            />
            <Lock className={classes.icon} />
          </div>

          <div className={classes.rememberForgot}>
            <div style={{ display: "flex" }}>
              <label>
                <input
                  type="checkbox"
                  onClick={() => {
                    show == "password" ? setShow("text") : setShow("password");
                  }}
                />
              </label>
              <span style={{ marginLeft: 2 }}>Lembrar senha</span>
            </div>

            <a href="#">Esqueceu a senha?</a>
          </div>

          <button onClick={submitForm} type="submit">
            Login
          </button>

          <Grid align="center" sx={{ mt: 1 }}>
            <Typography
              component="p"
              sx={{
                color: `${secudary}`,
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: "12px",
                fontFamily: "Afacad Flux, sans-serif",
                "@media (max-width: 600px)": { fontSize: "10px" },
              }}
            >
              {message}
            </Typography>
          </Grid>

          <div className={classes.registerLink}>
            <p>
              Não tem uma conta? <a href="#">Criar conta</a>
            </p>
          </div>
        </form>
      </div>
    </Box>
  );
}
export default Login;
