import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";

function Sellerbox(props) {
  const { seller, setASeller, setOpenModel, primery, secudary } = props;
  const [account, setAccount] = useState({
    id: "",
    name: "",
    banco: "",
    agencia: "",
    conta: "",
    ibam: "",
  });

  useEffect(() => {
    setAccount({
      id: "ettretr253255",
      name: "Osmar Ndibala",
      banco: "BANCO SOL",
      agencia: "0032-2",
      conta: "0000342382",
      ibam: "235628635247R852384585384524845",
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
        }}
      >
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "10px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "8px" },
          }}
        >
          VENDEDOR:
        </Typography>
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "14px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "12px" },
          }}
        >
          {seller.username}
        </Typography>
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "10px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "8px" },
          }}
        >
          EMAIL:
        </Typography>
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "14px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "12px" },
          }}
        >
          {seller.email}
        </Typography>

        <Typography
          sx={{
            mt: 1,
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "15px",
            fontFamily: "Afacad Flux, serif",
            color: `${secudary}`,
            "@media (max-width: 600px)": { fontSize: "10px" },
          }}
        >
          DADOS PARA TRANSFERÊNCIA
        </Typography>
        <Divider
          sx={{ bgcolor: `${secudary}`, width: "100%", height: 2, mb: 1 }}
        />
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "10px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "8px" },
          }}
        >
          NOME:
        </Typography>
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "14px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "12px" },
          }}
        >
          {account.name}
        </Typography>
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "10px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "8px" },
          }}
        >
          BANCO:
        </Typography>
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "14px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "12px" },
          }}
        >
          {account.banco}
        </Typography>

        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "10px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "8px" },
          }}
        >
          AGÉNCIA:
        </Typography>
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "15px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "12px" },
          }}
        >
          {account.agencia}
        </Typography>
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "10px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "8px" },
          }}
        >
          Nº DA CONTA:
        </Typography>

        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "15px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "12px" },
          }}
        >
          {account.conta}
        </Typography>

        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "10px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "8px" },
          }}
        >
          IBAM:
        </Typography>
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "15px",
            fontFamily: "Afacad Flux, serif",
            "@media (max-width: 600px)": { fontSize: "12px" },
          }}
        >
          {account.ibam}
        </Typography>
        <Button
          type="submit"
          onClick={() => setOpenModel(false)}
          size="small"
          sx={{
            margin: "8px 0",
            color: "white",
            border: "none",
            cursor: "pointer",
            mt: 1,
            //height: '25px'
            //minWidth: 100,

            textDecoration: "none",
            fontSize: "12px",
            fontFamily: "Arvo, serif",
            borderRadius: "5px 5px 5px 5px",
            backgroundColor: `${secudary}`,
            "&:hover": {
              color: `${primery}`,
              cursor: "pointer",
              transition: "0.3s ease-in",
            },
          }}
          fullWidth
        >
          OK
        </Button>
      </Box>
    </>
  );
}
export default Sellerbox;
