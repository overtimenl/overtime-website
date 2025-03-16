import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import parse from "html-react-parser";
import { Downloading, WhatsApp } from "@mui/icons-material";
import Downloadguia from "./Downloadguia";
import Model from "../Model";

export default function Boxdesktop(props) {
  const { primery, secudary, app, setAplication } = props;
  const [openModel, setOpenModel] = React.useState(false);
  const [title, setTitle] = React.useState("");

  const downGuia = () => {
    setTitle("BAIXAR E-BOOK DA APLICAÇÃO");
    setOpenModel(true);
    setAplication({
      id: app.id,
      titulo: app.titulo,
      midia: app.midia,
      descricao: app.descricao,
    });
  };

  return (
    <>
      <Card sx={{ maxWidth: 445, margin: "auto" }}>
        <CardActionArea>
          <CardMedia
            component="iframe"
            src={`https://www.youtube.com/embed/${app.link}`}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            //component="img"
            height="225"
            //width="500"
            //image={`../../assets/LojaApp.webp`}
            //alt="green iguana"
            sx={{ p: 1 }}
          />
          <Box
            sx={{
              p: 0.5,
              display: "flex",
              //alignItems: "center",
              //textAlign: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontSize: "1.4rem",
                color: `${secudary}`,
                fontFamily: "Afacad Flux, sans-serif",
                mb: 0.5,
              }}
            >
              {app.titulo}
            </Typography>
            <Typography variant="h7" sx={{}}>
              {parse(`${app.resumo}`)}
            </Typography>
          </Box>
        </CardActionArea>
        <Box sx={{ p: 2, mt: -4, mb: -2 }}>
          <Button
            size="small"
            href={`${app.whats}`}
            target="_blank"
            sx={{
              bgcolor: "rgb(12, 109, 5)",
              //color: `${"white"}`,
              borderRadius: 1,
              color: "white",
              mr: 1,
              minWidth: 50,
              "&:hover": {
                cursor: "pointer",
                color: `${"rgb(9, 179, 40)"}`,
                transition: "all 400ms",
              },
            }}
          >
            <WhatsApp
              sx={{
                fontSize: "25px",
              }}
            />
          </Button>
          <Button
            onClick={downGuia}
            //href={`http://localhost:3000/arquivos/${app.arquivo}`}
            //Download={`${app.arquivo}`}
            size="small"
            sx={{
              bgcolor: "blue",
              borderRadius: 1,
              //bgcolor: `${secudary}`,
              minWidth: 50,
              color: "white",
              "&:hover": {
                cursor: "pointer",
                color: `${"#27B3E6"}`,
                transition: "all 400ms",
              },
            }}
          >
            <Downloading
              sx={{
                fontSize: "25px",
              }}
            />
          </Button>
        </Box>
      </Card>
      <Model title={title} openModel={openModel} setOpenModel={setOpenModel}>
        <Downloadguia
          primery={primery}
          secudary={secudary}
          setOpenModel={setOpenModel}
          aplicativo={app}
        />
      </Model>
    </>
  );
}
