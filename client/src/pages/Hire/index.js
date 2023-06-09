import React, { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKAlert from "components/MKAlert";

// Material Kit 2 React examples
import Navbar from "components/Navbars";
import Footer from "components/Footers";

// Routes
import routes from "routes/routes";
import footerRoutes from "routes/footer.routes";

import axios from "axios";

// Image
import bgImage from "assets/images/hire.png";

function Hire() {
  const [enterprise, setEnterprise] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/contact", { enterprise, email, message });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <Navbar brand="Dachristo" routes={routes} />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Hire me
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKBox width="100%" component="form" method="post" autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Entreprise"
                      value={enterprise}
                      onChange={(event) => setEnterprise(event.target.value)}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="Votre projet"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="Décrivez moi votre projet en quelque ligne, ou laisser moi un lien avec une description plus complète"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                    />
                  </Grid>
                </Grid>
                {success && (
                  <Grid item xs={12}>
                    <MKAlert color="success">Votre message a été envoyer merci !</MKAlert>
                  </Grid>
                )}
                {error && (
                  <Grid item xs={12}>
                    <MKAlert color="error">Une erreur est survenue</MKAlert>
                  </Grid>
                )}
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info" onClick={handleSubmit}>
                    Envoyez !
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <Footer content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Hire;
