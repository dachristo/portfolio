// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Images
import FilledInfoCard from "components/Cards/InfoCards/FilledInfoCard";

function TeamWork() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <FilledInfoCard
            color="info"
            icon="flag"
            title="Mes Compétences"
            description="Avec une expérience de plusieurs années dans le développement web, je suis compétent dans les technologies telles que NodeJS, Typescript, et les frameworks tels que NestJS et Express, et les BDD comme MySQL PostgreSQL ou MongoDB"
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <FilledInfoCard
            color="info"
            icon="precision_manufacturing"
            title="Gestion de Projet"
            description="Je suis capable de gérer efficacement des projets de bout en bout, depuis la planification et la définition des objectifs jusqu'à la livraison et la maintenance. Je suis à l'aise avec les outils de gestion de projet tels que Jira, Trello et Notion"
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <FilledInfoCard
            color="info"
            icon="apps"
            title="Communication"
            description="Je possède d'excellentes compétences en communication, à l'écrit comme à l'oral. Je suis capable de communiquer clairement et efficacement avec les clients, les membres de l'équipe et les parties prenantes, ce qui est essentiel pour assurer la réussite d'un projet"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default TeamWork;
