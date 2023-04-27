// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "components/Cards/RotatingCard";
import RotatingCardFront from "components/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "components/Cards/RotatingCard/RotatingCardBack";
import InfoCard from "components/Cards/InfoCards";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Des tarifs adaptés <br /> à vos besoins
                  </>
                }
                description="Combien ça coûte ? La réponse se cache ici"
              />
              <RotatingCardBack
                image={bgBack}
                title="Faites exploser vos performances"
                description="Votre entreprise a besoin d'un développeur back-end d'élite pour atteindre ses objectifs"
                action={{
                  type: "internal",
                  route: "/hire",
                  label: "Hire Me",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <InfoCard
                  icon="home_work"
                  title="Localisation"
                  description="Basé à Paris, je suis disponible pour des missions sur site ou en télétravail"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InfoCard
                  icon="hourglass_top"
                  title="Disponibilité"
                  description="Actuellement disponible pour de nouveaux projets passionnants."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <InfoCard
                  icon="info"
                  title="Contactez-moi"
                  description="Mail : damien.christophe1993@gmail.com"
                  descriptionLine2="Nº de Tél : +33 6 52 81 66 67"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InfoCard
                  icon="sports_esports"
                  title="Capter mon attention"
                  description="J'ai plusieurs passions, mais si vous aimez le golf 🏌️‍♂️⛳, le poker 🃏️ ou encore les jeux vidéos 🎮🕹️ nous aurons déjà un bon point en commun !"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
