import { Box, Button, Paper, Typography } from "@mui/material";

function Vendabox({
  total,
  data,
  app,
  client,
  comprovante,
  setOpenModel,
  primery,
  secudary,
}) {
  return (
    <Paper elevation={0} sx={{ p: 1 }}>
      <Box
        sx={{
          mt: 1,
          mb: 1,
          color: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: 600,
            fontFamily: "Afacad Flux, serif",
            fontSize: "1rem",
          }}
        >
          TOTAL kz:
        </Typography>
        <Typography
          component={"div"}
          sx={{
            fontWeight: 700,
            color: `${primery}`,
            fontFamily: "Afacad Flux, serif",
            fontSize: "1.3rem",
          }}
        >
          {total}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 1,
          mb: 1,
          color: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: 600,
            fontFamily: "Afacad Flux, serif",
            fontSize: "1rem",
          }}
        >
          APLICAÇÃO:
        </Typography>
        <Typography
          component={"div"}
          sx={{
            fontWeight: "bold",
            //color: `${primery}`,
            fontFamily: "Afacad Flux, serif",
            fontSize: "1.3rem",
          }}
        >
          {app}
        </Typography>
      </Box>

      <Box
        sx={{
          mt: 1,
          mb: 1,
          color: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: 600,
            fontFamily: "Afacad Flux, serif",
            fontSize: "1rem",
          }}
        >
          CLIENTE:
        </Typography>
        <Typography
          component={"div"}
          sx={{
            fontWeight: "bold",
            //color: `${primery}`,
            fontFamily: "Afacad Flux, serif",
            fontSize: "1.3rem",
          }}
        >
          {client}
        </Typography>
      </Box>

      <Box
        sx={{
          mt: 1,
          mb: 1,
          color: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: 600,
            fontFamily: "Afacad Flux, serif",
            fontSize: "1rem",
          }}
        >
          DATA:
        </Typography>
        <Typography
          component={"div"}
          sx={{
            fontWeight: "bold",
            ////color: `${primery}`,
            fontFamily: "Afacad Flux, serif",
            fontSize: "1.3rem",
          }}
        >
          {data}
        </Typography>
      </Box>
      <Box>
        <img
          src={
            new URL(`../../assets/sellchecks/${comprovante}`, import.meta.url)
          } //{ foto : }
          //style={styles.image}
          width={250}
          height={200}
          alt="Thumb"
        />
      </Box>
      <Button
        //type="submit"
        sx={{
          m: "2px 0",
          color: "white",
          border: "none",
          cursor: "pointer",
          textDecoration: "none",
          fontSize: "12px",
          fontFamily: "Roboto, sans-serif",
          backgroundColor: `${secudary}`,
          "&:hover": {
            color: "#013039",
            cursor: "pointer",
            transition: "0.3s ease-in",
          },
        }}
        onClick={() => setOpenModel(false)}
      >
        OK
      </Button>
    </Paper>
  );
}

export default Vendabox;
