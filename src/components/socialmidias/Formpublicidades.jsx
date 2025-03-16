import { useEffect, useRef, useState } from "react";
import { PhotoCamera } from "@mui/icons-material";
import {
  Button,
  Divider,
  Paper,
  TextField,
  Box,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import classes from "./publicidades.module.css";
import axios from "axios";

function Formpublicidades(props) {
  //const classes = useStyles();
  const {
    foto,
    anuncio,
    opcao,
    publis,
    setAnuncio,
    setOpenModel,
    primery,
    secudary,
  } = props;
  const [selectedImage, setSelectedImage] = useState();
  const [img, setImg] = useState(foto);
  const selectFile = useRef();

  const [message, setMessage] = useState("");
  const [cor, setCor] = useState("#00809b");

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleChannge = (e) => {
    setAnuncio({ ...anuncio, [e.target.name]: e.target.value });
  };

  const [anunciar, setAnunciar] = useState({
    id: "",
    title: "",
    subtitle: "",
    tipo: "",
    descricao: "",
    image: "",
    more: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    if (opcao === "EDITAR") {
      if (anuncio.id != 0) {
        const formData = new FormData();
        //formData.append("id", Number(anuncio.id));
        formData.append("title", anuncio.title);
        formData.append("subtitle", anuncio.subtitle);
        formData.append("tipo", anuncio.tipo);
        formData.append(
          "filename",
          selectFile.current.files[0] == null
            ? anuncio.image
            : selectFile.current.files[0]
        );
        formData.append("descricao", anuncio.descricao);
        formData.append("more", anuncio.more);
        console.log(anuncio.id);
        try {
          //patch
          const response = await fetch(
            "https://api-json-red.vercel.app/publicidadesdb/" + anuncio.id,
            {
              method: "PATCH",
              body: formData,
            }
          );
          const data = await response.json();

          if (response.ok) {
            // Product created correctle
            //navigate("/admin/products");
          } else if (response.status === 400) {
            //alert("Validation Error");
            //setVaildationErrors(data);
            //setCor("red");
            //setMessage("[ERRO] Publicidade não cadastrada!");
          } else {
            //setCor("red");
            //setMessage("[ERRO] Publicidade invalida!");
            setCor("#00809b");
            setMessage("Publicidade cadastrada com sucesso!");
            setAnuncio({
              id: "",
              title: "",
              subtitle: "",
              descricao: "",
              image: "",
              more: "",
            });
            setSelectedImage();
            setImg("sem-foto.jpg");
            setOpenModel(false);
          }
        } catch (error) {
          //setCor("red");
          //setMessage("[ERRO] NÃO CONECTOU COM SERVIDOR!");
        }
        /*axios({

          method: "patch",
          url: `http://localhost:3000/publicidadesdb/${anuncio.id}`,
          body: formData,
          config: { headers: { "Content-Type": "multipart/form-data" } },
        })
          .then(function (response) {
            //handle success
            console.log(response);
            setCor("#00809b");
            setMessage("Publicidade atulizado com sucesso!");
            setAnuncio({
              id: "",
              title: "",
              subtitle: "",
              descricao: "",
              image: "",
              more: "",
            });
            setSelectedImage();
            setImg("sem-foto.jpg");
            setOpenModel(false);
            //console.log(user)

            //console.log(Number(user.idcountry))
          })
          .catch(function (response) {
            //handle error
            console.log(response);
          });*/
        setCor("#00809b");
        setMessage("Publicidade cadastrada com sucesso!");
        setAnuncio({
          id: "",
          title: "",
          subtitle: "",
          descricao: "",
          image: "",
          more: "",
        });
        setSelectedImage();
        setImg("sem-foto.jpg");
        setOpenModel(false);
        fetch("https://api-json-red.vercel.app/publicidadesdb")
          .then((response) => response.json())
          .then((responseJson) => {
            publis(responseJson);
          });
      } else {
        setCor("red");
        setMessage("Tem algum campo vazio. VERIFICA!");
      }
    } else {
      if (
        anuncio.title != "" &&
        anuncio.subtitle != "" &&
        anuncio.descricao != "" &&
        anuncio.more != ""
      ) {
        const formData = new FormData();
        formData.append("title", anuncio.title);
        formData.append("subtitle", anuncio.subtitle);
        formData.append("tipo", anuncio.tipo);
        formData.append("filename", selectFile.current.files[0]);
        formData.append("descricao", anuncio.descricao);
        formData.append("more", anuncio.more);

        try {
          const response = await fetch(
            "https://api-json-red.vercel.app/publicidadesdb",
            {
              method: "POST",
              body: formData,
            }
          );

          const data = await response.json();

          if (response.ok) {
            // Product created correctle
            //navigate("/admin/products");
            setCor("#00809b");
            setMessage("Publicidade cadastrada com sucesso!");
            setAnuncio({
              id: "",
              title: "",
              subtitle: "",
              descricao: "",
              image: "",
              more: "",
            });
            setSelectedImage();
            setImg("sem-foto.jpg");
            setOpenModel(false);

            fetch("https://api-json-red.vercel.app/publicidadesdb")
              .then((response) => response.json())
              .then((responseJson) => {
                publis(responseJson);
              });
          } else if (response.status === 400) {
            //alert("Validation Error");
            //setVaildationErrors(data);
            setCor("red");
            setMessage("[ERRO] Publicidade não cadastrada!");
          } else {
            setCor("red");
            setMessage("[ERRO] Publicidade não invalida!");
          }
        } catch (error) {
          setCor("red");
          setMessage("[ERRO] NÃO CONECTOU COM SERVIDOR!");
        }
        /*axios({
          method: "post",
          url: "http://localhost:3000/publicidadesdb",
          body: formData,
          config: { headers: { "Content-Type": "multipart/form-data" } },
        })
          .then(function (response) {
            //handle success
            //console.log(response)
            setCor("#00809b");
            setMessage("Publicidade cadastrada com sucesso!");
            setAnuncio({
              id: "",
              title: "",
              subtitle: "",
              descricao: "",
              image: "",
              more: "",
            });
            setSelectedImage();
            setImg("sem-foto.jpg");
            setOpenModel(false);
            //console.log(user)

            //console.log(Number(user.idcountry))
          })
          .catch(function (response) {
            //handle error
            console.log(response);
          }); */
      } else {
        setCor("red");
        setMessage("Tem algum campo vazio. VERIFICA!");
      }
      //console.log(anuncio)
    }
  };

  useEffect(() => {
    if (opcao === "EDITAR") {
      console.log(anuncio);
      setAnunciar({
        id: anuncio.id,
        title: anuncio.title,
        subtitle: anuncio.subtitle,
        tipo: anuncio.tipo,
        descricao: anuncio.descricao,
        image: anuncio.image,
        more: anuncio.more,
      });
      setImg(anuncio.image);
      //console.log(anunciar);
    }

    // eslint-disable-next-line react/prop-types, react-hooks/exhaustive-deps
  }, []);

  return (
    <Paper elevation={0}>
      <form className={classes.formContact} /*onSubmit={submitForm}*/>
        <div className="input-box">
          <select
            id="pet-select"
            name="title"
            onChange={handleChannge}
            value={anuncio.title}
          >
            <option value="">Selecione o seviço</option>
            <option value="APLICAÇÃO DESKTOP">Aplicações Desktop</option>
            <option value="WEBSITE">Website</option>
            <option value="APLICAÇÃO WEB E WEBSITE">App Web e Mobile</option>
            <option value="MARKETING DIGITAL">Marketing Digital</option>
            <option value="PRODUÇÃO MULTMIDIA">Produção Multimidia</option>
            <option value="Outro">Outro</option>
          </select>
        </div>

        <div className="input-box">
          <select
            id="pet-select"
            name="tipo"
            onChange={handleChannge}
            value={anuncio.tipo}
          >
            <option value="">Publicitando</option>
            <option value="PRODUTO">PRODUTO</option>
            <option value="SERVICO">SERVIÇO</option>
          </select>
        </div>

        <div className="input-box">
          <input
            className={classes.input_box}
            type="text"
            placeholder="Informe o nome"
            name="subtitle"
            onChange={handleChannge}
            value={anuncio.subtitle}
          />
        </div>

        <div>
          <input
            className={classes.input_box}
            type="text"
            placeholder="Link redes sociais"
            name="more"
            onChange={handleChannge}
            value={anuncio.more}
          />
        </div>

        <div className="input-box message-box">
          <textarea
            cols={20}
            rows={10}
            name="descricao"
            placeholder="Insere a descrição"
            onChange={handleChannge}
          >
            {anuncio.descricao}
          </textarea>
        </div>

        <Box sx={{ mb: 1 }}>
          <IconButton
            size="small"
            sx={{ borderRadius: 0, color: "#00809b" }}
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              accept="image/*"
              type="file"
              ref={selectFile}
              onChange={imageChange}
              //value={`http://localhost:3000/arquivos/${img}`}
              required
            />
            <PhotoCamera />
            <Typography
              variant="overline"
              display="block"
              sx={{ fontFamily: "Arvo, serif" }}
              gutterBottom
              margin={1}
            >
              BANNER
            </Typography>
          </IconButton>

          <Box
            style={{
              marginTop: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={
                selectedImage === undefined
                  ? `https://api-json-red.vercel.app/arquivos/${img}`
                  : URL.createObjectURL(selectedImage)
              } //{ foto : }
              style={{ maxWidth: "40%", maxHeight: 175 }}
              alt="Thumb"
            />
          </Box>
        </Box>
        <Grid align="center" sx={{ mt: 1 }}>
          <Typography
            component="p"
            sx={{
              color: `${cor}`,
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "10px",
              fontFamily: "Afacad Flux, serif",
              "@media (max-width: 600px)": { fontSize: "8px" },
            }}
          >
            {message}
          </Typography>
        </Grid>
        <Button
          //type="submit"
          onClick={submitForm}
          sx={{
            mt: 1,
            color: "white",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            fontSize: "10px",
            fontFamily: "Afacad Flux, serif",
            backgroundColor: `${secudary}`,
            "&:hover": {
              color: "#013039",
              cursor: "pointer",
              transition: "0.3s ease-in",
            },
          }}
          fullWidth
          //onClick={submitForm}
        >
          {opcao}
        </Button>
      </form>
    </Paper>
  );
}
export default Formpublicidades;
