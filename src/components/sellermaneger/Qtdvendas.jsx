import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { ShoppingCartCheckout } from "@mui/icons-material";

function Qtdvendas(props) {
  const { primery, secudary } = props;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    /*fetch("http://localhost:8000/publicidadesdb/")
        .then((response)=>response.json())
        .then((responseJson)=>{
            setTotal(responseJson.length)
        })  */
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
      }}
    >
      <Typography
        variant="caption"
        sx={{
          fontWeight: "bold",
          fontFamily: "Afacad Flux, serif",
          fontSize: "1.2rem",
          "@media (max-width: 400px)": { fontSize: "1rem", mb: -2 },
        }}
      >
        QUATIDADES VENDAS
      </Typography>

      <Box
        sx={{
          mt: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <ShoppingCartCheckout
          sx={{
            fontSize: "55px",
            color: `${secudary}`,
            "@media (max-width: 400px)": { fontSize: "40px", mt: 2 },
          }}
        />
        <Typography sx={{ mt: 3, fontSize: "1rem", fontWeight: "bold" }}>
          {"Qtd:"}
        </Typography>
        <Typography
          component={"h1"}
          sx={{
            mb: -2.6,
            ml: 0.5,
            mt: -0.8,
            textAlign: "center",
            color: "black",
            fontSize: "3.5rem",
            fontFamily: "Tiro Tamil, serif",
            "@media (max-width: 800px)": { fontSize: "3rem", mt: 0.1 },
            "@media (max-width: 320px)": { fontSize: "1rem", mt: 1.4 },
          }}
        >
          {total}
        </Typography>
      </Box>
    </Box>
  );
}
export default Qtdvendas;
