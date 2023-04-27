// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import ReviewCard from "components/Cards/ReviewCards";

// Images
import BerealLogo from "assets/images/logos/Logo-BeReal.png";
import CapcarLogo from "assets/images/logos/Capcar.png";
import EpsorLogo from "assets/images/logos/Epsor.png";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={8}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Développez VOTRE projet avec MON expérience</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            {"10+ années d'expériences"}
            <br />
            8+ en développement web
            <br />
            4+ sur NodeJS
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <ReviewCard
              name="François Guillot"
              date="Lead Dev - Epsor"
              review="Ayant eu Damien dans l'équipe que j'encadrais à plusieurs reprises, je peux attester de la qualité de son travail. Il délivre des fonctionnalités soignées en travaillant vite et bien.
Il a aussi fait preuve d'une très bonne compréhension des problématiques métier chez Epsor. Il est curieux et s'adapte vite"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ReviewCard
              name="Fabien Dumay"
              date="Lead Dev - Bereal"
              review="J'ai eu la chance de travailler avec lui chez BeReal, et je peux vous dire que son professionnalisme, sa passion pour le travail bien fait et sa capacité à résoudre les problèmes complexes en font l'un des meilleurs développeurs que j'ai jamais rencontrés"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ReviewCard
              name="Julien Niquet"
              date="CEO - Epsor"
              review="Je suis fier d'avoir eu la chance de travailler avec un collaborateur aussi talentueux et déterminé. Grâce à sa passion pour l'innovation et sa rigueur technique, il a grandement contribué à la réussite de notre entreprise."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="a" href="https://www.epsor.fr/" target="_blank">
              <MKBox sx={{ mt: 4 }} component="img" src={EpsorLogo} alt="Epsor" width="100%" />
            </MKBox>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="a" href="https://www.capcar.fr/" target="_blank">
              <MKBox component="img" src={CapcarLogo} alt="Capcar" width="100%" />
            </MKBox>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="a" href="https://bere.al/en" target="_blank">
              <MKBox component="img" src={BerealLogo} alt="BeReal" width="100%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
