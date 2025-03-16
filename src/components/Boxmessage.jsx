import { useState } from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import Model from "./Model";
import Deletemessage from "./Deletemessage";

function Boxmessage(props) {
  const { message, setMessages, primery, secudary } = props;
  const [openModel, setOpenModel] = useState(false);
  const [title, setTitle] = useState("");

  const handleApagar = () => {
    setTitle("APAGAR MENSAGEM");
    setOpenModel(true);
  };

  return (
    <>
      <Card elevation={0}>
        <Typography
          sx={{
            mt: 1,
            mb: -1,
            ml: 2,
            fontWeight: 700,
            fontSize: 14,
            fontFamily: "Afacad Flux, serif",
          }}
          //color="text.secondary"
          gutterBottom
        >
          {message.assunto}
        </Typography>
        <CardContent>
          <Typography
            variant="body2"
            sx={{ fontSize: 12, fontFamily: "Afacad Flux, serif" }}
          >
            {message.conteudo}
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Afacad Flux, serif" }}
          >
            {message.nome}
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Afacad Flux, serif" }}
          >
            Tel: {message.cell}
          </Typography>
          <Typography
            sx={{ mb: 0.5, fontSize: 11, fontFamily: "Afacad Flux, serif" }}
            color="text.secondary"
          >
            {message.data_create}
          </Typography>
          <Button
            onClick={handleApagar}
            sx={{
              mt: 0.5,
              //p: 0.5,
              mb: -1,
              color: "white",
              border: "none",
              cursor: "pointer",
              textDecoration: "none",
              //fontWeight: "bold",
              borderRadius: 100,
              fontSize: "12px",
              fontFamily: "Afacad Flux, serif",
              backgroundColor: "#ED1C07",
              "&:hover": {
                color: "#171010",
                //backgroundColor: 'white',
                cursor: "pointer",
                transition: "0.3s ease-in",
              },
            }}
          >
            X
          </Button>
        </CardContent>
      </Card>
      <Model title={title} openModel={openModel} setOpenModel={setOpenModel}>
        <Deletemessage
          mensage={message}
          setMensages={setMessages}
          setOpenModel={setOpenModel}
          primery={primery}
          secudary={secudary}
        />
      </Model>
    </>
  );
}

export default Boxmessage;
