import { useEffect, useRef, useState } from "react";
import { PhotoCamera, Book } from "@mui/icons-material";
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

function Formservicos(props) {
  //const classes = useStyles();
  const {
    foto,
    servico,
    opcao,
    setServico,
    setWorks,
    setOpenModel,
    primery,
    secudary,
  } = props;
  const [selectedImage, setSelectedImage] = useState();
  const [selectedPDF, setSelectedPDF] = useState();
  const [img, setImg] = useState(foto);
  const selectFile = useRef();
  const selectFile01 = useRef();

  const [message, setMessage] = useState("");
  const [cor, setCor] = useState("#00809b");

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const pdfChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedPDF(e.target.files[0]);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    let headers = new Headers();

    headers.append("Content-Type", "multipart/form-data");
    headers.append("Accept", "multipart/form-data");

    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Credentials", "true");
    if (
      servico.work != "Selecione o seviço" &&
      servico.name != "" &&
      servico.conteudo != "" &&
      servico.titulo != "" &&
      servico.resumo != "" &&
      servico.tipo != "Publicitando" &&
      servico.link != "" &&
      servico.more != "" &&
      servico.whats != ""
    ) {
      if (opcao == "EDITAR") {
        const formData = new FormData();
        formData.append("work", servico.work);
        formData.append("name", servico.name);
        formData.append("tipo", servico.tipo);
        formData.append("titulo", servico.titulo);
        formData.append("resumo", servico.resumo);
        formData.append("conteudo", servico.conteudo);
        formData.append("link", servico.link);
        formData.append(
          "arquivo",
          selectFile01.current.files[0] == null
            ? servico.arquivo
            : selectFile01.current.files[0]
        );
        formData.append("more", servico.more);
        formData.append("whats", servico.whats);
        formData.append(
          "filename",
          selectFile.current.files[0] == null
            ? servico.image
            : selectFile.current.files[0]
        );
        try {
          const response = await fetch(
            "https://api-json-red.vercel.app/aplicativos/" + servico.id,
            {
              method: "PATCH",
              body: formData,
            }
          );
          const data = await response.json();
          if (response.ok) {
          } else if (response.status === 404) {
            //setCor("red");
            //setMessage("[ERRO] Serviço não atulizado!");
          } else {
            //setCor("red");
            //setMessage("[ERRO] Serviço Invalido!");
          }
        } catch (error) {
          //setCor("red");
          //setMessage("[ERRO] Servidor indisponivel!");
        }

        setCor("#00809b");
        setMessage("Serviço atulizado com sucesso!");
        setServico({
          id: 0,
          work: "",
          name: "",
          tipo: "",
          image: "",
          conteudo: "",
          titulo: "",
          resumo: ``,
          link: "",
          arquivo: "",
          more: "",
          whats: "",
        });
        setSelectedImage();
        setImg("sem-foto.jpg");
        setOpenModel(false);
        fetch("https://api-json-red.vercel.app/aplicativos")
          .then((response) => response.json())
          .then((responseJson) => {
            setWorks(responseJson);
          });

        /* axios({
          method: "put",
          url: "http://localhost:8000/worksdb/update",
          data: formData,
          config: { headers: { "Content-Type": "multipart/form-data" } },
        })
          .then(function (response) {
            //handle success
            console.log(response);
            setCor("#00809b");
            setMessage("Serviço atulizado com sucesso!");
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
      } else {
        const formData = new FormData();
        formData.append("work", servico.work);
        formData.append("name", servico.name);
        formData.append("tipo", servico.tipo);
        formData.append("titulo", servico.titulo);
        formData.append("resumo", servico.resumo);
        formData.append("conteudo", servico.conteudo);
        formData.append("link", servico.link);
        formData.append("arquivo", selectFile01.current.files[0]);
        formData.append("more", servico.more);
        formData.append("whats", servico.whats);
        formData.append("filename", selectFile.current.files[0]);

        try {
          const response = await fetch("http://localhost:3000/aplicativos", {
            method: "POST",
            body: formData,
          });

          const data = await response.json();
          console.log(data);

          if (response.ok) {
            setCor("#00809b");
            setMessage("Serviço cadastrado com sucesso!");
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
            setSelectedImage();
            setImg("sem-foto.jpg");
            //setOpenModel(false);
            fetch("https://api-json-red.vercel.app/aplicativos")
              .then((response) => response.json())
              .then((responseJson) => {
                setWorks(responseJson);
              });
          }
        } catch (error) {
          //setCor("red");
          //setMessage("[ERRO] Servidor indisponivel!");
        }
        /*setCor("#00809b");
        setMessage("Serviço cadastrado com sucesso!");
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
        setSelectedImage();
        setImg("sem-foto.jpg");*/
        //
        fetch("https://api-json-red.vercel.app/aplicativos")
          .then((response) => response.json())
          .then((responseJson) => {
            setWorks(responseJson);
          });
        //setOpenModel(false);
        /* axios({
          method: "post",
          url: "http://localhost:8000/worksdb/create",
          data: formData,
          config: { headers: { "Content-Type": "multipart/form-data" } },
        })
          .then(function (response) {
            //handle success
            //console.log(response)
            setCor("#00809b");
            setMessage("Serviço cadastrada com sucesso!");
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
            setSelectedImage();
            setImg("sem-foto.jpg");
            setOpenModel(false);
            //console.log(user)

            //console.log(Number(user.idcountry))
          })
          .catch(function (response) {
            //handle error
            //console.log(response)
          }); */
      }
    } else {
      setCor("red");
      setMessage("Tem algum campo vazio. VERIFICA!");
    }
  };

  useEffect(() => {
    console.log(servico);
    //if (opcao === "EDITAR") {}
    // eslint-disable-next-line react/prop-types, react-hooks/exhaustive-deps
  }, []);

  const handleChannge = (e) => {
    setServico({ ...servico, [e.target.name]: e.target.value });
  };

  return (
    <Paper elevation={0}>
      <form className={classes.formContact}>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="space-between" spacing={2}>
              <Grid item xs={12} sm={6}>
                <div className="input-box">
                  <select
                    id="pet-select"
                    name="work"
                    onChange={handleChannge}
                    value={servico.work}
                  >
                    <option value="">Selecione o seviço</option>
                    <option value="APP Desktop">Aplicações Desktop</option>
                    <option value="Website">Website</option>
                    <option value="APP Web e Mobile">App Web e Mobile</option>
                    <option value="Marketing Digital">Marketing Digital</option>
                    <option value="Produção Multimidia">
                      Produção Multimidia
                    </option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <div className="input-box">
                  <select
                    id="pet-select"
                    name="tipo"
                    onChange={handleChannge}
                    value={servico.tipo}
                  >
                    <option value="">Publicitando</option>
                    <option value="PRODUTO">PRODUTO</option>
                    <option value="SERVICO">SERVIÇO</option>
                  </select>
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <div className="input-box">
                  <input
                    className={classes.input_box}
                    type="text"
                    placeholder="Informe o nome do trabalho a ser publicitado"
                    name="name"
                    onChange={handleChannge}
                    value={servico.name}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="input-box">
                  <input
                    className={classes.input_box}
                    type="text"
                    placeholder="Informe o titulo ao ser publicitado"
                    name="titulo"
                    onChange={handleChannge}
                    value={servico.titulo}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className="input-box">
                  <input
                    className={classes.input_box}
                    type="text"
                    placeholder="Informe o link de demostração"
                    name="link"
                    onChange={handleChannge}
                    value={servico.link}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className="input-box">
                  <input
                    className={classes.input_box}
                    type="text"
                    placeholder="Link de contato"
                    name="whats"
                    onChange={handleChannge}
                    value={servico.whats}
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={4}>
                <div className="input-box">
                  <input
                    className={classes.input_box}
                    type="text"
                    placeholder="Link de acesso ao conteudo"
                    name="more"
                    onChange={handleChannge}
                    value={servico.more}
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <div className="input-box message-box">
                  <textarea
                    cols={20}
                    rows={10}
                    name="conteudo"
                    placeholder="Insere a descrição"
                    onChange={handleChannge}
                  >
                    {servico.conteudo}
                  </textarea>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="input-box message-box">
                  <textarea
                    cols={20}
                    rows={10}
                    name="resumo"
                    placeholder="Descreve o resumo do serviço"
                    onChange={handleChannge}
                  >
                    {servico.resumo}
                  </textarea>
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
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
                      required
                    />
                    <PhotoCamera />
                    <Typography
                      variant="overline"
                      display="block"
                      sx={{
                        fontFamily: "Afacad Flux, serif",
                        fontSize: 10,
                        fontWeight: 600,
                      }}
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ mb: 1 }}>
                  <IconButton
                    size="small"
                    sx={{ borderRadius: 0, color: "#00809b" }}
                    aria-label="upload picture"
                    component="label"
                  >
                    <input
                      // className={classes.input_box}
                      hidden
                      type="file"
                      accept="application/pdf"
                      ref={selectFile01}
                      name="arquivo"
                      onChange={pdfChange}
                      required
                      //value={servico.arquivo}
                    />
                    <Book />
                    <Typography
                      variant="overline"
                      display="block"
                      sx={{
                        fontFamily: "Afacad Flux, serif",
                        fontSize: 10,
                        fontWeight: 600,
                      }}
                      gutterBottom
                      margin={1}
                    >
                      EBOOK DO SERVIÇO
                    </Typography>
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

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
export default Formservicos;
