import React from "react";
import PropTypes from "prop-types";

const Footer = ({ footerClass }) => (
  <div className={`defaultFooter ${footerClass}`}>
    <p>&copy; Madhav Aryal. All rights reserved.</p>
  </div>
);
Footer.propTypes = {
  footerClass: PropTypes.string,
};
export default Footer;
