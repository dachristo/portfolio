// @mui icons
import BusinessIcon from "@mui/icons-material/Business";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

const date = new Date().getFullYear();

export default {
  socials: [
    {
      icon: <BusinessIcon />,
      link: "https://www.malt.fr/profile/damienchristophe",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/dachristo",
    },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/dachristo/",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about me", href: "/about" },
        { name: "freebies", href: "" },
        { name: "premium tools", href: "" },
        { name: "blog", href: "" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "" },
        { name: "bits & snippets", href: "" },
        { name: "affiliate program", href: "" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "/contact-us" },
        { name: "knowledge center", href: "" },
        { name: "custom development", href: "" },
        { name: "sponsorships", href: "" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "" },
        { name: "privacy policy", href: "" },
        { name: "licenses (EULA)", href: "" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} by{" "}
      <MKTypography
        component="a"
        href=""
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Damien Christophe
      </MKTypography>
      .
    </MKTypography>
  ),
};
