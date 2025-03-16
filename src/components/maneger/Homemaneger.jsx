import {
  Grid,
  Paper,
  Button,
  Box,
  IconButton,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import TotalAnuncios from "./TotalAnuncios";
import Totalvendas from "./Totalvendas";
import Totalpagamentos from "./Totalpagamentos";
import Totalclientes from "./Totalclientes";
import Totalfuncionarios from "./Totalfuncionarios";
import Lucroempresa from "./Lucroempresa";
import { makeStyles } from "@mui/styles";
import Model from "../Model";
import { AccountBalance, Delete, Edit } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Notfications from "../Notificatins";

function Homemaneger(props) {
  const { primery, secudary } = props;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} sx={{ display: { xs: "flex", md: "grid" } }}>
          <Grid container justifyConten="start" spacing={6}>
            <Grid item xs={12} md={6} sm={12}>
              <Paper
                elevation={1}
                sx={{ p: 1, maxWidth: "100%", maxHeight: "100%" }}
              >
                <TotalAnuncios primery={primery} secudary={secudary} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} sm={12}>
              <Paper
                elevation={1}
                sx={{ p: 1, maxWidth: "100%", maxHeight: "100%" }}
              >
                <Totalvendas primery={primery} secudary={secudary} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} sm={12}>
              <Paper
                elevation={1}
                sx={{ p: 1, maxWidth: "100%", maxHeight: "100%" }}
              >
                <Totalpagamentos primery={primery} secudary={secudary} />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} sm={12}>
              <Paper
                elevation={1}
                sx={{ p: 1, maxWidth: "100%", maxHeight: "100%" }}
              >
                <Totalclientes primery={primery} secudary={secudary} />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} sm={12}>
              <Paper
                elevation={1}
                sx={{ p: 1, maxWidth: "100%", maxHeight: "100%" }}
              >
                <Totalfuncionarios primery={primery} secudary={secudary} />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} sm={12}>
              <Paper
                elevation={0}
                sx={{ p: 1, maxWidth: "100%", maxHeight: "100%" }}
              >
                <Lucroempresa primery={primery} secudary={secudary} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "25px",
                fontFamily: "Afacad Flux, serif",
                "@media (max-width: 800px)": { fontSize: "15px" },
              }}
            >
              NOTIFICAÇÕES
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                fontFamily: "Afacad Flux, serif",
                "@media (max-width: 800px)": { fontSize: "10px" },
              }}
            >
              Novas atualizações da empresa
            </Typography>
            <Notfications primery={primery} secudary={secudary} />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
export default Homemaneger;
