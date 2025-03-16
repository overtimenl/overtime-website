import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import Model from "./Model";
//import Deletemessage from "./Deletemessage";
import {
  LocalPhone,
  Instagram,
  LocationCity,
  PinDrop,
} from "@mui/icons-material";
import Deletedownload from "./Deletedownload";

function Boxdownload(props) {
  const { download, setDownloads, primery, secudary } = props;
  const [openModel, setOpenModel] = useState(false);
  const [title, setTitle] = useState("");

  const handleApagar = () => {
    setTitle("APAGAR REGISTRO");
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
          {download.aplicativo}
        </Typography>
        <CardContent>
          <Typography
            variant="body2"
            sx={{
              fontSize: 15,
              fontFamily: "Afacad Flux, serif",
              fontWeight: 600,
              color: `${secudary}`,
            }}
          >
            {download.empresa}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyItems: "center",
              justifyContent: "space-between",
              mb: 0.5,
              mt: 0.5,
            }}
          >
            <Box sx={{ display: "flex", justifyItems: "center" }}>
              <LocationCity
                sx={{ mt: 0.2, color: `${secudary}`, fontSize: 16 }}
              />
              <Typography
                variant="h5"
                component="div"
                sx={{ fontFamily: "Afacad Flux, serif", fontWeight: 600 }}
              >
                {download.city}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <PinDrop sx={{ mt: 0.2, color: `${secudary}`, fontSize: 16 }} />
              <Typography
                variant="h5"
                component="div"
                sx={{ fontFamily: "Afacad Flux, serif", fontWeight: 600 }}
              >
                {download.state}
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ width: "100%", height: 1, color: `${primery}` }} />
          <Box
            sx={{
              display: "flex",
              justifyItems: "center",
              justifyContent: "space-between",
              mb: 0.5,
              mt: 0.5,
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Instagram sx={{ mt: 0.2, color: `${secudary}`, fontSize: 16 }} />
              <Typography
                variant="h5"
                component="div"
                sx={{ fontFamily: "Afacad Flux, serif", fontWeight: 600 }}
              >
                {download.insta}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <LocalPhone
                sx={{ mt: 0.2, color: `${secudary}`, fontSize: 16 }}
              />
              <Typography
                variant="h5"
                component="div"
                sx={{ fontFamily: "Afacad Flux, serif", fontWeight: 600 }}
              >
                {download.cell}
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{ mb: 0.5, fontSize: 11, fontFamily: "Afacad Flux, serif" }}
            color="text.secondary"
          >
            {download.data_create}
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
        <Deletedownload
          download={download}
          setDownloads={setDownloads}
          setOpenModel={setOpenModel}
          primery={primery}
          secudary={secudary}
        />
      </Model>
    </>
  );
}

export default Boxdownload;
