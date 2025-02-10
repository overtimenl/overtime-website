import { useState } from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";
import { Watch } from "@mui/icons-material";
import logo from "../assets/OverLogo.png";

function Footer(props) {
  const { primery, secudary } = props;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          mt: 3,
          mb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            mt: 3,
            ml: 0.5,
          }}
        >
          <Typography
            component={"div"}
            //sx={{ width: 45, height: 40, display: { xs: 'none', md: 'flex' }, mr: 1 }}
          >
            <img src={logo} width={45} height={45} />
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyItem: "center",
            }}
          >
            <Typography
              variant="p"
              component={"div"}
              sx={{
                fontWeight: 700,
                fontSize: "2.2rem",
                color: "#fff",
                mt: -2,
                ml: -0.5,
                fontFamily: "Diphylleia, serif",
                //fontFamily: 'Prosto One, sans-serif',
                //color: `${primery}`,
              }}
            >
              Overtime
            </Typography>
            <Typography
              variant="p"
              component={"div"}
              sx={{
                //fontWeight: 700,
                fontSize: ".6rem",
                color: `${secudary}`,
                ml: 5.5,
                "@media (max-width: 500px)": {
                  ml: 8,
                },
              }}
            >
              & Negócio Limpo
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="p"
          sx={{
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "#fff",
            "@media (max-width: 800px)": { fontSize: ".7rem" },
          }}
        >
          &#8450;2020 Overtime&NL, tornando o seu negócio mais rentavél
        </Typography>
      </Box>
    </>
  );
}
export default Footer;
