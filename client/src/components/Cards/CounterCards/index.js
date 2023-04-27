// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-countup component
import CountUp from "react-countup";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function CounterCard({ color, count, title, description, duration, ...rest }) {
  return (
    <MKBox p={2} textAlign="center" lineHeight={1}>
      <MKTypography variant="h1" color={color} textGradient>
        <CountUp end={count} duration={duration} {...rest} />
      </MKTypography>
      {title && (
        <MKTypography variant="h5" mt={2} mb={1}>
          {title}
        </MKTypography>
      )}
      {description && (
        <MKTypography variant="body2" color="text">
          {description}
        </MKTypography>
      )}
    </MKBox>
  );
}

// Setting default props for the CounterCard
CounterCard.defaultProps = {
  color: "info",
  description: "",
  title: "",
  duration: 1,
};

// Typechecking props for the CounterCard
CounterCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  count: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default CounterCard;
