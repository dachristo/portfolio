// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function Skills() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 6 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="white" mb={1}>
              Disponible pour de nouveaux défis
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={3}>
              Vous cherchez un développeur passionné, rigoureux et expérimenté pour rejoindre votre
              équipe ? Ne cherchez plus, vous êtes au bon endroit.
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href="/hire"
              sx={{ mb: 2 }}
            >
              Hire me
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
      <Container>
        <Grid container item xs={6} mx="auto">
          <MKBox textAlign="center">
            <MKTypography variant="h3" mt={6} mb={3}>
              Mes expertises clés
            </MKTypography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={4} lg={3}>
                <Tooltip title="NodeJS - 4 ans d'expérience">
                  <MKBox component="a" href="https://nodejs.org/en" target="_blank">
                    <MKBox
                      component="img"
                      src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={3}>
                <Tooltip title="NestJS - 1 an d'expérience.">
                  <MKBox component="a" href="https://nestjs.com/" target="_blank">
                    <MKBox
                      component="img"
                      src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={3}>
                <Tooltip title="Typescript - 4 ans d'expérience">
                  <MKBox component="a" href="https://www.typescriptlang.org/" target="_blank">
                    <MKBox
                      component="img"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={3}>
                <Tooltip title="Express - 3 ans d'expérience">
                  <MKBox component="a" href="https://expressjs.com/" target="_blank">
                    <MKBox
                      component="img"
                      src="https://www.guayerd.com/wp-content/uploads//2021/04/expressjs-logo.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={3}>
                <Tooltip title="Redis - 2 ans d'expérience">
                  <MKBox component="a" href="https://redis.io/" target="_blank">
                    <MKBox
                      component="img"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjxG5Qb38rX39m1M2p1W4t8H70OKpRY2breg&usqp=CAU"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={3}>
                <Tooltip title="PostgreSQL - 6 ans d'expérience">
                  <MKBox component="a" href="https://www.postgresql.org/" target="_blank">
                    <MKBox
                      component="img"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={3}>
                <Tooltip title="GraphQL - 2 ans d'expérience">
                  <MKBox component="a" href="https://graphql.org/" target="_blank">
                    <MKBox
                      component="img"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={3}>
                <Tooltip title="Git - 8 ans d'expérience">
                  <MKBox component="a" href="https://git-scm.com/" target="_blank">
                    <MKBox
                      component="img"
                      src="https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/10/formation-git.png"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Skills;
