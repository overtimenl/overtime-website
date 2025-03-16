import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";

function Recibo(props) {
  const { setValue, payment, setOpenModel, primery, secudary } = props;
  const [venda, setVenda] = useState({
    id: "",
    valor: "",
    app: "",
    client: "",
    image: "",
    data_create: "",
  });

  useEffect(() => {
    //console.log(anuncio)
    setVenda({
      id: 1,
      valor: 215000,
      app: "Gestão Financeira e RH",
      client: "Paulo Mingos",
      image: "check-sample.jpg",
      data_create: "10:25 12 Agosto de 2023",
    });

    // eslint-disable-next-line react/prop-types, react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            //mb: 1,
            fontWeight: "bold",
            fontSize: "15px",
            color: `${secudary}`,
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "10px" },
          }}
        >
          PAGAMENTO REFERENTE A VENDA
        </Typography>
        <Divider
          sx={{ width: "100%", height: 2, bgcolor: `${secudary}`, mb: 0.5 }}
        />
        <Typography
          sx={{
            mt: 0.5,
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "12px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "10px" },
          }}
        >
          APP: {venda.app}
        </Typography>
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "12px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "10px" },
          }}
        >
          VALOR: {venda.valor} kz
        </Typography>
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "12px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "10px" },
          }}
        >
          DATA: {venda.data_create}
        </Typography>
        <Typography
          sx={{
            mt: 1,
            justifyContent: "start",
            alignItems: "start",
            fontWeight: "bold",
            fontSize: "14px",
            color: `${secudary}`,
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "12px" },
          }}
        >
          PAGAMENTO
        </Typography>
        <Divider />
        <Typography
          sx={{
            mt: 0.5,
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "13px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "11px" },
          }}
        >
          VALOR: {payment.valor} kz
        </Typography>
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "13px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "11px" },
          }}
        >
          DATA: {payment.data}
        </Typography>
        <img
          src={
            new URL(`../../assets/payments/${payment.image}`, import.meta.url)
          }
          width={200}
          height={125}
        />
      </Box>
    </>
  );
}
export default Recibo;
