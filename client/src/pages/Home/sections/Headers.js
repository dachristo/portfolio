// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import bgImage from "assets/images/bg-homepage.png";
import Card from "@mui/material/Card";

function Headers() {
  return (
    <MKBox
      minHeight="75vh"
      width="100%"
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={12} justifyContent="center" mx="auto">
          <Card
            sx={{
              p: 5,
              mx: { xs: 2, lg: 3 },
              mt: 10,
              mb: 10,
              backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
                rgba(white.main, 0.8),
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
            }}
          >
            <MKTypography
              variant="h1"
              mt={0}
              mb={1}
              textAlign="center"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["xl"],
                },
              })}
            >
              Expert en développement back-end NodeJS{" "}
            </MKTypography>
            <MKTypography variant="body1" textAlign="center" px={{ xs: 6, lg: 12 }} mt={1}>
              Je suis là pour vous aider à développer des applications performantes et scalables,
              avec une expérience de plusieurs années dans le domaine
            </MKTypography>
          </Card>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Headers;
