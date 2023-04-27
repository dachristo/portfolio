// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import Navbar from "components/Navbars";
import Footer from "components/Footers";

// Presentation page sections
import Headers from "pages/Home/sections/Headers";
import Counters from "pages/Home/sections/Counters";
import Information from "pages/Home/sections/Information";
import Testimonials from "pages/Home/sections/Testimonials";
import TeamWork from "pages/Home/sections/TeamWork";
import Skills from "pages/Home/sections/Skills";

// Routes
import routes from "routes/routes";
import footerRoutes from "routes/footer.routes";

function Presentation() {
  return (
    <>
      <Navbar
        brand="Dachristo"
        routes={routes}
        action={{
          type: "internal",
          route: "/hire",
          label: "Hire Me !",
          color: "info",
        }}
        sticky
      />
      <Headers />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
        <TeamWork />
        <Testimonials />
        <Skills />
      </Card>
      <MKBox px={1} mt={6}>
        <Footer content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
