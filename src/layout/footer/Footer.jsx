import classes from "./footer.module.css";

export const Footer = ({ children }) => {
  return <footer className={`${classes.footer} component`}>{children}</footer>;
};
