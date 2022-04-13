import { Typography } from "@material-ui/core";
import React from "react";
import { Copyright } from "./CopyRigth";

export const Footer = ({ className }: { className: string }) => {
  return (
    <footer className={className}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Practical example with drag and drop
      </Typography>
      <Copyright />
    </footer>
  );
};
