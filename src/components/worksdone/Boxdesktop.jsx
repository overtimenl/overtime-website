import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import parse from "html-react-parser";
import { Downloading, WhatsApp } from "@mui/icons-material";

export default function Boxdesktop(props) {
  const { primery, secudary, app } = props;

  return (
    <Card sx={{ maxWidth: 365, margin: "auto" }}>
      <CardActionArea>
        <CardMedia
          component="iframe"
          src="https://www.youtube.com/embed/pFOG8c_aifo?si=E1rRPCUsKHwXYxmG"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          //component="img"
          height="225"
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
            {parse(`${app.descricao}`)}
          </Typography>
        </Box>
      </CardActionArea>
      <Box sx={{ p: 0.5, mt: -4, mb: -2 }}>
        <IconButton
          sx={{
            //bgcolor: `${secudary}`,
            color: "green",
            "&:hover": {
              bgcolor: "  #20E611",
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
        </IconButton>
        <IconButton
          sx={{
            //bgcolor: `${secudary}`,
            color: "blue",
            "&:hover": {
              bgcolor: "#678FE6",
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
        </IconButton>
      </Box>
    </Card>
  );
}
