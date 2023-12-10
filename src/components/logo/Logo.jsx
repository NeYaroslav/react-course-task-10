"use client";

import Imgae from "next/image";
import { connect } from "react-redux";
import { logoSelector } from "../../redux/selectors";
import classes from "./logo.module.css";

export const Logo = ({ logoPath }) => {
  return (
    <a
      href="/"
      className={classes.logo}>
      <Imgae
        width={48}
        height={48}
        src={logoPath}
        alt="batman logo"
      />
    </a>
  );
};

const mapStateToProps = (state) => ({
  logoPath: logoSelector(state),
});
export const ConnectedLogo = connect(mapStateToProps)(Logo);
