// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import CounterCard from "components/Cards/CounterCards";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <CounterCard
              count={5}
              duration={2}
              suffix="+"
              title="Clients satisfaits"
              description="Bereal, Capcar, Epsor..."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <CounterCard
              count={10}
              duration={3}
              suffix="+"
              title="Années d'expériences"
              description="10 ans de passion et d'expertise en développement pour vous offrir les meilleurs résultats"
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <CounterCard
              count={20}
              duration={5}
              suffix="+"
              title="Technologie Maîtrisées"
              description="NodeJS, NestJS, TypeScript, SQL, PubSub, Kafka, Jest, Redis..."
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <CounterCard
              count={100}
              duration={10}
              suffix="+"
              title="Tests automatisés"
              description="Des tests rigoureux pour des développements sans faille - l'automatisation pour plus d'efficacité"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <CounterCard
              count={100000}
              duration={20}
              suffix="+"
              title="Lignes de code"
              description="Mon engagement envers la qualité, la performance et l'innovation se reflète dans chaque ligne de code que j'écris"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <CounterCard
              duration={30}
              count={20000000}
              suffix="+"
              title="Utilisateurs journaliers"
              description="Gestion de trafic à grande échelle : savoir-faire acquis avec plus de 20M d'utilisateurs par jour chez BeReal"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
